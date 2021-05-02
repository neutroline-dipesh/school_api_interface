import React from "react";
import styled from "styled-components";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import { FaQuoteLeft } from "react-icons/fa";
const studentsData = [
  {
    image: "./images/admin-2.jpg",
    voice:
      "There are many variations of passages of ng to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.",
    age: 20,
    fullname: "Invoker Sama",
  },
  {
    image: "./images/admin-2.jpg",
    voice:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
    age: 21,
    fullname: "Pudge Sama",
  },
  {
    image: "./images/admin-4.jpg",
    voice:
      "But I must explain ta compleself,  enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
    age: 24,
    fullname: "Juggernaut Sama",
  },
  {
    image: "./images/admin-4.jpg",
    voice:
      "Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like",
    age: 18,
    fullname: "Mr. Prabin Giri",
  },
  {
    image: "./images/faculty-2.jpg",
    voice:
      "Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like",
    age: 15,
    fullname: "Earth Spirit",
  },
];

const TestimonialContainer = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 2%;
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("https://www.transparenttextures.com/patterns/cubes.png");
`;

const TestimonialContentContainer = styled.div`
  box-sizing: border-box;
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-bottom:10%;

  @media(max-width:720px){
    padding:0;
  }

  
`;

const SectionHeading = styled.div`
  font-family: "Open Sans Condensed", sans-serif;
  font-size: 50px;
  text-transform: uppercase;
  color: #000;
  position: relative;

  @media (max-width: 720px) {
    color: #000;
    font-family: "Open Sans Condensed", sans-serif;
    font-size: 25px;
  }
`;

const SliderContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 0.2fr 1fr;
  grid-template-areas: "StudentImage StudentVoice";
  align-items: center;
  justify-items: center;
  padding: 0% 5%;

  @media (max-width: 720px) {
    height: 65vh;
    display: flex;
    flex-direction: column;
    padding: 3% 0%;
  }
`;

const StudentImage = styled.img`
  grid-area: StudentImage;
  background: transparent;
  height: 50%;
  width: 50%;
  padding-bottom: 10%;
  @media (max-width: 720px) {
    padding: 0;
  }
`;

const StudentTestimonial = styled.div`
  grid-area: StudentVoice;
  padding: 10%;
  height:auto;

  h5 {
    color: #000;
    font-family: "Noto Serif", serif;
    text-align: justify;

    @media (max-width: 720px) {
      font-size: 15px;
      text-overflow: hidden;
    }
  }

  p {
    font-size: 20px;
    font-style: italic;
    font-family: "mont-serrat";
    @media (max-width: 720px) {
      margin: 0;
      padding: 0;
      font-size: 14px;
      text-overflow: hidden;
      display: flex;
      justify-content: flex-end;
    }
  }

  @media (max-width: 720px) {
    padding: 1%;
  }
`;

var quoteSize = {
  fontSize: "15px",
};

const StudentVoice = () => {
  return (
    <TestimonialContainer>
      <TestimonialContentContainer>
        <SectionHeading> Neutroline Voices</SectionHeading>
        <OwlCarousel
          className="owl-theme"
          items="1"
          margin={10}
          autoplay
          dots
          loop
        >
          {studentsData.map((item, index) => {
            return (
              <SliderContainer key={index}>
                <StudentImage src={item.image}></StudentImage>
                <StudentTestimonial>
                  <FaQuoteLeft style={quoteSize} />
                  <h5>&nbsp;&nbsp;&nbsp;{item.voice}</h5>
                  <p>
                    {item.fullname}&nbsp; {item.age}
                  </p>
                </StudentTestimonial>
              </SliderContainer>
            );
          })}
        </OwlCarousel>
      </TestimonialContentContainer>
    </TestimonialContainer>
  );
};

export default StudentVoice;
