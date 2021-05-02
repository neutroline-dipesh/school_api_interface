import React from "react";
import { Form, Button } from "react-bootstrap";
import "./studentPortalForm.css";

const StudentPortalForm = () => {
  return (
    <div>
      <Form style={{ width: "80%", marginLeft: "10%", marginTop: "10%" }}>
        <Form.Group>
          <Form.Label>
            {" "}
            <h5>School Name:</h5>{" "}
          </Form.Label>

          <select class="form-control" id="school">
            <option>Neutroline English Boarding School, Devdaha</option>
            <option>Neutroline English Boarding School, Kathmandu</option>
            <option>Neutroline English Boarding School, Butwal</option>
          </select>
        </Form.Group>

        <Form.Group>
          <Form.Label>
            <h5> Grade:</h5>
          </Form.Label>

          <select class="form-control" id="grade">
            <option>Grade-1</option>
            <option>Grade-2</option>
            <option>Grade-3</option>
            <option>Grade-4</option>
            <option>Grade-5</option>
            <option>Grade-6</option>
            <option>Grade-7</option>
            <option>Grade-8</option>
            <option>Grade-9</option>
            <option>Grade-10</option>
          </select>
        </Form.Group>

        <Form.Group>
          <Form.Label>
            <h5>Section:</h5>{" "}
          </Form.Label>
          <select class="form-control" id="grade">
            <option>Section-A</option>
            <option>Section-B</option>
            <option>Section-C</option>
            <option>Section-D</option>
          </select>
        </Form.Group>

        <Form.Group>
          <Form.Label>
            {" "}
            <h5>Username:</h5>{" "}
          </Form.Label>
          <div className="nameField">
            <Form.Control type="text" placeholder="Enter your username" />
          </div>
        </Form.Group>

        <Form.Group>
          <Form.Label>
            {" "}
            <h5>Password:</h5>{" "}
          </Form.Label>
          <div className="passwordField">
            <Form.Control type="password" placeholder="Enter your password" />
          </div>
        </Form.Group>

        <Button type="submit"  style = {{marginLeft: "0px"}}>Login</Button>
      </Form>
    </div>
  );
};

export default StudentPortalForm;
