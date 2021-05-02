import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NewsPageContainer = styled.div`
  height: auto;
  width: auto;
  margin: 0% 5%;
  display: flex;
  flex-direction: column;
`;

const NewsHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  line-height: 2;

  .news-title {
    font-family: "Open Sans Condensed", sans-serif;
    font-size: 3em;
    color: #ffcb06;

    @media (max-width: 768px) {
      font-size: 1.8em;
      line-height: 1.4;
    }
  }

  .date-time {
    font-family: "Roboto", sans-serif;
    font-size: 0.9em;
  }
`;
const NewsImageBody = styled.div`
  margin-top: 2em;
  img {
    width: 100%;
    max-width: 800px;
    height: 100%;
    max-height: 500px;
  }
`;
const NewsDescription = styled.div`
  font-family: "Noto Serif", serif;
  font-size: 1.2em;
  text-align: justify;
  color: #000;
  margin: 2em 0em;
`;
const NewsFooter = styled.div`
  margin: 2em 0em;
  display: flex;
  justify-content: center;

  .footer-title {
    font-family: "Open Sans Condensed", sans-serif;
    font-size: 1.5em;
  }

  .more-news {
    text-decoration: none;
    outline: none;
    text-align: center;
    background: #fff;
    border: 1px solid #3fbc57;
    padding: 0.5em 0.8em;
    color: #3fbc57;
    transition: 500ms all ease;
  }

  .more-news:hover {
    background: #3fbc57;
    color: #fff;
  }
`;

const NewsPage = () => {
  return (
    <NewsPageContainer>
      <NewsHeader>
        <section className="news-title">
          {" "}
          A Virtual Look: Artistry of Awegys
        </section>
        <section className="date-time"> Dec 12, 2020</section>
      </NewsHeader>
      <NewsImageBody>
        <img src="./images/covidnews.jpg"></img>
      </NewsImageBody>
      <NewsDescription>
        <section className="news-description">
          Open in Walton Gallery and below online is Artistry of Awegys:
          Paintings by Ugandan Youth. A virtual gallery talk and reception is
          planned for 1:30 p.m. on Friday, February 12, 2021. The acrylic on
          pulled bark canvas paintings were created by student-artists who
          attend Awegys Secondary School in Kigo, Uganda. The school’s mission
          is to provide the best possible education to those whose dreams of
          attending school had not been realized due to poverty, the war, or the
          death of their parents due to the HIV/AIDS pandemic.
          <br />
          <br />
          Most of the students attending Awegys come from the northern region of
          the country that is still recovering from the decades-long civil war
          with the Lord’s Resistance Army. At Awegys, with the assistance of the
          Mtaala Foundation, students find a haven where they are free to learn
          and live their best and happiest lives.
          <br />
          <br />
          The exhibition was organized by George School science teacher Bob
          Fest. Bob helped start and now helps run The Mtaala Foundation, a US
          non-profit/Ugandan nonprofit organization. The foundation supports
          vulnerable children in Uganda by providing quality education and
          access to health care.
          <br />
          <br />
          We work with Ugandans to build schools and clinics where there once
          were none,” said Bob. One such school is the Awegys Secondary School,
          attended by the student artists highlighted in the exhibition.
          <br />
          <br />
          Bob and Polly Lodge, Science Department head, traveled to Uganda for a
          service-learning trip with George School students in 2019 and visited
          the school. While there, the students collaborated on a mural, a part
          of it is shown in the photo above.
          <br />
          <br />
        </section>
      </NewsDescription>
      <NewsFooter>
        <section className="footer-title">
          <Link to="newsAndEvents" className="more-news">
            Back
          </Link>
        </section>
      </NewsFooter>
    </NewsPageContainer>
  );
};

export default NewsPage;
