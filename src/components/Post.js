import React from "react";
import { Card, Image } from "react-bootstrap";
export default function Post(props) {
  const { first_name, last_name, picture } = props.user;
  return (
    <Card style={{ marginBottom: "2em" }}>
      <Card.Header>
        <div style={{ display: "block" }}>
          <Image style={{ width: "12.5%" }}
            src={require(`../assets/pictures/${picture}`)}
            roundedCircle

          />
          <span style={{ display: "inline-block", padding : "10px" }}>
            <h6>{first_name.toUpperCase()} {last_name.toUpperCase()}</h6>
          </span>

        </div>

      </Card.Header>
      <Card.Img variant="top" src={require(`../assets/pictures/${picture}`)} />
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

  );
}