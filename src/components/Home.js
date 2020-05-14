import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import "./Home.css";
import Sidebar from "./Sidebar";
import Post from "./Post";

export default (props) => {
  const { data, top5 } = props;

  const [posts, setPosts] = useState(top5);

  return (
    <>
      <div className="container" style={{ marginTop: "3em" }}>
        <Row className="justify-content-md-center">
          <Col xs="12" lg="8">
            {posts.map((user) => (
              <Post key={user.phone_number} user={user}></Post>
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
