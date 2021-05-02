import React, { useState } from "react";
import { MdAdd, MdRemove } from "react-icons/md";
import { DropdownData } from "./DropdownData";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import OnlineAdmission from "./OnlineAdmission";

const AccordionSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: auto;
  background: #ffcb06;
`;
const Container = styled.div`
  clip-path: polygon(0% 0%, 100% 0%, 100% 87%, 50% 99%, 0% 87%);
  height: auto;
  width: 80%;
  position: absolute;
  top: 1%;
  background: #ffcb06;
`;
const Wrap = styled.div`
  background: #ffcb06;
  color: #000;
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 2px groove #ffeca5;
  padding-right: 2%;

  h1 {
    font-family: "Open Sans Condensed", sans-serif;
    margin: 0;
    color: #000;
    padding: 1.5rem;
    font-size: 1rem;
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .dropdown-heading {
    text-decoration: none;
  }
`;

const SubsectionWrapper = styled.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  ul,
  li {
    margin: 0;
    padding: 0;
  }

  .linkChange {
    text-decoration: none;
  }
`;

const IndividualSection = styled.div`
  border: 1px solid #ffcb05;
  font-family: "Open Sans Condensed", sans-serif;
  font-weight: 900;
  color: #000;
  background: #ffeca5;
  width: 100%;
  height: 2.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  li {
    font-family: "Open Sans Condensed", sans-serif;
    list-style-type: none;
    text-decoration: none;
  }

  &:hover {
    border-color: #f5f4ed;
    background: #f9cbb2;
  }
`;

// destructuring the array
const [admission, information, program] = DropdownData;

// now destructuring the objects in the array
const {
  subsection: { subone: online, subtwo: procedural },
} = admission;
const {
  subsection: {
    subone: preSchool,
    subtwo: elementarySchool,
    subthree: middleSchool,
    subfour: highSchool,
  },
} = information;

const {
  subsection: { subone: science, subtwo: management },
} = program;
// --------------destructuring completed

const AdmissionDropDown = () => {
  const [clicked, setClicked] = useState(false);
  const [onlineClicked, setOnlineClicked] = useState(false);

  function toggle(index) {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }
    setClicked(index);
  }

  return (
    <IconContext.Provider value={{ color: "#000", size: "25px" }}>
      <AccordionSection>
        <Container>
          {DropdownData.map((item, index) => {
            return (
              <div key={index}>
                <Wrap>
                  <Link
                    to={item.path}
                    className="dropdown-heading"
                    onClick={() => toggle(index)}
                  >
                    <h1>{item.section}</h1>
                  </Link>
                  {item.subsection ? (
                    <span onClick={() => toggle(index)} key={index}>
                      {clicked === index ? <MdRemove /> : <MdAdd />}
                    </span>
                  ) : null}
                </Wrap>
                {clicked === index ? (
                  <SubsectionWrapper key={index}>
                    <ul>
                      {index === 0 ? (
                        <div>
                          <Link className="linkChange" to="OnlineAdmission">
                            <IndividualSection>
                              {" "}
                              <li> {online}</li>
                            </IndividualSection>
                          </Link>
                          <Link className="linkChange" to="AdmissionProcedure">
                            <IndividualSection>
                              {" "}
                              <li>{procedural}</li>
                            </IndividualSection>
                          </Link>{" "}
                        </div>
                      ) : null}
                      {index === 1 ? (
                        <div>
                          <Link className="linkChange" to="PreSchool">
                            <IndividualSection>
                              {" "}
                              <li> {preSchool}</li>
                            </IndividualSection>
                          </Link>
                          <Link className="linkChange" to="ElementarySchool">
                            <IndividualSection>
                              {" "}
                              <li>{elementarySchool}</li>
                            </IndividualSection>
                          </Link>
                          <Link className="linkChange" to="MiddleSchool">
                            <IndividualSection>
                              {" "}
                              <li> {middleSchool}</li>
                            </IndividualSection>
                          </Link>
                          <Link className="linkChange" to="HighSchool">
                            <IndividualSection>
                              {" "}
                              <li> {highSchool}</li>
                            </IndividualSection>
                          </Link>
                        </div>
                      ) : null}
                      {index === 2 ? (
                        <div>
                          <Link className="linkChange" to="Science">
                            <IndividualSection>
                              {" "}
                              <li>{science}</li>
                            </IndividualSection>
                          </Link>
                          <Link className="linkChange" to="Management">
                            <IndividualSection>
                              {" "}
                              <li> {management}</li>
                            </IndividualSection>
                          </Link>
                        </div>
                      ) : null}
                    </ul>
                  </SubsectionWrapper>
                ) : null}
              </div>
            );
          })}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  );
};

export default AdmissionDropDown;
