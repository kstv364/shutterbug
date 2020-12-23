import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import { db } from "../firebase";
import "./Comment.css";

function Comment({ comment }) {
  useEffect(() => {
    // db.collection("users")
    //   .doc(comment.uid)
    //   .get()
    //   .then((doc) => {
    //     const info = doc.data();
    //     setUserInfo({
    //       ...info,
    //     });
    //   });
  }, []);

  const [userInfo, setUserInfo] = useState(null);
  return (
    <div className="comment">
      <Avatar
        className="comment__avatar"
        alt={userInfo?.username}
        src={userInfo?.userPhotoUrl}
      ></Avatar>
      <div className="comment__text">{comment.text}</div>
    </div>
  );
}

export default Comment;
