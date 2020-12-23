import React, { useEffect, useState } from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";
import { db } from "../firebase";

const Post = ({ post }) => {
  const [postDetail, setPostDetail] = useState(null);

  useEffect(() => {
    db.collection("users")
      .doc(post.uid)
      .get()
      .then((doc) => {
        let { userPhotoUrl, username, name } = doc.data();
        post.userPhotoUrl = userPhotoUrl;
        post.username = username;
        post.name = name;
        setPostDetail(post);
      });
    return () => {};
  }, []);

  console.log(postDetail);
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt={postDetail?.username}
          src={postDetail?.userPhotoUrl}
        ></Avatar>
        <h5>{postDetail?.name}</h5>
      </div>

      <img
        className="post__image"
        src={postDetail?.imageUrl}
        alt={postDetail?.username}
      />
      <div className="post__caption">
        <h6 className="post__text">
          <strong>{postDetail?.name}</strong> {postDetail?.caption}
        </h6>
      </div>
    </div>
  );
};

export default Post;
