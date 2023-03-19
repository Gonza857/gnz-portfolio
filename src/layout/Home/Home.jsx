import React, { useContext, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { userContext } from "../../storage/UserContext";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import MainBtn from "../../components/Button/MainBtn";

function Home() {
  const { isOpenMenu, setIsOpenMenu } = useContext(userContext);
  const goTo = useNavigate();

  const closeSideBar = () => {
    window.scrollTo(0, 0);
    if (window.screen.width < 992) {
      setIsOpenMenu(false);
    }
  };

  return (
    <MainSection
      className="col-md-12"
      style={{
        opacity: `${window.screen.width < 992 && isOpenMenu ? "0.5" : "1"}`,
      }}
    >
      <Wrapper className="col-10 col-xl-10 text-white ">
        <DevMainText className="">
          <p className="m-0">Hola! Mi nombre es Gonzalo.</p>
          <p className="m-0">Soy desarrollador Frontend.</p>
        </DevMainText>
        <DevDesciptionText>
          <motion.p
            initial={{ x: 500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            ¡Bienvenido a mi sitio web! Me llamo Gonzalo, soy de Argentina. Me
            destaco como desarrollador Frontend React. Aquí encontraras mis
            proyectos a lo largo de mi trayectoria, información acerca de las
            tecnologías que utilizo e informacíon acerca de mis habilidades.
          </motion.p>

          <div className="d-flex justify-content-start gap-3">
            <motion.div
              initial={{ y: 500, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <MainBtn
                type="primary"
                fn={() => {
                  goTo("/projects");
                  closeSideBar();
                }}
              >
                Ver Proyectos
              </MainBtn>
            </motion.div>
            <motion.div
              initial={{ y: 500, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <MainBtn
                type="secondary"
                fn={() => {
                  goTo("/aboutme");
                  closeSideBar();
                }}
              >
                Sobre Mi
              </MainBtn>
            </motion.div>
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
  min-height: 100vh;
  background: rgb(0, 161, 155);
  background: radial-gradient(
    circle,
    rgba(0, 161, 155, 1) 0%,
    rgba(0, 44, 42, 1) 0%,
    rgba(0, 83, 80, 1) 50%,
    rgba(0, 44, 42, 1) 100%,
    rgba(0, 161, 155, 1) 100%
  );
  display: grid;
  transition: all 0.5s;
  overflow: hidden;

  @media screen and (min-width: 992px) {
    width: 85%;
    margin-left: 20%;
  }
  @media screen and (min-width: 1200px) {
    width: 85%;
    margin-left: 15%;
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
    font-size: 1rem;
    @media screen and (min-width: 350px) {
      font-size: 1.2rem;
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
    font-size: 0.9rem;
    @media screen and (min-width: 400px) {
      font-size: 1rem;
      margin: 0;
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
`;
