import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import styled, { keyframes } from "styled-components";
import MainBtn from "../Button/MainBtn";

export const ModalProjectImg = ({ imgRoute, cols }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <ProjectImgContainer className={cols}>
        <img src={imgRoute} alt="" onClick={handleShow} />
        <Modal show={show} onHide={handleClose} size="lg">
          <Modal.Header closeButton />
          <Modal.Body>
            <ModalImg src={imgRoute} alt="" />
          </Modal.Body>
          <Modal.Footer>
            <MainBtn fn={handleClose}>Cerrar</MainBtn>
          </Modal.Footer>
        </Modal>
      </ProjectImgContainer>
    </>
  );
};

const RevealAnim = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const ModalImg = styled.img`
  width: 100%;
  object-fit: contain;
`;

const ProjectImgContainer = styled.div`
  display: flex;
  align-items: center;
  height: fit-content;
  img {
    width: 100%;
    height: fit-content;
    object-fit: contain;
    border: 1px solid #00a19b;
    border-radius: 15px;
    box-shadow: 1px 2px 4px rgba(37, 150, 190, 0.6),
      -1px -2px 4px rgba(37, 150, 190, 0.6);
    animation: ${RevealAnim} 1s;
    cursor: zoom-in;
    transition: all 0.3s;
    &:hover {
      filter: brightness(0.7);
      box-shadow: 1px 2px 4px rgb(37, 149, 190), 1px 2px 4px rgb(37, 149, 190),
        1px 2px 4px rgb(37, 149, 190), 1px 2px 4px rgb(37, 149, 190),
        1px 2px 4px rgb(37, 149, 190), -2px -4px -6px rgb(37, 149, 190),
        2px -4px -6px rgb(37, 149, 190), 2px -4px -6px rgb(37, 149, 190);
    }
  }
`;
