import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import styled from "styled-components";

const CarouselContainer = styled.div`
  margin: 0;
  height: auto;
  width:auto;

  .carousel-inner {
    margin: 0;
    height: 75vh;
    width:auto;
    background-size: contain;
    background-position: center;

    @media(max-width:768px){
      height:75vh;
    }
  }

  .carousel-item .w-100{
    height: 75vh;

    @media(max-width:768px){
      height:auto;
    }
  }

  .carousel-indicators li {
    width: 13px;
    height: 13px;
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    height: 45vh;
  }

  @media (max-width: 500px) {
    height: 40vh;
  }
`;

const LandingCarousel = (props) => {
  return (
    <CarouselContainer>
      <UncontrolledCarousel items={props.items} controls={true} autoPlay={true} />
    </CarouselContainer>
  );
};

export default LandingCarousel;
