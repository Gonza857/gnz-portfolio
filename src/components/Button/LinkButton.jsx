import React from "react";
import MainBtn from "./MainBtn";

function LinkButton(props) {
  return (
    <MainBtn type={"primary"}>
      <a href={props.href} target="_BLANK" rel="noreferrer">
        {props.children}
      </a>
    </MainBtn>
  );
}

export default LinkButton;

