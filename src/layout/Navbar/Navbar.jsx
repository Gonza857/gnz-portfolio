import React, { useState, useContext, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineHome,
  AiOutlineUser,
  AiFillDatabase,
  AiOutlineDownload,
  AiOutlineRollback,
} from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../../storage/UserContext";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const history = useNavigate();
  const { isOpenMenu, setIsOpenMenu } = useContext(userContext);

  const iconSize = { fontSize: "1.9rem" };

  const closeSideBar = () => {
    if (window.screen.width < 992) {
      setIsOpenMenu(false);
    }
  };

  return (
    <SectionNav>
      <Wrapper style={{ left: `${isOpenMenu ? "0" : "-250px"}` }}>
        {/* --------------- */}
        <SectionTitleContainer>
          <h1>Mi Portfolio</h1>
        </SectionTitleContainer>
        <LeftNav className="text-center text-white m-0 p-0">
          {/* --------------- */}
          <NavUlWrapper className="p-0 m-0">
            <NavUl className="m-0 p-0">
              <li>
                <Link to="/" onClick={() => closeSideBar()}>
                  <AiOutlineHome style={iconSize} />
                  Inicio
                </Link>
              </li>

              <li>
                <Link to="/aboutme" onClick={() => closeSideBar()}>
                  <AiOutlineUser style={iconSize} />
                  Sobre Mi
                </Link>
              </li>

              <li>
                <Link to="/projects" onClick={() => closeSideBar()}>
                  <AiFillDatabase style={iconSize} />
                  Proyectos
                </Link>
              </li>

              <li>
                <Link to="/contact" onClick={() => closeSideBar()}>
                  <AiOutlineUser style={iconSize} />
                  Contacto
                </Link>
              </li>
            </NavUl>
          </NavUlWrapper>

          {/* --------------- */}
          <DownloadCvContainer>
            <a href="./assets/pdf/cv_gonzaloRamos.pdf" download>
              Descargar CV
              <AiOutlineDownload style={{ fontSize: "20px" }} />
            </a>
          </DownloadCvContainer>

          {/* --------------- */}
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
        {/* --------------- */}
        <DevInfo>
          <p className="p-0 m-0">Developed by Gonzalo Ramos</p>
        </DevInfo>
      </Wrapper>

      <GoBackBtn onClick={() => history(-1)}>
        {" "}
        <AiOutlineRollback style={{ color: "#FFF", fontSize: "2.5rem" }} />
      </GoBackBtn>

      <MenuTogglerBtn style={!isOpenMenu ? { marginLeft: "-260px" } : {}}>
        {!isOpenMenu ? (
          <AiOutlineBars
            style={{ color: "#FFF", fontSize: "2.5rem" }}
            onClick={() => setIsOpenMenu(!isOpenMenu)}
          />
        ) : (
          <AiOutlineClose
            style={{ color: "#FFF", fontSize: "2.5rem" }}
            onClick={() => setIsOpenMenu(!isOpenMenu)}
          />
        )}
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
  position: absolute;
  z-index: 1000;
  min-height: 100vh;
  pointer-events: auto;
  width: fit-content;
  position: fixed;
  top: 0;
  left: 0;
  transition: all 0.5s ease;
  @media screen and (min-width: 992px) {
    width: 20%;
    position: fixed;
  }
  @media screen and (min-width: 1200px) {
    width: 17.5%;
  }
`;

const Wrapper = styled.div`
  background-image: url(../assets/images/navbar_bg.svg);
  background-size: cover;
  border-right: 2px dashed #00a19b;
  transition: all 0.5s ease;
  position: relative;
  width: 250px;
  @media screen and (min-width: 992px) {
    width: 100%;
  }
`;

const GoBackBtn = styled.div`
  position: absolute;
  left: 250px;
  transition: all 0.2s;
  padding: 10px 20px;
  transition: all 0.5s ease;
  display: none;
  svg {
    cursor: pointer;
    background: radial-gradient(#004b49, #000);
    border-radius: 20%;
    padding: 5px;
  }
  @media screen and (min-width: 992px) {
    display: block;
    left: 280px;
  }
`;

const MenuTogglerBtn = styled.div`
  position: relative;
  padding: 15px 20px;
  transition: all 0.5s ease;
  svg {
    cursor: pointer;
    background: radial-gradient(#004b49, #000);
    border-radius: 20%;
    padding: 5px;
  }
  @media screen and (min-width: 992px) {
    display: none;
  }
`;

const SectionTitleContainer = styled.div`
  width: 80%;
  height: 20%;
  margin: auto;
  h1 {
    font-family: "Chivo Mono", monospace;
    text-shadow: 1px 2px 4px rgba(37, 150, 190, 0.6),
      1px 2px 4px rgba(37, 150, 190, 0.6), 1px 2px 4px rgba(37, 150, 190, 0.6),
      1px 2px 4px rgba(37, 150, 190, 0.6);
    text-align: center;
    color: #fff;
    font-size: 1.8rem;
    margin: 0;
    padding-top: 30px;
    @media screen and (min-width: 992px) {
      font-size: 2rem;
    }
  }
`;

const LeftNav = styled.nav`
  width: 100%;
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const NavUlWrapper = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
`;

const NavUl = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 15px;
  li {
    width: fit-content;
    a {
      display: flex;
      align-items: center;
      justify-content: start;
      gap: 10px;
      font-family: "Chivo Mono", monospace;
      color: #fff;
      text-shadow: 1px 2px 4px rgba(37, 150, 190, 0.6);
      text-decoration: none;
      transition: all 0.3s;
      font-size: 1.1rem;
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
  height: 5%;
  color: #fff;
  text-align: center;
  padding: 10px 0;
  font-size: 0.8rem;
  font-family: "Chivo Mono", monospace;
  text-shadow: 1px 2px 4px rgba(37, 150, 190, 0.6);
  @media screen and (min-width: 992px) {
    font-size: 0.7rem;
  }
`;
