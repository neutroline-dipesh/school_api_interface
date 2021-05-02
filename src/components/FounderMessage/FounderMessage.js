import React from "react";
import "./FounderMessage.css";
import { Jumbotron } from "reactstrap";
import { SidebarItems } from "../InnerAboutUs/SidebarItems";
import { Link } from "react-router-dom";
import Mobilesidebar from "../../assets/js/Mobilesidebar";

function FounderMessage() {
  // const [click, setClick] = useState(false);
  // const handleClick = () => setClick(!click);
  return (
    <div>
      <div className="founderMessagePage">
        <div className="founder-sidebar">
          <ul className="founder-sidebarList">
            {SidebarItems.map((item, index) => {
              return (
                <li className="single-row" key={index}>
                  <div
                    id={item.id}
                    className={
                      window.location.pathname === item.path ? "active" : ""
                    }
                    // onClick={() => {
                    //   window.location.pathname = item.path;
                    // }}
                    // <div id={item.id} className={click ? "fas fa-angle-right mr-1" : ""}> </div>
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
        <div className="founderBody">
          <Jumbotron>
            <h1 className="animate__animated animate__fadeInRight">
              Founder Director's Message
            </h1>

            <div className="col-xs-2">
              <img
                className="animate__animated animate__fadeInRight"
                src="./images/principal.jpg"
                alt="schoolPrincipal"
              />
            </div>
            <br />
            <br />

            <p>
              “One thing you cannot recycle is wasted time” My students learn
              value of time, importance of labour and necessity of positive
              discipline, and that’s all. United School contemplates “Eastern
              Heart Western Mind”. Inculcating value of time, sensing importance
              of labour and knowing the necessity of positive discipline
              develops a person with “Eastern Heart Western Mind”. I believe a
              school is a place for students to make strong foundation for their
              future career. Total school management designs day to day teaching
              learning activities, implements, monitors, evaluates them and
              redesigns activities for better outcome of each child every term
              and every year.
              <br />
              <br /> To achieve this goal: I consider teachers: Create conducive
              environment to thrive each child’s knowledge. Implement ownership
              of learning to students. Design innovative plan using the
              resources available to teach students problem solving skills.
              Demonstrate ongoing professional growth to increase the quality of
              instruction. Involve in teachers’ forum to discuss current
              pedagogical practices. Updates with each child’s achievement and
              creates triangular relationship of teacher,parent and student for
              better achievement. <br />
              <br />I consider students: Learn to create best out of the time
              and resources given. Develop problem solving skill individually
              and in team. Understand the strength of team spirit and
              contribution of an individual in a team work. Perceive the potency
              of positive discipline; and implement it to bring positive vibes
              among their colleagues. Develop capability to foresee future
              achievement out of everyday small labours in collection. Regarding
              parents a source of inspiration and knowledge, I would like to
              welcome them to my office.
              <br />
              <br /> Sincerely,
              <br /> Mr. Kuldip Neupane <br />
              Director
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

export default FounderMessage;
