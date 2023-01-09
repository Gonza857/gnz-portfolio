import React, { useState, useContext, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineHome,
  AiOutlineUser,
  AiFillDatabase,
  AiOutlineDownload,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { userContext } from "../../storage/UserContext";

function NavbarLG() {
  const { isOpenMenu, setIsOpenMenu } = useContext(userContext);

  return (
    <SectionNav className="d-none d-lg-block col-lg-3 col-xl-2">
      <Wrapper className="">
        <SectionTitleContainer className="">
          <h1>Mi Portfolio</h1>
        </SectionTitleContainer>

        <LeftNav className="d-flex flex-column justify-content-evenly text-center text-white  m-0 p-0">
          <NavUlWrapper className="p-0 m-0">
            <NavUl className="m-0 p-0">
              <li>
                <Link
                  to="/"
                  className="d-flex align-items-center justify-content-start gap-2"
                >
                  <AiOutlineHome style={{ fontSize: "25px" }} />
                  Inicio
                </Link>
              </li>

              <li>
                <Link
                  to="/aboutme"
                  className="d-flex align-items-center justify-content-start gap-2"
                >
                  <AiOutlineUser style={{ fontSize: "25px" }} />
                  Sobre Mi
                </Link>
              </li>

              <li>
                <Link
                  to="/projects"
                  className="d-flex align-items-center justify-content-start gap-2"
                >
                  <AiFillDatabase style={{ fontSize: "25px" }} />
                  Proyectos
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="d-flex align-items-center justify-content-start gap-2"
                >
                  <AiOutlineUser style={{ fontSize: "25px" }} />
                  Contacto
                </Link>
              </li>
            </NavUl>
          </NavUlWrapper>

          <DownloadCvContainer>
            <a href="./assets/pdf/cv_gonzaloRamos.pdf" download>
              Descargar CV
              <AiOutlineDownload style={{ fontSize: "20px" }} />
            </a>
          </DownloadCvContainer>

          <DevRRSS>
            <div>
              <a href="https://github.com/Gonza857" target="_BLANK">
                <AiFillGithub style={{ fontSize: "32px" }} />
              </a>
              <a
                href="https://www.linkedin.com/in/gonzaloramos-webdev"
                target="_BLANK"
              >
                <AiFillLinkedin style={{ fontSize: "32px" }} />
              </a>
            </div>
          </DevRRSS>
        </LeftNav>
        <DevInfo>
          <p className="p-0 m-0">Developed by Gonzalo Ramos</p>
        </DevInfo>
      </Wrapper>
    </SectionNav>
  );
}

export default NavbarLG;

const agitar = keyframes`
    0% {
        transform: translateX(0px) rotate(0deg);
    } 
    40% {
        transform: translateX(-2px) rotate(-2deg);
    }
    80% {
        transform: translateX(2px) rotate(2deg);
    }
    100% {
        transform: translateX(0px) rotate(0deg);
    }
`;

const SectionNav = styled.section`
  position: absolute;
  z-index: 1000;
  height: 100vh;
  transition: all 0.5s;
  border: 8px solid red;
  @media screen and (min-width: 992px) {
    position: relative;
  }
`;

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-image: url(./assets/images/navbar_bg.svg);
  background-size: cover;
  transition: all 0.5s;
`;

const MenuTogglerBtn = styled.div`
  width: 35px;
  height: 30px;
  margin: 10px 10px;
  position: absolute;
  right: -80px;
  top: 10px;
  cursor: pointer;
  display: inline-block;
  transition: all 0.3s;
  span {
    background-color: #fff;
    position: absolute;
    border-radius: 2px;
    transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
    &:nth-child(1) {
      width: 100%;
      height: 4px;
      display: block;
      top: 0px;
      left: 0px;
    }
    &:nth-child(2) {
      width: 100%;
      height: 4px;
      display: block;
      top: 13px;
      left: 0px;
    }
    :nth-child(3) {
      width: 100%;
      height: 4px;
      display: block;
      bottom: 0px;
      left: 0px;
    }
  }
  &.open {
    transform: rotate(90deg);
  }
  &.open span:nth-child(1) {
    left: 3px;
    top: 12px;
    width: 30px;
    transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
    transform: rotate(90deg);
    transition-delay: 150ms;
  }
  &.open span:nth-child(2) {
    left: 2px;
    top: 20px;
    width: 20px;
    transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
    transform: rotate(45deg);
    transition-delay: 50ms;
  }
  &.open span:nth-child(3) {
    left: 14px;
    top: 20px;
    width: 20px;
    transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
    transform: rotate(-45deg);
    transition-delay: 100ms;
  }
`;

const SectionTitleContainer = styled.div`
  margin: 20px 0;
  h1 {
    font-family: "Chivo Mono", monospace;
    text-shadow: 1px 2px 4px rgba(37, 150, 190, 0.6),
      1px 2px 4px rgba(37, 150, 190, 0.6), 1px 2px 4px rgba(37, 150, 190, 0.6),
      1px 2px 4px rgba(37, 150, 190, 0.6);
    text-align: center;
    color: #fff;
    font-size: 2.5rem;
    margin: 0;
  }
`;

const LeftNav = styled.nav`
  width: 100%;
  height: 100%;
  border-right: 0.5px dashed #00a19b;
`;

const NavUlWrapper = styled.div`
  width: 100%;
`;

const NavUl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  li {
    width: fit-content;
    margin-left: 60px;
    a {
      font-family: "Chivo Mono", monospace;
      color: #fff;
      text-shadow: 1px 2px 4px rgba(37, 150, 190, 0.6);
      text-decoration: none;
      transition: all 0.3s;
      &:hover {
        text-shadow: 1px 2px 4px rgba(37, 150, 190, 0.6),
          1px 2px 4px rgba(37, 150, 190, 0.6),
          1px 2px 4px rgba(37, 150, 190, 0.6),
          1px 2px 4px rgba(37, 150, 190, 0.6);
        animation: ${agitar} 800ms;
        transition: all 0.3s;
        svg {
          color: #00c5be;
        }
      }
      svg {
        margin-right: 5px;
        color: #fff;
      }
    }
  }
`;

const DownloadCvContainer = styled.div`
  display: flex;
  justify-content: center;
  a {
    color: #fff;
    font-family: "Chivo Mono", monospace;
    text-shadow: 1px 2px 4px rgba(37, 150, 190, 0.6);
    display: flex;
    gap: 20px;
    align-items: center;
    margin: 0;
    transition: all 0.3s;
    &:hover {
      text-shadow: 1px 2px 4px rgba(37, 150, 190, 0.6),
        1px 2px 4px rgba(37, 150, 190, 0.6), 1px 2px 4px rgba(37, 150, 190, 0.6),
        1px 2px 4px rgba(37, 150, 190, 0.6);
      animation: ${agitar} 800ms;
      svg {
        color: #00c5be;
      }
    }
  }
`;

const DevRRSS = styled.div`
  div {
    display: flex;
    justify-content: space-evenly;
    align-content: center;
    a {
      color: #fff;
      transition: all 0.5s;
      &:hover {
        color: #00c5be;
      }
    }
  }
`;

const DevInfo = styled.div`
  border: 1px solid red;
  color: #fff;
  text-align: center;
  padding: 10px 0;
  font-size: 13px;
  font-family: "Chivo Mono", monospace;
  text-shadow: 1px 2px 4px rgba(37, 150, 190, 0.6);
`;
