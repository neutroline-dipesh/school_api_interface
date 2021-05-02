import React, { useState } from "react";
import "./admin.css";

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

export const adminStaffDetails = [
  {
    name: "Mr. Invoker  ",
    position: "Founder Chairman",
    url: "./images/admin-1.jpg",
    text: "admin",
    mobile: "+9779846717545",
    email: "invoker@gmail.com",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of",
  },
  {
    name: "Mr. Earth Spirit ",
    position: " President",
    url: "./images/admin-2.jpg",
    text: "admin",
    mobile: "+9779846717546",
    email: "spirit@gmail.com",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of",
  },
  {
    name: "Mr. Juggernaut ",
    position: "Co Founder ",
    url: "./images/admin-3.jpg",
    text: "admin",
    mobile: "+9779846717547",
    email: "Juggernaut@gmail.com",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of",
  },
  {
    name: "Mr. Pudge ",
    position: "Head of Math Department",
    url: "./images/admin-4.jpg",
    text: "admin",
    mobile: "+97798467175458",
    email: "pudge@gmail.com",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of",
  },
];

function AdministrativeMembers() {
  // const [activeTab, setActiveTab] = useState("1");

  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState("");

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  function callOpenModal(index) {
    setSelectedId(index);
  }

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
      <div className="adminMemberPage">
        <div className="admin-sidebar">
          <ul className="admin-sidebarList">
            {SidebarItems.map((item, index) => {
              return (
                <li className="adminSingle-row" key={index}>
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
        <div className="adminBody">
          <div className="container">
            <div className="comitteeMessage">
              <h3 className="text-center font-weight-bold">
                School Management Committee
              </h3>
              <p className="committeePassage">
                The School Management Committee provides strategic support and
                guidance to the School in order to ensure the quality of
                education and outcomes. The structure of the SMC has a
                Chairperson, the Principal is the Member Secretary, 2 parents of
                the school become parent representatives, along with one teacher
                representative and 1 local government representative and 1 local
                representative.
              </p>
            </div>
          </div>

          <div className="container-fluid">
            <hr />
            <h2
              id="admin-head"
              className="animate__animated animate__fadeIn font-weight-bold"
            >
              {" "}
              Administrative Staffs
            </h2>
            <hr className="my-3" />

            <Row className="adminStaffCardContainer">
              {adminStaffDetails.map((staff, index) => {
                return (
                  <Col sm="4" key={index}>
                    <Card
                      className="adminCard"
                      onClick={() => {
                        openModal();
                        callOpenModal(index);
                      }}
                    >
                      <CardImg src={staff.url} alt={staff.text} />
                      <CardBody>
                        <CardTitle tag="h5">{staff.name}</CardTitle>
                        <CardText>{staff.position}</CardText>
                      </CardBody>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </div>
        </div>
      </div>
      <div>
        <StaffModal
          showModal={showModal}
          setShowModal={setShowModal}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />
      </div>
      <div>
        <Mobilesidebar SidebarItems={SidebarItems} />
      </div>
    </div>
  );
}

export default AdministrativeMembers;
