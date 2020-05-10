import React, { Component } from "react";
import { Image } from "react-bootstrap";


export default props => {
  const { top5 } = props;
  return (
    <>
      <h6> People you may know </h6> {
        top5.map(user => {
          return (
            <div style={{ display: "flex", margin: "20px" }}>
              < Image
                style={{ width: "30%" }}
                src={require(`../assets/pictures/${user.picture}`)}
                roundedCircle />
              <span style={{ padding: "20px" }}>
                {user.first_name} {user.last_name}
              </span>
            </div>
          )
        })
      }
    </>
  );
};