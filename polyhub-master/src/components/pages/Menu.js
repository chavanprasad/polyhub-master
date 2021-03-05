import "./custom.css";

import { Button, Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

import Footer from "../Footer";
import MenuItems from "../MenuItems";
import React from "react";
import WelcomeMessage from "../WelcomeMessage";

const Menu = () => {
  return (
    <div>
      <WelcomeMessage />
      <Container>
        <h4 style={{ textAlign: "center" }}>Our Menu</h4>
        <Row>
          <Col sm={12}>
            {" "}
            <MenuItems />
          </Col>
        </Row>
        <Link to="/">
          <Button className="button">Go Home</Button>
        </Link>
      </Container>
      <Footer />
    </div>
  );
};

export default Menu;
