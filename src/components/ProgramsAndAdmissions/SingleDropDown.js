import React, { useState } from "react";
import { UncontrolledCollapse, Button, CardBody, Card } from "reactstrap";

const SingleDropDown = (props) => {
  const [clicked, setClicked] = useState(false);

  const toggle = (prevValue) => { 
    setClicked(!prevValue);
  };
  return (
    <div>
      <Button
      onClick={toggle}
        color="info"
        id={props.mainid}
        style={{
          marginBottom: "1rem",
          fontSize: "1.5em",
          width: "100%",
          fontFamily: "Open Sans Condensed",
          textAlign: "start",
          color: "#fff",
        }}
      >
        {props.topic}
      </Button>
      <UncontrolledCollapse toggler={props.idref}>
        <Card>
          <CardBody>
            <ol type="1">
              <li>{props.ruleOne}</li>
              <li>{props.ruleTwo}</li>
              <li>{props.ruleThree}</li>
              <li>{props.ruleFour}</li>
              <li>{props.ruleFive}</li>
              <li>{props.ruleSix}</li>
            </ol>
          </CardBody>
        </Card>
      </UncontrolledCollapse>
    </div>
  );
};

export default SingleDropDown;
