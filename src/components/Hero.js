import React from "react";
import { Card } from "react-bootstrap";
import Post from "./Post";

export default function Hero(props) {
  return (
    <div>
      <Post {...props}></Post>
    </div>
  );
}
