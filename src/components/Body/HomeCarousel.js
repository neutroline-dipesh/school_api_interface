import React, { useState, useEffect } from "react";
import styled from "styled-components";
import LandingCarousel from "../NewsAndEvents/Carousel";
import axios from "axios";

const HomeCarouselContainer = styled.div`
  box-sizing: border-box;
  height: 80vh;
  width: auto;
  padding: 1em;
  background: linear-gradient(
    -153deg,
    rgba(255, 255, 255, 0.7) 10%,
    rgba(78, 164, 252, 1)
  );

  .carousel-inner {
    border-radius: 8px;
  }
  .carousel-item .w-100 {
    height: 75vh;
  }

  @media (max-width: 768px) {
    padding: 0;
    .carousel-inner {
      width: 100%;
      height: inherit;
      border-radius: 0px;
    }
  }
`;

// const items = [
//   {
//     src: "./images/school-2.jpg",
//     altText: "School-2",
//     key: "1",
//     caption: "hello",
//     header: "world",
//   },
//   {
//     src: "./images/school-1.jpg",
//     altText: "School-1",
//     key: "2",
//     caption: "",
//     header: "",
//   },
//   {
//     src: "./images/school-3.jpg",
//     altText: "School-3",
//     key: "3",
//     caption: "",
//     header: "",
//   },
// ];

function HomeCarousel() {
  //getting data form database
  const [homePageImage, setHomePageImage] = useState([]);
  const fetchData = async () => {
    axios.get("http://localhost:4000/homePageImage/").then((response) => {
      if (response.data) {
        setHomePageImage(response.data.data);
      } else {
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log("hello");
  console.log(homePageImage);
  console.log("world");
  return (
    <HomeCarouselContainer>
      <LandingCarousel items={homePageImage} />
    </HomeCarouselContainer>
  );
}

export default HomeCarousel;
