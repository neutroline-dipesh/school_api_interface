import React from "react";
import "./Sidebar.css";
import { SidebarItems } from "./SidebarItems";
import { Jumbotron } from "reactstrap";
import { Link } from "react-router-dom";
import Mobilesidebar from "../../assets/js/Mobilesidebar";
import AboutUsData from "./AboutUsData.json";

function Sidebar() {
  // const [click, setClick] = useState(false);
  // const handleClick = () => setClick(!click);

  return (
    <div>
      <div className="aboutUsPage">
        <div className="sidebar">
          <ul className="sidebarList">
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
        <div className="aboutUsHead">
          <h1 className="title">About Us</h1>
          <p>
            {AboutUsData.titlequote}
          </p>

          <hr className="my-2" />
        </div>
        <div className="aboutUsBody">
          <Jumbotron>
            <h1 className="animate__animated animate__fadeInRight">
              {AboutUsData.schoolName}
            </h1>

            <div className="col-xs-2">
              <img
                className="animate__animated animate__fadeInRight"
                src="./images/school-2.jpg"
                alt="schoolBuilding"
              />
            </div>
            <br />
            <br />

            <p>
            Neutroline is established in 2019 with an aim to provide a
              technology solution to all types of clients including individuals,
              government, all kind of small business and large organizations.
              After a successful work in the field of IT Recruiting in United
              States, our team has came up with an idea to expand the area of
              work by utilizing the knowledge, experience and technology and
              provide a software solutions to the client in Nepal and
              Internationally. We believe we should do something to our country
              and give back to the society. We want our young generations get an
              opportunity to expose their talent, utilize their knowledge and
              skills in home country.
              <br />
              The school has excellent infrastructure supported by
              state-of-the-art facilities. It has modern academic buildings with
              spacious classrooms, laboratories, conference hall, hostel
              buildings, administrative offices, a cafeteria and spacious
              playing grounds for games and sports such as football, basketball,
              etc. There are separate buildings and rooms for extra-curricular
              activities such as gymnastics, judo, keyboard, percussion, guitar,
              violin, sitar, etc.
              <br />
              Over the past decade, UEF has acquired over 400 ropanis of land in
              Kavre district, and an additional 600 ropanis by the local school
              and community. This year in October 2020, the UEF is launching a
              new program, Ullens LEAP, a gap year program, which is a bridge to
              life-long-learning. In addition, the UEF is planning to build the
              first liberal arts college in Nepal. The Vision of UEF is to
              promote world-class education in Nepal and to promote education as
              a non-profit venture fostering a great level of social
              responsibility. As the Patron of the School, Guy Ullens himself
              aptly pointed out, “Nepal can be the Land of Education” in South
              Asia, and UEF seeks to promote Nepal as an education hub in South
              Asia.
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

export default Sidebar;
