import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { userContext } from "../../storage/UserContext";

function Footer() {
  const { setIsOpenMenu, isOpenMenu } = useContext(userContext);

  const closeSideBar = () => {
    window.scrollTo(0, 0);
    if (window.screen.width < 992) {
      setIsOpenMenu(false);
    }
  };

  return (
    <StyledFooter
      className="p-2 py-4 d-flex flex-wrap"
      style={{
        opacity: `${window.screen.width < 992 && isOpenMenu ? "0.5" : "1"}`,
      }}
    >
      <CopySection className="col-12 col-md-8">
        <LogoContainer>
          <img src="../assets/images/footerLogo.png" alt="Portfolio Logo" />
        </LogoContainer>
        <TextContainer>
          <p>© Gonzalo Ramos - 2023. Todos los derechos reservados.</p>
        </TextContainer>
      </CopySection>
      <LinksSection className="col-12 col-md-4">
        <p>Secciones</p>
        <div>
          <Link to="/" onClick={() => closeSideBar()}>
            Inicio
          </Link>
          <Link to="/aboutme" onClick={() => closeSideBar()}>
            Sobre Mi
          </Link>
          <Link to="/projects" onClick={() => closeSideBar()}>
            Proyectos
          </Link>
          <Link to="/contact" onClick={() => closeSideBar()}>
            Contacto
          </Link>
        </div>
      </LinksSection>
    </StyledFooter>
  );
}

export default Footer;

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

const girar = keyframes`
    0% {
        transform: rotate(0deg);
    } 
    100% {
        transform: rotate(359deg);
    }
`;

const StyledFooter = styled.footer`
  color: #fff;
  width: 100%;
  min-height: 30vh;
  background-color: #003836;
  border-top: 2px dashed #00a19b;
  gap: 20px;
  @media screen and (min-width: 768px) {
    gap: 0px;
  }
  @media screen and (min-width: 992px) {
    width: 85%;
    margin-left: 15%;
  }
`;

const LinksSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Chivo Mono", monospace;
  gap: 20px;
  p {
    font-size: 1.2rem;
    color: #fff;
    margin: 0;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 5px;
    a {
      color: #fff;
      text-shadow: 1px 2px 4px rgba(37, 150, 190, 0.6);
      text-decoration: none;
      transition: all 0.3s;
      font-size: 1rem;
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
    }
  }
`;

const CopySection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

const LogoContainer = styled.div`
  /* transition: all 1s; */
  animation: ${girar} 5s infinite linear;
  /* &:hover {
    transform: rotate(360deg) scale(1.1);
  } */
  img {
    background-color: #000;
    box-shadow: 0px 0px 15px 3px rgba(0, 161, 155, 0.75);
    -webkit-box-shadow: 0px 0px 15px 3px rgba(0, 161, 155, 0.75);
    -moz-box-shadow: 0px 0px 15px 3px rgba(0, 161, 155, 0.75);
    padding: 5px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: contain;
  }
`;

const TextContainer = styled.div`
  p {
    font-family: "Chivo Mono", monospace;
    margin: 0;
    text-align: center;
  }
`;
