import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";

const Post = ({ username, caption, imageUrl, userPhotoUrl }) => {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt={username}
          src={userPhotoUrl}
        ></Avatar>
        <h5>{username}</h5>
      </div>

      <img className="post__image" src={imageUrl} alt={username} />
      <div className="post__caption">
        <h6 className="post__text">
          <strong>{username}</strong> {caption}
        </h6>
      </div>
    </div>
  );
};

export default Post;
