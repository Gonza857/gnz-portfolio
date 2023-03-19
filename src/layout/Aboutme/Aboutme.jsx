import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import EducationCard from "../../components/EducationCard/EducationCard";
import TecnoLogo from "../../components/TecnoLogo/TecnoLogo";
import { userContext } from "../../storage/UserContext";
import { motion } from "framer-motion";
import { technologiesImages } from "../../projectsData/projectsData";

function Aboutme() {
  const { isOpenMenu, setIsOpenMenu } = useContext(userContext);
  useEffect(() => {
    if (window.screen.width >= 992) {
      setIsOpenMenu(true);
    } else {
      setIsOpenMenu(false);
    }
  }, [setIsOpenMenu]);

  const educationList = [
    {
      localImg: "./assets/images/aaci_logo.png",
      roundedImg: false,
      bgWhite: false,
      altImg: "AACI Logo",
      cardTitle: "Inglés Superior",
      instituto: "Asociación Argentina de Cultura Inlgesa.",
      description1: "Titulo obtenido: Inglés Superior B2.",
      description2: "",
      finishDate: "Fecha de finalización: Diciembre, 2021.",
    },
    {
      localImg: "./assets/images/coderhouse_logo.webp",
      roundedImg: true,
      bgWhite: true,
      altImg: "Coderhouse Logo",
      cardTitle: "Curso de Desarrollo Web.",
      instituto: "Coderhouse",
      description1: "HTML, CSS, BOOTSTRAP, SASS, GIT, SEO.",
      description2: "",
      finishDate: "Fecha de finalización: Mayo, 2022.",
    },
    {
      localImg: "./assets/images/coderhouse_logo.webp",
      roundedImg: true,
      bgWhite: true,
      altImg: "Coderhouse Logo",
      cardTitle: "Curso de Javascript",
      instituto: "Coderhouse",
      description1: "Javascript para desarrollo web.",
      description2: "",
      finishDate: "Fecha de finalización: Agosto, 2022.",
    },
    {
      localImg: "./assets/images/coderhouse_logo.webp",
      roundedImg: true,
      bgWhite: true,
      altImg: "Coderhouse Logo",
      cardTitle: "Curso de React JS.",
      instituto: "Coderhouse",
      description1: "React JS, desarrollo de una web app SPA.",
      description2: "",
      finishDate: "Fecha de finalización: Noviembre, 2022.",
    },
    {
      localImg: "./assets/images/jn8_logo.png",
      roundedImg: false,
      bgWhite: false,
      altImg: "Jorge Newbery Logo",
      cardTitle: "Educación Secundaria Tecnica.",
      instituto: "Instituto: Jorge Newbery E.E.S.T.N°8.",
      description1: "Titulo obtenido: Técnico Electromecánico.",
      description2: "",
      finishDate: "Fecha de finalización: Diciembre, 2022.",
    },
    // {
    //   localImg: "./assets/images/unlamLogo.webp",
    //   roundedImg: true,
    //   bgWhite: false,
    //   altImg: "UNLaM Logo",
    //   cardTitle: "Educación Universitaria",
    //   instituto: "Universidad Nacional de la Matanza",
    //   description1: "Técnico Universitario en desarrollo web fullstack.",
    //   description2: "",
    //   finishDate: "Abril 2023 - Actualidad.",
    // },
  ];

  return (
    <AboutmeSection
      className="col-12 col-lg-10 pb-3"
      style={{
        opacity: `${window.screen.width < 992 && isOpenMenu ? "0.5" : "1"}`,
      }}
    >
      <Wrapper className="col-12 col-md-11 col-lg-10 m-auto">
        <DevDescription className="col-12">
          <SectionTitle>Sobre mí</SectionTitle>
          <motion.p
            initial={{ x: -500 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
            className="col-12 col-md-10 m-auto"
          >
            Actualmente me encuentro realizando proyectos como Frontend
            developer. Estoy utilizando Javascript como lenguaje de programación
            junto con HTML y CSS para realizar sitios web. Como Framework,
            utilizo React JS. Me mantengo adquiriendo conocimientos y
            habilidades de este ámbito constantemente. Mi objetivo es formarme
            como Desarrollador Web Fullstack.
          </motion.p>
        </DevDescription>

        <DevTechnologies className="col-12 py-1 py-md-3">
          <SectionTitle>Tecnologías utilizadas</SectionTitle>
          <TechnologiesContainer className="col-10 m-auto d-flex pb-4">
            {technologiesImages.map((item, i) => (
              <TecnoLogo key={i} data={item} />
            ))}
          </TechnologiesContainer>
        </DevTechnologies>

        <DevEducationContainer className="col-12 pb-2">
          <SectionTitle>Formación y estudios</SectionTitle>
          <DevEducation className="col-11 col-md-12 m-auto pt-2">
            {educationList.map((item, i) => (
              <EducationCard key={i} data={item} />
            ))}
          </DevEducation>
        </DevEducationContainer>
      </Wrapper>
    </AboutmeSection>
  );
}

export default Aboutme;

const AboutmeSection = styled.div`
  color: #fff;
  width: 100%;
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
  @media screen and (min-width: 992px) {
    width: 85%;
    margin-left: 15%;
    /* background: url(./assets/images/aboutme_bg.svg); */
  }
`;

const SectionTitle = styled.h5`
  font-family: "Chivo Mono", monospace;
  text-shadow: 1px 2px 4px rgba(37, 150, 190, 0.6),
    1px 2px 4px rgba(37, 150, 190, 0.6), 1px 2px 4px rgba(37, 150, 190, 0.6),
    1px 2px 4px rgba(37, 150, 190, 0.6);
  text-align: center;
  font-size: 23px;
  @media screen and (max-width: 768px) {
    margin-top: 20px;
  }
  @media screen and (max-width: 991px) {
    margin-top: 30px;
  }
  @media screen and (min-width: 992px) {
    margin-top: 15px;
    font-size: 1.8rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100%;
  @media screen and (max-width: 400px) {
    flex-direction: column;
  }
`;

const DevDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
  p {
    width: 90%;
    margin: auto;
    padding-bottom: 20px;
    text-align: center;
    font-size: 1rem;
    font-family: "Chivo Mono", monospace;
    text-shadow: 1px 2px 4px rgba(37, 150, 190, 0.6);
    border-bottom: 1px dashed #ff0000;
    @media screen and (min-width: 992px) {
      padding: 10px 40px;
      font-size: 1.1rem;
      line-height: 1.8rem;
    }
    @media screen and (min-width: 1100px) {
      font-size: 1.25rem;
      padding: 10px 40px;
      line-height: 1.6rem;
    }
    @media screen and (min-width: 1200px) {
      font-size: 1.3rem;
      padding: 8px 45px;
      line-height: 1.9rem;
    }
    @media screen and (min-width: 1350px) {
      font-size: 1.25rem;
      line-height: 2.2rem;
    }
    @media screen and (min-width: 1500px) {
      font-size: 1.2rem;
      line-height: 2.2rem;
      padding: 8px 40px;
      padding-bottom: 20px;
    }
    @media screen and (min-width: 1600px) {
      line-height: 2.5rem;
    }
  }
`;

const DevTechnologies = styled.div`
  display: flex;
  flex-direction: column;
`;

const TechnologiesContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px;
  border-bottom: 1px dashed #ff0000;
  @media screen and (min-width: 992px) {
    align-items: center;
  }
`;

const DevEducationContainer = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-content: center;
  @media screen and (max-width: 400px) {
    border-left: 0;
  }
`;

const DevEducation = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  @media screen and (min-width: 992px) {
    justify-content: unset;
    align-content: unset;
  }
`;
