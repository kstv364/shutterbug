import React, { useEffect } from "react";
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

  return (
    <div className="comment">
      <div className="comment__text">
        <span>
          <strong>{comment.uname}</strong>{" "}
        </span>
        {comment.comment}
      </div>
    </div>
  );
}

export default Comment;
