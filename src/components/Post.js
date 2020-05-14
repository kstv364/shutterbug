import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";

export default function Post(props) {
  const { first_name, last_name, picture } = props.user;
  return (
    <>
      <div className="post">
        <div className="post__header">
          <Avatar
            className="post__avatar"
            alt={first_name}
            src={require(`../assets/pictures/${picture}`)}
          ></Avatar>
          <h5>{first_name}</h5>
        </div>

        <img
          className="post__image"
          src={require(`../assets/pictures/${picture}`)}
          alt="card"
        />
        <div className="post__caption">
          <h6 className="post__text">
            <strong>{first_name}</strong> Some post caption
          </h6>
        </div>
      </div>
    </>
  );
}
