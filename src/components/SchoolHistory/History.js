import React from "react";
import "./History.css";
import { SidebarItems } from "../InnerAboutUs/SidebarItems";
import { Jumbotron } from "reactstrap";
import { Link } from "react-router-dom";
import { GiGreekTemple } from "react-icons/gi";
import Mobilesidebar from "../../assets/js/Mobilesidebar";

function History() {
  return (
    <div>
      <div className="historyPage">
        <div className="history-sidebar">
          <ul className="history-sidebarList">
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
        <div className="historyBody">
          <Jumbotron>
            <h1 className="history-heading animate__animated animate__fadeIn">
              Our History
              <GiGreekTemple />
            </h1>

            <div className="col-xs-2">
              <img
                className="animate__animated animate__fadeInRight"
                src="./images/school-4.jpg"
                alt="schoolMainBuilding"
              />
            </div>
            <br />
            <br />

            <p>
              About three decades ago, parents eager to give their children good
              education in English Medium had to opt for some of the hill
              stations in India. Before winter started, most such parents and
              guardians were found heading towards these stations to bring their
              children home for Winter vacation, and this too, after depositing
              a lot of money there. With a view to reducing the flow of Nepalese
              revenue outside, some farsighted Nepalese citizens came up with a
              proposal of establishing English medium schools within the country
              to impart quality education to Nepalese students. In the year 2038
              B.S., under the initiative of Mr. Rajesh Khadka, Mr. Gopal Kumar
              Basnet, Mr. Sudhir Siwakoti and Mr. Dinesh Malla, Little Flowers'
              English School came into being in the then hamlet of Birtamode in
              Jhapa with a total number of 47 students and 4 teachers ranging
              from classes Nursery to Grade II. Now, Little Flowers' English
              School is a full-fledged Higher Secondary School catering to more
              than 1800 students and is, perhaps, the only school with all the
              required infrastructure in the Eastern Development Region.
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

export default History;
