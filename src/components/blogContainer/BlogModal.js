import React, { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import EmailIcon from "@material-ui/icons/Email";
import "bootstrap/dist/css/bootstrap.min.css";
import { Scrollbars } from "react-custom-scrollbars";
import BlogData from "./BlogData.json";

// underwritten background code is to center the element using css
const Background = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalWrapper = styled.div`
  width: 100%;
  height: 100vh;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
`;

const ModalImg = styled.img`
  width: 50%;
  height: 50vh;
  padding: 2rem;
  background: #fff;
  @media (max-width: 600px) {
    height: 50%;
    width: 100%;
  }
`;

const ModalContent = styled.p`
  display: flex;
  flex-direction: column;
  max-width: 3000px;
  align-items: flex-start;
  font-family: "Nunito Sans" !important;
  line-height: 1.8;
  color: #141414;
  padding: 2rem;

  p {
    font-size: 16px;
    text-align: justify;
    margin-top: 0.5rem;
  }
  a {
    font-weight: bold;
    font-size: 12.5px;
    text-align: justify;
    @media (max-width: 600px) {
      display: none;
    }
  }
`;

const ModalFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: end;
  color: #141414;
  padding: 2%;
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
  @media (max-width: 600px) {
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
    width: 22px;
    height: 22px;
    padding: 0;
    z-index: 10;
  }
`;

export const BlogModal = (props) => {
  const modalRef = useRef();
  const blogs = BlogData.blogs;

  // when you press outside the model this function closes the modal
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      props.setShowModal(false);
    }
  };

  // when you press Escape in keyboard this function closes the modal too

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && props.showModal) {
        props.setShowModal(false);
      }
    },
    [props.setShowModal, props.showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  // console.log(props.selectedId);
  // console.log(props);
  // we need to provide the id of the respective card to respective modal as well

  return (
    <div id={props.selectedId}>
      {props.showModal ? (
        <Background ref={modalRef} onClick={closeModal}>
          <ModalWrapper showModal={props.showModal}>
            <Scrollbars style={{ width: "100%", height: "100%" }}>
              <h1
                style={{
                  color: "#FFCB06",
                  fontFamily: "Open sans Condensed",
                  fontSize: "2.5rem",
                  padding: "2rem 0rem  0rem  2rem",
                }}
              >
                School's Blog
              </h1>
              <ModalImg
                src={blogs[props.selectedId].image}
                alt={blogs[props.selectedId].title}
              />
              <ModalContent>
                <h3>{blogs[props.selectedId].title}</h3>
                <a>{blogs[props.selectedId].posted_date}</a>
                <p>{blogs[props.selectedId].article}</p>
                <ModalFooter>
                  <h6>
                    <EmailIcon color="primary" />
                    {blogs[props.selectedId].email}
                  </h6>
                </ModalFooter>
              </ModalContent>
            </Scrollbars>

            <CloseModalButton
              aria-label="Close modal"
              onClick={() => props.setShowModal((prev) => !prev)}
            />
          </ModalWrapper>
        </Background>
      ) : null}
    </div>
  );
};
