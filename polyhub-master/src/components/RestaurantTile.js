import "./pages/custom.css";
import {} from "react-bootstrap";

import { Button, Card, Col, Container, Row } from "react-bootstrap";

import Footer from "./Footer";
import { Link } from "react-router-dom";
import React from "react";
import { RestaurantData as data } from "./RestaurantData";

const CardItem = (props) => {
  return (
    <div className="restaurantCard">
      <Card
        style={{ width: "auto", boxShadow: "1px 5px 15px #F5F5F5" }}
        className="restaurantCardChild"
      >
        <Card.Body>
          <Row>
            <Col>
              <Card.Title>{props.text}</Card.Title>

              <Card.Text>Snacks</Card.Text>
            </Col>
            <Col xs={4}>
              <Link to={props.path}>
                <Button className="button" variant="primary">
                  Menu
                </Button>
              </Link>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};
const RestaurantTile = (props) => {
  return (
    <div>
      <Container>
        <h4 style={{ textAlign: "center" }}>Our Vendors</h4>
        <Row>
          {data.map((data) => {
            return (
              <Col md={6} xs={12} key={data.id}>
                {" "}
                <CardItem
                  text={data.restaurantName}
                  src="logo512.png"
                  path="/goodfood"
                />
              </Col>
            );
          })}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default RestaurantTile;
