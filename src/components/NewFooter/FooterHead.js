import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { common } from "../../assets/js/common";

const FooterHeadContainer = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  align-items: center;
  background: linear-gradient(
    160deg,
    rgba(22, 12, 105, 0.7),
    rgba(24, 122, 243, 0.8) 90%
  );

  .title-head {
    padding: 0.5em;
    font-family: ${common.fontTwo};
    font-size: 1.2em;
    color: #fff;
  }
  .footerhead-link {
    padding: 0.3em 1.2em;
    border: 1px solid #fff;
    border-radius: 2px;
    font-weight: 700;
    text-decoration: none;
    color: #fff;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const LeftAdmissionContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-right: 2px solid #fff;

  @media (max-width: 768px) {
    padding: 0.5em;
    width: 100%;
    border-right: none;
  }
`;
const RightEnquiryContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 0.5em;

    width: 100%;
  }
`;

const FooterHead = () => {
  return (
    <FooterHeadContainer>
      <LeftAdmissionContainer>
        <section className="title-head">Application of Admission</section>
        <Link className="footerhead-link" to="onlineApplication">
          {" "}
          Apply{" "}
        </Link>
      </LeftAdmissionContainer>
      <RightEnquiryContainer>
        <section className="title-head">Other Inquiries</section>
        <Link className="footerhead-link" to="contactUs">
          {" "}
          Contact Us{" "}
        </Link>
      </RightEnquiryContainer>
    </FooterHeadContainer>
  );
};

export default FooterHead;
