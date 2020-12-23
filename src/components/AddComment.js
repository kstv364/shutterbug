import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { db, auth } from "../firebase";
import firebase from "firebase";
import "./AddComment.css";

function AddComment({ user, post }) {
  const [comment, setComment] = useState("");
  //   console.log(user, post, comment);
  const handlePost = (e) => {
    e.preventDefault();
    console.log(user, post, comment);
    const docref = db.collection("posts").doc(post.id);
    docref
      .get()
      .then((doc) => {
        let data = doc.data();
        docref
          .set({
            ...data,
            comments: [
              ...data.comments,
              {
                timestamp: new Date(),
                uid: auth.currentUser.uid,
                uname: user.name,
                comment,
              },
            ],
          })
          .then(() => {
            setComment("");
            console.log("Comment added");
          })
          .catch((e) => alert(e.message));
      })
      .catch((e) => alert(e.message));
  };
  return (
    <div className="addComment">
      <TextField
        className="addComment__input"
        inputProps={{ style: { fontSize: 12 } }} // font size of input text
        InputLabelProps={{ style: { fontSize: 12 } }}
        label="Add a comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <Button
        size="small"
        variant="outlined"
        color="primary"
        onClick={handlePost}
      >
        Post
      </Button>
    </div>
  );
}

export default AddComment;
