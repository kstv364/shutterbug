import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import data from "./assets/data/final.json";
import Hero from "./components/Hero";

function App() {
  
  const top5 = data.slice(0,5)
  console.log(top5);
  return (
    <>
      <Navbar></Navbar>
      <Container style={{ marginTop: "6em" }}>
        <Row className="justify-content-md-center">
          <Col xs="12" lg="8">
            <Hero data={data}></Hero>
          </Col>
          <Col xs="12" lg="4">
            <Sidebar top5={top5}></Sidebar>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
