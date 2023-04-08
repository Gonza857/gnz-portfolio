import React, { useContext } from "react";
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
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const history = useNavigate();
  const { isOpenMenu, setIsOpenMenu } = useContext(userContext);

  const iconSize = { fontSize: "1.9rem" };

  const closeSideBar = () => {
    window.scrollTo(0, 0);
    if (window.screen.width < 992) {
      setIsOpenMenu(false);
    }
  };

  return (
    <>
      <SectionNav
        style={{
          transform: `${!isOpenMenu ? "translateX(-100%)" : "translateX(0)"}`,
        }}
      >
        <Wrapper className={`${!isOpenMenu ? "closedBar" : "openBar"}`}>
          {/* --------------- */}
          <SectionTitleContainer className="">
            <Link to="/">
              <img src="../assets/images/footerLogo.png" alt="" />
            </Link>
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
              <a href="./assets/pdf/CV-RAMOS-GONZALO.pdf" download>
                Descargar CV
                <AiOutlineDownload style={{ fontSize: "20px" }} />
              </a>
            </DownloadCvContainer>

            {/* --------------- */}
            <DevRRSS>
              <div>
                <a
                  href="https://github.com/Gonza857"
                  target="_BLANK"
                  rel="noreferrer"
                >
                  <AiFillGithub style={{ fontSize: "32px" }} />
                </a>
                <a
                  href="https://www.linkedin.com/in/gonzaloramos-webdev"
                  target="_BLANK"
                  rel="noreferrer"
                >
                  <AiFillLinkedin style={{ fontSize: "32px" }} />
                </a>
              </div>
            </DevRRSS>
          </LeftNav>
          {/* --------------- */}
          <DevInfo>
            <p className="p-0 m-0">Desarrollado por Gonzalo Ramos</p>
          </DevInfo>
        </Wrapper>
      </SectionNav>
      <MenuTogglerBtn className={`${isOpenMenu ? "openBtn" : "closedBtn"}`}>
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
      <GoBackBtn onClick={() => history(-1)}>
        <AiOutlineRollback style={{ color: "#FFF", fontSize: "2.5rem" }} />
      </GoBackBtn>
    </>
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
  min-height: 100vh;
  pointer-events: auto;
  transition: all 0.5s ease;
  opacity: 1;
  .openBar {
    transform: translateX(0);
  }
  .closedBar {
    transform: translateX(0);
  }
  @media screen and (min-width: 992px) {
    width: 15%;
    position: fixed;
  }
`;

const Wrapper = styled.div`
  width: 200px;
  background-color: #003836;
  background-size: cover;
  border-right: 2px dashed #00a19b;
  transition: all 0.5s ease;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    width: 250px;
  }
  @media screen and (min-width: 992px) {
    width: 100%;
  }
`;

const GoBackBtn = styled.div`
  width: fit-content;
  position: fixed;
  right: 0;
  z-index: 3000;
  transition: all 0.2s;
  padding: 30px;
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
  }
`;

const MenuTogglerBtn = styled.div`
  width: fit-content;
  position: fixed;
  right: 0;
  z-index: 4000;
  padding: 20px;
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
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    object-fit: contain;
    transition: all 0.3s;
    &:hover {
      transform: scale(1.05);
    }
  }
  /* h1 {
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
  } */
`;

const LeftNav = styled.nav`
  width: 100%;
  height: 65%;
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
