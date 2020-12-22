import React, { useEffect } from "react";
import { TextField, Button, Avatar } from "@material-ui/core";
import { auth, storage } from "../firebase";
import { useStateValue } from "../StateProvider";

import "./Profile.css";

const Profile = () => {
  const [{ user }, dispatch] = useStateValue();

  const [name, setName] = React.useState(null);
  const [username, setUsername] = React.useState(null);
  const [bio, setBio] = React.useState(null);
  const [image, setImage] = React.useState(null);
  const [progress, setProgress] = React.useState(0);

  const updateProfile = (e) => {
    e.preventDefault();
    if (!user) {
      alert("Sign in First");
      return;
    }
    user
      .updateProfile({
        displayName: name,
      })
      .then(() => {
        if (image) {
          handleUpload();
        }
        console.log("Updated");
      })
      .catch((err) => alert(err.message));
  };

  useEffect(() => {
    setName(user?.displayName || user?.email);
    setUsername(user?.email);
    return () => {};
  }, [user]);

  const handleChange = (event) => {
    if (!event.target.files[0]) return;
    setImage({
      file: event.target.files[0],
      imageUrl: URL.createObjectURL(event.target.files[0]),
    });
    console.log(event.target.files[0]);
    console.log(URL.createObjectURL(event.target.files[0]));
  };

  const handleUpload = () => {
    console.log(image);
    if (!image) return;
    const filename = `${image.file.name}${Date.now()}`;
    const uploadtask = storage.ref(`/images/${filename}`).put(image.file);

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
          .child(filename)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
            auth.currentUser
              .updateProfile({
                photoURL: url,
              })
              .then(() => {
                dispatch({
                  type: "SET_USER",
                  user: auth.currentUser,
                });
                setImage(null);
              })
              .catch((err) => console.log(err));
          })
          .catch((err) => alert(err.message));

        setProgress(0);
      }
    );
  };

  return (
    <div className="profile">
      <Avatar
        className="profile__image"
        src={image?.imageUrl || user?.photoURL}
        alt="user"
      ></Avatar>
      <input type="file" onChange={handleChange} />
      {progress > 0 ? <div>Uploaded {progress}%</div> : ""}
      <TextField
        label="Name"
        value={name || ""}
        className="profile__text"
        onChange={(e) => setName(e.target.value)}
      ></TextField>
      <TextField
        label="Username"
        className="profile__text"
        value={username || ""}
        onChange={(e) => setUsername(e.target.value)}
      ></TextField>
      <TextField
        label="Bio"
        className="profile__text"
        value={bio || ""}
        onChange={(e) => setBio(e.target.value)}
      ></TextField>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        onClick={updateProfile}
      >
        Update Profile
      </Button>
    </div>
  );
};

export default Profile;
