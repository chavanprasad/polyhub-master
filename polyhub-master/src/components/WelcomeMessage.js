import "./pages/custom.css";

import { Jumbotron } from "react-bootstrap";
import React from "react";

const WelcomeMessage = () => {
  return (
    <Jumbotron className="welcomeMessage">
      <h1>WELCOME TO POLYHUB</h1>
    </Jumbotron>
  );
};

export default WelcomeMessage;
