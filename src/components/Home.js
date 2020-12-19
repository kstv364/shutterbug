import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import "./Home.css";
import Sidebar from "./Sidebar";
import Post from "./Post";
import AddPost from "./AddPost";
import { db } from "../firebase";

export default (props) => {
  const { data, top5, user } = props;

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });
  }, []);
  console.log(posts);
  return (
    <>
      <div className="container" style={{ marginTop: "3em" }}>
        <Row className="justify-content-md-center">
          <Col xs="12" lg="8">
            {user ? <AddPost username={user?.email}></AddPost> : <></>}
            {posts.map((post) => (
              <Post
                key={post.id}
                username={post.username}
                caption={post.caption}
                imageUrl={post.imageUrl}
              ></Post>
            ))}
          </Col>
          <Col xs="12" lg="4">
            <Sidebar top5={top5}></Sidebar>
          </Col>
        </Row>
      </div>
    </>
  );
};
