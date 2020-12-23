import React, { useEffect, useState } from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";
import { db } from "../firebase";
import Comment from "./Comment";

const Post = ({ post }) => {
  const [postDetail, setPostDetail] = useState(null);
  const [comments, setComments] = useState([
    {
      id: "daedaedada",
      uid: "dewdadetgdtgt",
      text: "comment text",
    },
    {
      id: "daedaedadaswsw",
      uid: "dewdadetgdtgt",
      text:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    },
  ]);
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
      <div className="post__comments">
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment}></Comment>
        ))}
      </div>
    </div>
  );
};

export default Post;
