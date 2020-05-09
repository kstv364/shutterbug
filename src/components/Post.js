import React from "react";
import { Card } from "react-bootstrap";
export default function Post(props) {
  const [first_name, last_name, picture] = props.user;
  return (
    <Card>
      <Card.Header>
        <h5>
          {first_name} {last_name}
        </h5>
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
