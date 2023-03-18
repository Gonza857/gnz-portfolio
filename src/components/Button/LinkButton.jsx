import React from "react";
import styled from "styled-components";
import MainBtn from "./MainBtn";

function LinkButton(props) {
  return (
    <MainBtn type={"primary"}>
      <a href={props.href} target="_BLANK">
        {props.children}
      </a>
    </MainBtn>
  );
}

export default LinkButton;

const PrimaryButton = styled.button`
  width: fit-content;
  padding: 7px 15px;
  margin: 0 auto;
  display: inline-block;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  z-index: 1;
  background-color: #00a19b;
  border: 1px solid #4f4f4f;
  box-shadow: 2px 2px 5px rgba(37, 150, 190, 0.6),
    -2px -2px 5px rgba(37, 150, 190, 0.6);
  a {
    color: #fff;
  }
`;
