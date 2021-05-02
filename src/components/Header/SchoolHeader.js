import React from "react";
import styled from "styled-components";
import moment from "moment";
import {
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
import Button from "../Buttons/Button";
import { Link } from "react-router-dom";
import SchoolHeaderData from "./SchoolHeader.json";

const SchoolHeaderContainer = styled.div`
  height: 20vh;
  width: 100%;
  display: flex;
`;

const SchoolLogoSection = styled.div`
  width: 20%;
  height: 19vh;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 135px;
    width: 135px;
  }

  @media (max-width: 480px) {
    img {
      height: 115px;
      width: 109px;
    }
  }
`;
const SchoolMiddleSection = styled.div`
  width: 100%;
  height: 19vh;
  background: #187af3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1000px) {
    width: 70%;
    height: 10vh;
    margin-top: 1.8rem;
    margin-left: 1.4%;
  }

  .date-time {
    width: inherit;
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    font-weight: 600;
    height: 4vh;
    background: #fff;
    color: #000;
    display: flex;
    justify-content: center;
    @media (max-width: 1000px) {
      position: absolute;
      left: 0px;
      top: 0px;
      justify-content: left;
      width: 60%;
    }
  }

  .school-name {
    width: inherit;
    height: 14vh;
    font-family: "Nunito Sans", sans-serif;
    font-weight: 900;
    font-size: 2em;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 1000px) {
      font-size: 1.4em;
      text-align: center;
    }
    @media (max-width: 480px) {
      font-size: 1.3em;
      text-align: center;
    }
  }
`;
const SchoolRightSection = styled.div`
  width: 30%;
  height: 19vh;
  display: flex;
  flex-direction: column;

  .school-login {
    margin: 0;
    font-family: "Open Sans Condensed";
    font-size: 0.9rem;
    font-weight: 400;
    text-decoration: none;
    color: #fff;
    @media (max-width: 480px) {
      // display: none;
      position:absolute;
      top:0rem;
      left:0rem;
      
    }
  }

    &:hover {
      color: #ffcb06;
    }
  }
  .school-login .btn {
    margin-left: 0.3rem;
    @media (max-width: 480px) {
      // display: none;
      width:20vw;
      height:6vh;
      align-items: center;
      position:absolute;
      top:3.5rem;
      left:1.5rem;

      
    }
  }

  @media (max-width: 1000px) {
    // display: none;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  height: 7vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1000px) {
    // background-color: red;
    position: absolute;
    top: 0rem;
    left: 18rem;
    height: 4vh;
    width: 34%;
  }
  // @media (max-width: 480px) {
  //   position: absolute;
  //   top: 0rem;
  //   left: 21.3rem;
  //   height: 4vh;
  //   width: 34%;
  // }

  section {
    margin: 0 5px;
  }

  .language {
    text-decoration: none;
    color: #000;
    @media (max-width: 1000px) {
      // display: none;
      position: absolute;
      top: 2rem;
      left: 2rem;
    }
  }
`;

const SearchBar = styled.div`
  height: 7vh;
  display: flex;
  justify-content: center;
  align-items: center;

  section {
    border: 2px groove black;
  }
  
  .search{
    
    @media (max-width: 480px) {
      // display: none;
      position:absolute;
      top:15%;
      right:3%;
      height:1.5rem;
     width:20%;
    }
  }
  
}
`;

const SchoolContact = styled.div`
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 480px) {
    // display: none;
    position:absolute;
    top:16%;
    left:19%;
    
  }
}

  section {
    font-family: "Nunito Sans", sans-serif;
    font-size: 11px;
    font-weight: 900;
  }
`;

const SchoolHeader = () => {
  return (
    <SchoolHeaderContainer>
      <SchoolLogoSection>
        <img src="./images/schoollogo.png" alt="schoollogo"></img>
      </SchoolLogoSection>
      <SchoolMiddleSection>
        <section className="date-time">
          <iframe
            title="nepalidate"
            scrolling="no"
            border="0"
            frameBorder="0"
            position="center"
            marginWidth="0"
            marginHeight="0"
            allowtransparency="true"
            src="http://www.ashesh.com.np/linknepali-time.php?dwn=only&font_color=000000&font_size=14&font_weight=500&bikram_sambat=0&api=572192e152"
            width="117"
            height="20"
            text="bold"
          ></iframe>
          &nbsp;|&nbsp;{moment().format("ll")}{" "}
        </section>{" "}
        <section className="school-name">{SchoolHeaderData.SchoolName}</section>
      </SchoolMiddleSection>
      <SchoolRightSection>
        <SocialIcons>
          <section className="icon">
            <a href="facebook.com">
              <FacebookIcon size={20} round={true} />{" "}
            </a>
            <a href="twitter.com">
              <TwitterIcon size={20} round={true} />
            </a>
            <a href="linkedin.com">
              <LinkedinIcon size={20} round={true} />
            </a>
            <a href="whatsapp.com">
              <WhatsappIcon size={20} round={true} />
            </a>
            <a href="gmail.com">
              <EmailIcon size={20} round={true} />
            </a>
          </section>
          <section>
            <a className="language" href="/">
              Language
            </a>
          </section>
          <section className="school-login">
            <Button
              className="btns"
              buttonStyle="btn--primary"
              buttonSize="btn--medium"
            >
              <Link className="school-login" to="schoolLogin">
                Login
              </Link>
            </Button>
          </section>
        </SocialIcons>
        <SearchBar>
          <section>
            <input className="search" type="text" placeholder="search"></input>
          </section>
        </SearchBar>
        <SchoolContact>
          <section>(+977)577620,577820 | info@neutroline.com</section>
        </SchoolContact>
      </SchoolRightSection>
    </SchoolHeaderContainer>
  );
};

export default SchoolHeader;
