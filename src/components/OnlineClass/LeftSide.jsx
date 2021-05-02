import React from "react";
import { Form, Button } from "react-bootstrap";
import "./leftside.css";

const LeftSide = () => {
  return (
    <div className="Login-formOC">
      <Form style={{ width: "60%", marginLeft: "10%", marginTop: "10%" }}>
        <Form.Group>
          <Form.Label>
            {" "}
            <h5>Username:</h5>{" "}
          </Form.Label>
          <div className="userInput">
            <Form.Control type="text" placeholder="Enter your username" />
          </div>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            {" "}
            <h5>Password:</h5>{" "}
          </Form.Label>
          <div className="passwordInput">
            <Form.Control type="password" placeholder="Enter your password" />
          </div>
        </Form.Group>
        <Button type="submit" style={{ marginLeft: "0px" }}>
          Login
        </Button>
      </Form>
    </div>
  );
};

export default LeftSide;
