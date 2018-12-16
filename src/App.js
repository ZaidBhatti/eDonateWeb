import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "./App.css";
import Header from "./components/header/header";
import CardComponent from "./components/card/card";
import { Button } from "reactstrap";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Container>
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <Row>
                <Col>Item Details</Col>
              </Row>
              <CardComponent />
              <Button color="primary" size="lg">
                Avail Donation
              </Button>{" "}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
