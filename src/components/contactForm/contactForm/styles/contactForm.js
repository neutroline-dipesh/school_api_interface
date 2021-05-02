import styled from "styled-components";
// import img from "./neutrolinelogo.png";
import img from "../../../../assets/pictures/contactus.jpg";
import { common } from "../../../../assets/js/common";

export const Container = styled.div`
  box-sizing: border-box;
  height: 50vh;
  width: 100%;
  background: radial-gradient(
    circle,
    rgba(255, 156, 0, 1) 100%,
    rgba(0, 0, 0, 1) 100%
  );

  @media (max-width: 3000px) {
    padding: 10px 10px;
  }
`;

export const Wrapper = styled.div`
  width: 95%;
  margin: 0.5em auto 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 3000px;
`;

export const Column = styled.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Row = styled.div`
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 10px;
  @media (max-width: 3000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Title = styled.p`
  font-size: 4em;
  font-family: ${common.fontOne};
  color: #FFCB06;
  text-align: start;
  padding: 1em;
  font-weight: 900;

  @media (max-width: 768px) {
    font-size: 3em;
    text-align: center;
  }
`;

export const Link = styled.p`
  padding: 0.8em;
  margin: 0em 40em 0em 1em;
  color: #000;
  font-size: 1.2em;
  font-family: ${common.fontTwo};
  text-align: jusify;
  text-decoration: none;

  @media (max-width: 1024px) {
    margin: 0em 10em 0em 0.2em;
  }

  @media (max-width: 1024px) {
    margin: 0em 0.1em;
  }
`;
export const Header = styled.div`
  padding: 0;
  background-image: url(${img});
  background-size: cover;
  background-position: left center;
  background-repeat: no-repeat;
  class: "responsive";
  width: 100%;
  height: 70vh;
`;
