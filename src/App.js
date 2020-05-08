import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Container style={{ marginTop : "6em"}}>
        <Row className="justify-content-md-center">
          <Col xs lg="8">
            <Home></Home>
          </Col>
          <Col xs lg="4">
            <Sidebar></Sidebar>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
