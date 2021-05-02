import React, { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { adminStaffDetails } from "./AdministrativeMembers";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import EmailIcon from "@material-ui/icons/Email";

const Background = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  z-index: 10;
  border-radius: 10px;
  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: 0.5fr 1fr;
    width: 400px;
    height: 200px;
  }
`;

const ModalImg = styled.img`
  width: 90%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #fff;
  @media (max-width: 600px) {
    height: 100%;
    width: 100%;
  }
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  padding: 5%;
  @media (max-width: 600px) {
    padding: 5% 5% 5% 0%;
  }

  p {
    font-size: 15px;
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

export const StaffModal = (props) => {
  // for working with the background of the modal i.e while clicking the background the modal should go away
  const modalRef = useRef();

  //for animation effect i.e dropping from top
  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: props.showModal ? 1 : 0,
    transform: props.showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

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

  return (
    <div id={props.selectedId}>
      {props.showModal ? (
        <Background ref={modalRef} onClick={closeModal}>
          <animated.div style={animation}>
            <ModalWrapper showModal={props.showModal}>
              <ModalImg
                src={adminStaffDetails[props.selectedId].url}
                alt={adminStaffDetails[props.selectedId].text}
              />
              <ModalContent>
                <h3>{adminStaffDetails[props.selectedId].name}</h3>
                <h6>{adminStaffDetails[props.selectedId].position}</h6>
                <p>{adminStaffDetails[props.selectedId].description}</p>
                <ModalFooter>
                  <h6>
                    <PhoneInTalkIcon color="secondary" />
                    {adminStaffDetails[props.selectedId].mobile}
                  </h6>
                  <h6>
                    <EmailIcon color="primary" />
                    {adminStaffDetails[props.selectedId].email}
                  </h6>
                </ModalFooter>
              </ModalContent>

              <CloseModalButton
                aria-label="Close modal"
                onClick={() => props.setShowModal((prev) => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </div>
  );
};
