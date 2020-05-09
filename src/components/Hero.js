import React from "react";
import { Card } from "react-bootstrap";
import Post from "./Post";

export default function Hero(props) {
  const { data } = props;
  return (
    <div>
      {data.map(user => {
        return <Post key={user.phone_number} user={user}></Post>;
      })}
    </div>
  );
}
