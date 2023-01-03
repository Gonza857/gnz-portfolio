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

function Navbar() {
  const { isOpenMenu, setIsOpenMenu } = useContext(userContext);

  window.addEventListener("resize", function () {
    if (this.window.innerWidth >= 992) {
      setIsOpenMenu(true);
    } else {
      setIsOpenMenu(false);
    }
  });

  useEffect(() => {
    console.log(isOpenMenu);
  }, [isOpenMenu]);

  const sectionNavOpen = {
    width: "100%",
    pointerEvents: "unset",
    backgroundColor: "#000000a7",
  };

  const wrapperOpen = {
    display: "flex",
    opacity: "1",
  };

  return (
    <SectionNav
      className="d-lg-none col-lg-3 col-xl-2"
      style={isOpenMenu ? sectionNavOpen : {}}
    >
      <Wrapper
        className={`animate__animated animate__fadeIn`}
        style={isOpenMenu ? wrapperOpen : {}}
      >
        <SectionTitleContainer className="">
          <h1 className="px-1">Mi Portfolio</h1>
        </SectionTitleContainer>

        <LeftNav className="d-flex flex-column justify-content-evenly text-center text-white m-0 p-0">
          <NavUlWrapper className="p-0 m-0">
            <NavUl className="m-0 p-0">
              <li>
                <Link
                  onClick={() => setIsOpenMenu(false)}
                  to="/"
                  className="d-flex align-items-center justify-content-start gap-2"
                >
                  <AiOutlineHome style={{ fontSize: "25px" }} />
                  Inicio
                </Link>
              </li>

              <li>
                <Link
                  onClick={() => setIsOpenMenu(false)}
                  to="/aboutme"
                  className="d-flex align-items-center justify-content-start gap-2"
                >
                  <AiOutlineUser style={{ fontSize: "25px" }} />
                  Sobre Mi
                </Link>
              </li>

              <li>
                <Link
                  onClick={() => setIsOpenMenu(false)}
                  to="/projects"
                  className="d-flex align-items-center justify-content-start gap-2"
                >
                  <AiFillDatabase style={{ fontSize: "25px" }} />
                  Proyectos
                </Link>
              </li>

              <li>
                <Link
                  onClick={() => setIsOpenMenu(false)}
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

          <DevInfo>
            <p className="p-0 m-0">Developed by Gonzalo Ramos</p>
          </DevInfo>
        </LeftNav>
      </Wrapper>

      <MenuTogglerBtn
        className={`icon nav-icon-3 ${isOpenMenu ? "open" : ""} d-lg-none`}
        onClick={() => {
          setIsOpenMenu(!isOpenMenu);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </MenuTogglerBtn>
    </SectionNav>
  );
}

export default Navbar;

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
  display: flex;
  position: fixed;
  z-index: 1000;
  height: 100vh;
  pointer-events: auto;

  @media screen and (min-width: 992px) {
    position: relative;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  display: none;
  flex-direction: column;
  background-image: url(./assets/images/navbar_bg.svg);
  background-size: cover;
  position: relative;
  transition: all 10s;
`;

const MenuTogglerBtn = styled.div`
  position: relative;
  width: 35px;
  height: 30px;
  margin: 30px;
  z-index: 2500;
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
  width: 80%;
  /* border: 3px solid red; */
  padding-top: 30px;
  margin: auto;
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
  font-size: 13px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding-bottom: 20px;
  font-family: "Chivo Mono", monospace;
  text-shadow: 1px 2px 4px rgba(37, 150, 190, 0.6);
`;
