import "./pages/custom.css";

import { Button, Card, Col, Row } from "react-bootstrap";
import React, { useParams, useState } from "react";

import { RestaurantData as foodItems } from "./RestaurantData";

const MenuItems = (props) => {
  const [restaurant, setRestaurant] = useState([...foodItems]);

  const [...menuItems] = restaurant;
  return (
    <div>
      <Row style={{ paddingLeft: "20px" }}>
        <Col>
          <h4>Item</h4>
        </Col>
        <Col xs={4}>
          <h4>Price</h4>
        </Col>
      </Row>
      {restaurant.map((menu) => {
        console.log(restaurant.menuItems);
        return (
          <div className="itemCard">
            <Card key={menu.id}>
              <Card.Body>
                <Row>
                  <Col>
                    <Card.Title>{menu.restaurantName}</Card.Title>
                  </Col>
                  <Col md={3} xs={3}>
                    <Card.Title> Rs.20</Card.Title>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default MenuItems;
