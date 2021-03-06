import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import "./Home.css";
import Sidebar from "./Sidebar";
import Post from "./Post";
import AddPost from "./AddPost";
import { useStateValue } from "../StateProvider";
import { db } from "../firebase";

export default (props) => {
  const { top5 } = props;
  const [{ user }, dispatch] = useStateValue();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => {
          let post = {
            id: doc.id,
            ...doc.data(),
          };
          return post;
        })
      );
    });
  }, []);

  return (
    <>
      <div className="container" style={{ marginTop: "3em" }}>
        <Row className="justify-content-md-center">
          <Col xs="12" lg="8">
            {user ? <AddPost username={user?.email}></AddPost> : <></>}
            {posts.map((post) => (
              <Post key={post.id} post={post}></Post>
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
