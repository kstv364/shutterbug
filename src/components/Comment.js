import React, { useEffect, useState } from "react";
import "./Comment.css";
import { db } from "../firebase";
import { useStateValue } from "../StateProvider";

function Comment({ comment }) {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const docref = db.collection("users").doc(comment.uid);
    const unsubscribe = docref.onSnapshot(() => {
      docref.get().then((doc) => {
        setUserInfo(doc.data());
      });
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const [userInfo, setUserInfo] = useState(null);

  return (
    <div className="comment">
      <div className="comment__text">
        <span>
          <strong>{userInfo?.name}</strong>{" "}
        </span>
        {comment.comment}
      </div>
    </div>
  );
}

export default Comment;
