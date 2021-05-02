import React from "react";
import { SidebarItems } from "../InnerAboutUs/SidebarItems";
import "./OurVision.css";
import { Link } from "react-router-dom";
import { Jumbotron } from "reactstrap";
import Mobilesidebar from "../../assets/js/Mobilesidebar";

function OurVision() {
  return (
    <div>
      <div className="ourVisionPage">
        <div className="vision-sidebar">
          <ul className="vision-sidebarList">
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
        <div className="visionBody">
          <Jumbotron>
            <h1 className="animate__animated animate__fadeIn">
              Our Vision and Objectives
            </h1>
            <br />
            <br />
            <h4>VISION</h4>
            <p>
              To promote excellence and enjoyment in a vibrant teaching and
              learning environment.
            </p>
            <br />
            <h4>MISSION</h4>
            <p>
              We seek to encourage individuality, foster respect for difference
              placing high value on learning from others within a proactive
              community school and caring, secure environment.
              <br />
              We strive to inspire and support all students to achieve their
              full potential for a successful and enjoyable life as responsible
              citizens with empathy and respect for others.
            </p>
            <br />

            <h4>VALUES</h4>
            <p>
              The school places great importance on the following:
              <ul>
                <br />
                <li>Community: collaboration, teamwork and unity of purpose</li>
                <li>
                  Compassion: service and action at school, locally and
                  nationally
                </li>
                <li>
                  Consideration: integrity, honesty, harmony, tolerance and
                  respect for others
                </li>
                <li>
                  Commitment: recognition of our place and responsibilities
                  within the community in which we live
                </li>
                <li>
                  Courage: to challenge ourselves as individuals and as a
                  community
                </li>
                <li>Resilience: strength to recover from adversity</li>
              </ul>
            </p>
            <br />

            <h4>PHILOSOPHY</h4>
            <p>
              We respect the dignity and merit of each child under our care
              believing that all children can be nurtured to achieve their full
              potential within a school environment that is both caring and
              challenging. <br />
              We expect all children to be respectful, responsible and to rise
              to the challenges of life.
            </p>
            <br />

            <h4>EDUCATIONAL OUTCOME</h4>
            <p>
              At the end of Primary school, pupils should be able to:
              <ul>
                <br />
                <li>distinguish right from wrong</li>
                <li>have learnt to share and put others first</li>
                <li>be able to build friendships with others</li>
                <li>have a lively curiosity about things</li>
                <li>be able to think for and express themselves</li>
                <li>take pride in their work</li>
                <li>have cultivated healthy habits</li>
                <li>love their nation</li>
              </ul>
            </p>
            <p>
              At the end of Secondary school, pupils should:
              <ul>
                <br />
                <li>have moral integrity</li>
                <li>have care and concern for others</li>
                <li>be able to work in teams and value every contribution</li>
                <li>be enterprising and innovative</li>
                <li>possess a broad-based foundation for further education</li>
                <li>believe in their ability</li>
                <li>have an appreciation for aesthetics</li>
                <li>know and believe in Nepal</li>
              </ul>
            </p>
          </Jumbotron>
        </div>
      </div>
      <div>
        <Mobilesidebar SidebarItems={SidebarItems} />
      </div>
    </div>
  );
}

export default OurVision;
