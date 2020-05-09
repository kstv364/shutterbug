import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

import Sidebar from "./components/Sidebar";
import data from "./assets/data/final.json";
import Hero from "./components/Hero";


function App() {
  console.log(data);

  return (
    <>
      <Navbar></Navbar>
      <Container style={{ marginTop : "6em"}}>
        <Row className="justify-content-md-center">
          <Col xs="12" lg="8">
            {data.map(user => {
              return <Hero key={user.phone_number} user={user}></Hero>;
            })}
          </Col>
          <Col xs="12" lg="4">
            <Sidebar></Sidebar>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
