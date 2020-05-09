import React, { Component } from "react";
import { Image } from "react-bootstrap";
export default props => {
  const { top5 } = props;
  return (
    <>
      {top5.map(user => {
        return (
          <div style={{ display: "block" }}>
            <Image
              style={{ width: "20%" }}
              src={require(`../assets/pictures/${user.picture}`)}
              roundedCircle
            />
            <span>
              {"         "}
              {user.first_name} {user.last_name}
            </span>
          </div>
        );
      })}
    </>
  );
};
