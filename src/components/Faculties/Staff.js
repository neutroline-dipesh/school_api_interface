import React, { useState, useEffect } from "react";
import "./Staff.css";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  Row,
  Col,
} from "reactstrap";
import classnames from "classnames";
import { SidebarItems } from "../InnerAboutUs/SidebarItems";
import { Link } from "react-router-dom";
import Mobilesidebar from "../../assets/js/Mobilesidebar";
import axios from "axios";

function Staff(props) {
  const [activeTab, setActiveTab] = useState("1");

  const adminStaffDetails = [
    {
      name: "Mr. Dhruba Giri",
      position: "Founder Chairman",
      url: "./images/admin-1.jpg",
      text: "admin",
    },
    {
      name: "Mr. Dhruba Giri",
      position: "Founder Chairman",
      url: "./images/admin-2.jpg",
      text: "admin",
    },
    {
      name: "Mr. Dhruba Giri",
      position: "Founder Chairman",
      url: "./images/admin-3.jpg",
      text: "admin",
    },
    {
      name: "Mr. Dhruba Giri",
      position: "Founder Chairman",
      url: "./images/admin-4.jpg",
      text: "admin",
    },
  ];

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

  // tab is taking 1 or 2 from below as an input
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  //getting data from database
  const [about, setAbout] = useState([]);
  const fetchData = async () => {
    axios.get("http://localhost:4000/about/").then((response) => {
      if (response.data) {
        setAbout(response.data.data);
      } else {
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(about);

  return (
    <div>
      <div className="staffPage">
        <div className="staff-sidebar">
          <ul className="staff-sidebarList">
            {SidebarItems.map((item, index) => {
              return (
                <li className="single-row" key={index}>
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
        <div className="staffBody">
          <h2 className="animate__animated animate__fadeIn staff-head">
            {" "}
            Administrative Staffs & Faculties
          </h2>
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "1" })}
                onClick={() => {
                  toggle("1");
                }}
              >
                Admin Staffs
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "2" })}
                onClick={() => {
                  toggle("2");
                }}
              >
                Faculty
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <Row>
                {about.map((item) => {
                  return (
                    <Col sm="4">
                      <Card className="staffCard">
                        <CardImg src={item.profile_pic} alt="faculty" />
                        <CardBody>
                          <CardTitle tag="h5">{item.admin}</CardTitle>
                          <CardText>{item.faculties}</CardText>
                        </CardBody>
                      </Card>
                    </Col>
                  );
                })}
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                {facultyDetails.map((faculty) => {
                  return (
                    <Col sm="4">
                      <Card className="staffCard">
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
            </TabPane>
          </TabContent>
        </div>
      </div>
      <div>
        <Mobilesidebar SidebarItems={SidebarItems} />
      </div>
    </div>
  );
}

export default Staff;
