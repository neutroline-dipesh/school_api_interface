import React, { useState } from "react";
import "./faculty.css";
import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  Row,
  Col,
} from "reactstrap";
import { Link } from "react-router-dom";
import { StaffModal } from "./StaffModal";
import Mobilesidebar from "../../assets/js/Mobilesidebar";

function FacultyMembers(props) {
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState("");

  function openModal() {
    return setShowModal((showModal) => !showModal);
  }

  function callOpenModal(index) {
    setSelectedId(index);
  }

  const facultyDetails = [
    {
      name: "Mr. Dhruba Giri",
      position: "Founder Chairman",
      url: "./images/faculty-1.png",
      text: "faculty",
    },
    {
      name: "Mr. Dhruba Giri",
      position: "Founder Chairman",
      url: "./images/faculty-2.jpg",
      text: "faculty",
    },
    {
      name: "Mr. Dhruba Giri",
      position: "Founder Chairman",
      url: "./images/faculty-3.jpg",
      text: "faculty",
    },
    {
      name: "Mr. Dhruba Giri",
      position: "Founder Chairman",
      url: "./images/faculty-4.jpg",
      text: "faculty",
    },
  ];

  const SidebarItems = [
    {
      id: 1,
      title: "Administrative",
      path: "/ourStaffs",
    },
    {
      id: 2,
      title: "Faculty Members",
      path: "/facultyMembers",
    },
  ];

  return (
    <div>
      <div className="facultyPage">
        <div className="faculty-sidebar">
          <ul className="faculty-sidebarList">
            {SidebarItems.map((item, index) => {
              return (
                <li className="facultySingle-row" key={index}>
                  <div
                    id={item.id}
                    className={
                      window.location.pathname === item.path ? "active" : ""
                    }
                  >
                    <Link className="link-modified" to={item.path}>
                      <span>{item.title}</span>
                    </Link>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="facultyBody">
          <div className="container my-2">
            <div className="facultyMessage">
              <h3 className="text-center font-weight-bold text-capitalize">
                Team Teaching
              </h3>
              <p className="">
                The team-teaching approach to education is an offshoot of the
                Bank Street philosophy. In the elementary grades (I–V), we have
                a grade teaching system. Each classroom has two instructors to
                teach core subjects resulting in a smaller student-teacher
                ratio. From grade six onwards, students move about the building
                to subject-specific classrooms and laboratories. Core subject
                teachers across the grades make a special effort to collaborate
                with teachers of other subjects and departments, such as
                physical education, art, music, drama and Mandarin, for a more
                integrated and holistic learning experience.
                <br />
                Teachers work with students five days a week. They work a sixth
                day each week developing lesson plans and attending in-school
                professional development workshops. They have weekly conferences
                with their supervisors and faculty meetings every two weeks.
                Teachers are regularly observed and coached.
              </p>
            </div>
          </div>
          <div className="container-fluid">
            <p className="briefing">
              " Neutroline School hires the best teachers and staff members
              available. They are treated with respect and their ideas are
              valued. We train all our teachers in the Neutroline approach to
              education."
            </p>
            <hr />

            <h2
              id="faculty-head"
              className="animate__animated animate__fadeIn font-weight-bold"
            >
              {" "}
              Faculty Members
            </h2>
            <hr className="my-3" />

            <Row className="facultyStaffCardContainer">
              {facultyDetails.map((faculty, index) => {
                return (
                  <Col sm="4" key={index}>
                    <Card
                      className="facultyCard"
                      onClick={() => {
                        openModal();
                        callOpenModal(index);
                      }}
                    >
                      <CardImg src={faculty.url} alt={faculty.text} />
                      <CardBody>
                        <CardTitle tag="h5">{faculty.name}</CardTitle>
                        <CardText>{faculty.position}</CardText>
                      </CardBody>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </div>
          <div>
            <StaffModal
              showModal={showModal}
              setShowModal={setShowModal}
              selectedId={selectedId}
            />
          </div>
        </div>
      </div>
      <div>
        <Mobilesidebar SidebarItems={SidebarItems} />
      </div>
    </div>
  );
}

export default FacultyMembers;
