import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  const style = {
    width: "100%",
    color: "white",
    background: "#000000f2"
  };
  return (
    <footer className="mt-5" style={style}>
      <Container fluid={true}>
        <Row className="border-top justify-content-between p-3">
          <Col className="p-0" md={3} sm={12}>
            P shejwal 
          </Col>
          <Col className="p-0 d-flex justify-content-end" md={3}>
            This site was made by @ P shejwal.
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
