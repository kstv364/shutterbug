import React, { useEffect, useState } from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";
import { db } from "../firebase";
import Comment from "./Comment";
import AddComment from "./AddComment";
import { useStateValue } from "../StateProvider";

const Post = ({ post }) => {
  const [{ user }, dispatch] = useStateValue();

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
  }, [post]);

  console.log("postdetail", postDetail);
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
      {postDetail?.caption ? (
        <div className="post__caption">
          <div className="post__text">
            <strong>{postDetail?.name}</strong> {postDetail?.caption}
          </div>
        </div>
      ) : null}

      <div className="post__comments">
        {postDetail?.comments.map((comment) => (
          <Comment key={comment.timestamp} comment={comment}></Comment>
        ))}
      </div>
      {user ? <AddComment user={user} post={post} /> : null}
    </div>
  );
};

export default Post;
