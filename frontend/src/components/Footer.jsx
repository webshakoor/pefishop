import React from "react";
import { Col, Row, Container } from "react-bootstrap";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <footer>
        <Container>
          <Row>
            <Col className="text-center my-3">
              <p>Proshop &copy : {currentYear}</p>
            </Col>
          </Row>
        
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
