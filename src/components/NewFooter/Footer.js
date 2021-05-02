import React from "react";
import styled from "styled-components";
// import FooterBkg from "../assets/images/footerbkg.jpg";
// import Logo from "../assets/images/Picture1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const FooterContainer = styled.div`
  width: 100%;
  height: 50vh;

  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    160deg,
    rgba(255, 255, 255, 0.5) 10%,
    rgba(166, 166, 166, 0.6) 90%
  );

  @media (max-width: 768px) {
    height: auto;
    padding-top: 1rem;
  }
`;

const FooterContentSection = styled.div`
  width: 75%;
  margin: 0 auto;
  height: 85%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 100%;
  }
`;

const FirstBlock = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
    min-height: 10vh;
    height: auto;
  }
`;

const Head1 = styled.div`
  padding: 1rem 0 0 1rem;
  height: auto;
  font-family: "Open sans condensed";
  font-weight: 700;
  color: #231818;
  font-size: 1.4rem;

  @media (max-width: 768px) {
    padding: 0;
    width: 100%;
    height: 40%;
    font-size: 1.4rem;
    padding-left: 1rem;
  }
`;
const NavigationLink = styled.div`
  display: flex;
  justify-content: space-between;
  color: #231818;
  line-height: 2.2;
  padding: 1rem;

  .footer-link {
    text-decoration: none;
    color: #231818;
    font-size: 1.1rem;
    font-family: "Nunito sans";
    font-weight: 700;
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
`;
const RightSection = styled.div`
  display: flex;
  flex-direction: column;
`;
const SecondBlock = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
const BlockHeading = styled.div`
  padding: 1rem 0 0 1rem;
  width: 100%;
  height: auto;
  font-family: "Open sans condensed";
  font-weight: 700;
  color: #231818;
  font-size: 1.4rem;
`;
const SocialIcons = styled.div`
  width: 100%;
  height: 50%;
  padding: 1rem;
  display: flex;
  flex-direction: column;

  .soc {
    width: 100%;
    min-height: 20%;
    height: auto;
    display: flex;
    align-items: center;
    color: #000;

    p {
      margin: 0;
      margin-left: 0.5rem;
      color: #231818;
      font-size: 14px;
      font-family: "Nunito sans";
    }
  }

  a {
    display: flex;
    font-size: 0.7rem;
    text-decoration: none;
  }
  a:hover {
    transform: translateY(-2px);
  }

  .youtube {
    color: #000;
  }

  .facebook {
    color: #000;
  }

  .twitter {
    color: #000;
  }
  .instagram {
    color: #000;
  }
`;
const ThirdBlock = styled.div`
  width: 30%;
  height: 100%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Head3 = styled.div`
  padding: 1rem 0 0 1rem;
  height: auto;
  font-family: "Open sans condensed";
  font-weight: 700;
  color: #231818;
  font-size: 1.4rem;
`;

const AddressDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  color: #231818;
  line-height: 2;

  .ind-aboutUs {
    font-family: "Nunito sans";
    font-weight: 700;
    font-size: 1.1rem;
  }

  i {
    font-size: 0.9rem;
    margin-right: 0.5rem;
  }
`;

const FooterCopyrightSection = styled.div`
  height: 15%;
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 0.8rem;
  padding-left: 2rem;
  background-color: #383636;

  @media (max-width: 768px) {
    width: 100%;
    min-height: 5vh;
    height: auto;
    font-size: 0.75rem;
    text-align: center;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContentSection>
        <FirstBlock>
          <Head1>Navigation</Head1>
          <NavigationLink>
            <LeftSection>
              <Link to="/" className="footer-link">
                Home
              </Link>
              <Link to="aboutUs" className="footer-link">
                About
              </Link>
              <Link to="newsAndEvents" className="footer-link">
                News and Events
              </Link>

              <Link to="gallery" className="footer-link">
                Gallery
              </Link>
            </LeftSection>
            <RightSection>
              <Link to="programsAndAdmissions" className="footer-link">
                Programs
              </Link>
              <Link to="blogs" className="footer-link">
                Blogs
              </Link>
              <Link to="contactUs" className="footer-link">
                Contact
              </Link>
            </RightSection>
          </NavigationLink>
        </FirstBlock>
        <SecondBlock>
          <BlockHeading>Connect With Us</BlockHeading>
          <SocialIcons>
            <div className="soc">
              {" "}
              <a href="#" className="youtube social">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
                <p> YouTube</p>
              </a>
            </div>
            <div className="soc">
              <a href="#" className="facebook social">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
                <p>Facebook</p>
              </a>
            </div>
            <div className="soc">
              <a href="#" className="twitter social">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
                <p>Twitter</p>
              </a>
            </div>
            <div className="soc">
              <a href="#" className="instagram social">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
                <p>Instagram</p>
              </a>
            </div>
          </SocialIcons>
        </SecondBlock>
        <ThirdBlock>
          <Head3>Contact Information</Head3>
          <AddressDetails>
            <div className="ind-address">
              <i className="fas fa-map-marker-alt"></i> Kapilvastu, Butwal
            </div>
            <div className="ind-address">
              <i className="fas fa-phone-volume"></i> Tel: 071-577620,577820
            </div>
            <div className="ind-address">
              <i className="fas fa-fax"></i> Fax: 01-76565757
            </div>
            <div className="ind-address">
              <i className="fas fa-envelope"></i>Email: info@neutroline.edu.np
            </div>
          </AddressDetails>
        </ThirdBlock>
      </FooterContentSection>
      <FooterCopyrightSection>
        © Neutroline Academy 2021. All rights reserved.
      </FooterCopyrightSection>
    </FooterContainer>
  );
};

export default Footer;
