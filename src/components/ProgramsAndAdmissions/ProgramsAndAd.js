import React, { useEffect } from "react";
import styled from "styled-components";
import { AIParallax } from "./AIParallax";
import Facts from "./Facts";
import StudentVoice from "./StudentVoice";
import TopSection from "./TopSection";
import Aos from "aos";
import "aos/dist/aos.css";
import AdmissionDropDown from "./AdmissionDropDown";

const ProgAndAdContainer = styled.div`
  width: 100%;
  height: aut0;
  overflow: hidden;
`;

export const ProgramsAndAd = () => {
  // animation for reveal on scrollDown.
  useEffect(() => {
    // Aos.init({}) : provides global animation to every single component you want to animate
    Aos.init({ duration: 1000, delay: 200 });
  }, []);

  return (
    <div className="programAndAdmissionPage">
      <ProgAndAdContainer>
        <TopSection />
        <div data-aos="fade-right" className="academicFacts">
          <Facts />
        </div>
        <div data-aos="fade-left" className="AcademicsInfo">
          <AIParallax />
        </div>
        <div data-aos="fade-up" className="studentVoices">
          <StudentVoice />
        </div>
        <div data-aos="fade-up" className="mobile-dropdown">
          <AdmissionDropDown />
        </div>
      </ProgAndAdContainer>
    </div>
  );
};
