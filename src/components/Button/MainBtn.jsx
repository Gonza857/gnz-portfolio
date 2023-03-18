import React from "react";
import styled from "styled-components";

function MainBtn({ type, children, fn, mode, modStyle }) {
  return (
    <>
      {type == "primary" ? (
        <MainButton onClick={fn} type={mode} style={modStyle}>
          {children}
        </MainButton>
      ) : (
        <SecButton onClick={fn} type={mode} style={modStyle}>
          {children}
        </SecButton>
      )}
    </>
  );
}

export default MainBtn;

const MainButton = styled.button`
  width: fit-content;
  padding: 8px 20px;
  display: flex;
  gap: 8px;
  align-items: center;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  z-index: 1;
  margin: 0 auto;
  transition: all 0.3s;
  color: #fff;
  background-color: #008e89;
  border: 0;
  box-shadow: 2px 2px 5px rgba(37, 150, 190, 0.6),
    -2px -2px 5px rgba(37, 150, 190, 0.6);
  a {
    color: #fff;
  }
  &:hover {
    background-color: #009d98;
    box-shadow: 0px 0px 15px 3px rgba(0, 235, 227, 0.75);
  }
`;

const SecButton = styled(MainButton)`
  background-color: #cd0007;
  box-shadow: 2px 2px 5px rgba(203, 0, 7, 0.75),
    -2px -2px 5px rgba(203, 0, 7, 0.75);
  color: #fff;
  &:hover {
    background-color: #ff0008;
    box-shadow: 0px 0px 15px 3px rgba(255, 0, 8, 0.75),
      0px 0px 15px 3px rgba(255, 0, 8, 0.75);
  }
  @media screen and (max-width: 600px) {
    font-size: 0.7rem;
    padding: 6px 15px;
  }
`;
