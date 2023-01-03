import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";
import { AiFillLinkedin, AiFillGithub, AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
// import "animate.css";
import { userContext } from "../../storage/UserContext";

function Home() {
  const { isOpenMenu, setIsOpenMenu } = useContext(userContext);

  window.addEventListener("resize", function () {
    if (this.window.innerWidth >= 992) setIsOpenMenu(true);
  });

  return (
    <MainSection className="col-md-12 col-lg-9 col-xl-10 ">
      <Wrapper className="col-10 col-xl-10 text-white ">
        <DevMainText className="">
          <p className="m-0">Hola! Mi nombre es Gonzalo.</p>
          <p className="m-0">Soy desarrollador Frontend.</p>
        </DevMainText>
        <DevDesciptionText>
          <p className="animate__animated animate__fadeInRight">
            ¡Bienvenido a mi sitio web! Me llamo Gonzalo, soy de Argentina. Me
            destaco como desarrollador Frontend React. Aquí encontraras mis
            proyectos a lo largo de mi trayectoria, información acerca de las
            tecnologías que utilizo e informacíon acerca de mis habilidades.
          </p>
          <div className="d-flex justify-content-start gap-3 animate__animated animate__fadeInUp">
            <button>Ver proyectos</button>
            <button>Sobre Mí</button>
          </div>
        </DevDesciptionText>
      </Wrapper>
    </MainSection>
  );
}

export default Home;

const typewriter1 = keyframes`
      from {
            width: 0;
      }
      to {
            width: 26.8ch;
      }
`;

const blinkTextCursor = keyframes`
      from {
            border-right-color: rgba(255, 255, 255, 0.75);
            /* color: rgba(255, 255, 255, 0.75); */
      }
      to {
            border-right-color: #000;
            /* color: #000; */
      }
`;

const typewriter2 = keyframes`
      from {
            width: 0;
      }
      to {
            width: 26.8ch;
      }
`;

const MainSection = styled.div`
  background-image: url(./assets/images/home_bg.svg);
  background-size: cover;
  min-height: 100vh;
  display: grid;
  transition: all 0.5s;
  overflow: hidden;
  @media screen and (min-width: 1200px) {
    * {
      /* border: 0 !important; */
    }
  }
`;

const Wrapper = styled.div`
  background: transparent;
  height: 90vh;
  margin: auto;
  display: grid;
  align-content: center;
`;

const DevMainText = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  p {
    font-family: "Chivo Mono", monospace;
    text-shadow: 1px 2px 4px rgba(37, 150, 190, 0.6),
      1px 2px 4px rgba(37, 150, 190, 0.6), 1px 2px 4px rgba(37, 150, 190, 0.6),
      1px 2px 4px rgba(37, 150, 190, 0.6);
    @media screen and (min-width: 300px) {
      font-size: 1rem;
    }
    @media screen and (min-width: 400px) {
      font-size: 1.3rem;
    }
    @media screen and (min-width: 500px) {
      font-size: 1.4rem;
    }
    @media screen and (min-width: 600px) {
      font-size: 1.8rem;
    }
    @media screen and (min-width: 768px) {
      font-size: 2.3rem;
    }
    @media screen and (min-width: 992px) {
      font-size: 2.2rem;
    }
    @media screen and (min-width: 1200px) {
      font-size: 3rem;
    }
    &:first-child {
      border-right: 2px solid rgba(255, 255, 255, 0.75);
      white-space: nowrap;
      overflow: hidden;
      animation: ${typewriter1} 2s steps(27) 0.5s both,
        ${blinkTextCursor} 500ms steps(27) 2s infinite;
    }
    &:last-child {
      border-right: 2px solid rgba(255, 255, 255, 0.75);
      white-space: nowrap;
      overflow: hidden;
      animation: ${typewriter2} 3s steps(27) 3s both,
        ${blinkTextCursor} 500ms steps(27) 3s infinite;
    }
  }
`;

const DevDesciptionText = styled.div`
  height: fit-content;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  overflow: unset;
  margin-top: 20px;
  gap: 20px;
  animation: ${blinkTextCursor} 500ms;
  p {
    font-family: "Chivo Mono", monospace;
    text-shadow: 1px 2px 4px rgba(37, 150, 190, 0.6),
      1px 2px 4px rgba(37, 150, 190, 0.6);
    font-size: 0.6rem;
    @media screen and (min-width: 400px) {
      font-size: 0.7rem;
      margin: 0;
    }
    @media screen and (min-width: 500px) {
      font-size: 1rem;
    }
    @media screen and (min-width: 600px) {
      font-size: 1rem;
    }
    @media screen and (min-width: 768px) {
      font-size: 1.2rem;
    }
    @media screen and (min-width: 992px) {
      font-size: 1.2rem;
    }
    @media screen and (min-width: 1200px) {
      font-size: 1.5rem;
    }
  }
  button {
    display: inline-block;
    padding: 8px 25px;
    border: 1px solid #4f4f4f;
    border-radius: 15px;
    transition: all 0.2s ease-in;
    position: relative;
    overflow: hidden;
    color: white;
    z-index: 1;
    background-color: #00a19b;
    box-shadow: 2px 2px 5px rgba(37, 150, 190, 0.6),
      -2px -2px 5px rgba(37, 150, 190, 0.6);
    @media screen and (min-width: 300px) {
      font-size: 0.8rem;
    }
    @media screen and (min-width: 600px) {
      font-size: 1rem;
    }
    @media screen and (min-width: 992px) {
      font-size: 1.25rem;
    }
    @media screen and (min-width: 1200px) {
      font-size: 1.5rem;
    }
    &::before {
      content: "";
      position: absolute;
      left: 50%;
      transform: translateX(-50%) scaleY(1) scaleX(1.25);
      top: 100%;
      width: 140%;
      height: 180%;
      background-color: rgba(0, 0, 0, 0.05);
      border-radius: 50%;
      display: block;
      transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
      z-index: -1;
    }
    &::after {
      content: "";
      position: absolute;
      left: 55%;
      transform: translateX(-50%) scaleY(1) scaleX(1.45);
      top: 180%;
      width: 160%;
      height: 190%;
      background-color: #007773;
      border-radius: 50%;
      display: block;
      transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
      z-index: -1;
    }
    &:hover {
      color: #ffffff;
      border: 1px solid #39bda7;
    }
    &:hover:before {
      top: -35%;
      background-color: #007763;
      transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
    }
    &:hover:after {
      top: -45%;
      background-color: #007763;
      transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
    }
  }
`;
