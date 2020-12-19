import React, { useState } from "react";
import { Modal } from "@material-ui/core";
import { Input } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { storage, db } from "../firebase";
import "./AddPost.css";
import firebase from "firebase";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function AddPost({ username }) {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [caption, setCaption] = useState("");
  const [modalStyle] = React.useState(getModalStyle);

  const handleOnChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadtask = storage.ref(`/images/${image.name}`).put(image);

    uploadtask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (err) => {
        console.log(err);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((imageUrl) => {
            db.collection("posts").add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              caption,
              imageUrl,
              username,
            });
          });
        setProgress(0);
        setCaption("");
        setImage(null);
        setOpenModal(false);
      }
    );
  };

  return (
    <div className="addPost">
      <Button onClick={() => setOpenModal(true)}>Add Post</Button>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <div style={modalStyle} className={classes.paper}>
          <div className="addPost__details">
            <h2>Add a Post</h2>
            <Input
              type="text"
              placeholder="caption"
              onChange={(e) => setCaption(e.target.value)}
            ></Input>
            <Input
              type="file"
              placeholder="caption"
              onChange={handleOnChange}
            ></Input>
            <progress value={progress} max="100" />
            <Button onClick={handleUpload}>Post</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default AddPost;
