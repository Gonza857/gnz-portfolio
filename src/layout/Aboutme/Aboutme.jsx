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
  }, []);

  const educationList = [
    {
      localImg: "./assets/images/aaci_logo.png",
      roundedImg: false,
      bgWhite: false,
      altImg: "AACI Logo",
      cardTitle: "Inglés Superior",
      instituto: "Asociación Argentina de Cultura Inlgesa",
      description1: "Titulo obtenido: Inglés Superior B2",
      description2: "",
      finishDate: "Fecha de finalización: Diciembre, 2021",
    },
    {
      localImg: "./assets/images/coderhouse_logo.webp",
      roundedImg: true,
      bgWhite: true,
      altImg: "Coderhouse Logo",
      cardTitle: "Curso de Desarrollo Web",
      instituto: "Coderhouse",
      description1: "HTML, CSS, BOOTSTRAP, SASS, GIT, SEO, CLIENTE, SERVIDOR.",
      description2: "",
      finishDate: "Fecha de finalización: Mayo, 2022",
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
      finishDate: "Fecha de finalización: Agosto, 2022",
    },
    {
      localImg: "./assets/images/coderhouse_logo.webp",
      roundedImg: true,
      bgWhite: true,
      altImg: "Coderhouse Logo",
      cardTitle: "Curso de React JS",
      instituto: "Coderhouse",
      description1: "React JS, desarrollo de una web app SPA.",
      description2: "",
      finishDate: "Fecha de finalización: Noviembre, 2022",
    },
    {
      localImg: "./assets/images/jn8_logo.png",
      roundedImg: false,
      bgWhite: false,
      altImg: "Jorge Newbery Logo",
      cardTitle: "Educación Secundaria Tecnica",
      instituto: "Instituto: Jorge Newbery E.E.S.T.N°8",
      description1: "Titulo obtenido: Técnico Electromecánico",
      description2: "",
      finishDate: "Fecha de finalización: Diciembre, 2022",
    },
  ];

  return (
    <AboutmeSection className="col-12 col-lg-10">
      <Wrapper>
        <div className="col-12 col-lg-7 d-flex flex-wrap h-lg-100">
          <DevDescription className="col-12 col-md-6">
            <SectionTitle>Sobre mí</SectionTitle>
            <motion.p
              initial={{ x: -500 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Actualmente me encuentro realizando proyectos como Frontend
              developer. Estoy utilizando Javascript como lenguaje de
              programación junto con HTML y CSS para realizar sitios web. Como
              Framework, utilizo React JS. Me mantengo adquiriendo conocimientos
              y habilidades de este ámbito constantemente. Mi objetivo es
              formarme como Desarrollador Web Fullstack.
            </motion.p>
          </DevDescription>

          <DevTechnologies className="col-12 col-md-6 d-flex flex-column">
            <SectionTitle>Tecnologías utilizadas</SectionTitle>
            <TechnologiesContainer className="d-flex">
              {technologiesImages.map((item, i) => (
                <TecnoLogo key={i} data={item} />
              ))}
            </TechnologiesContainer>
          </DevTechnologies>
        </div>

        <div className="col-12 col-lg-5 h-lg-100">
          <DevEducationContainer className="col-12">
            <SectionTitle>Formación y estudios</SectionTitle>
            <DevEducation className="pt-2">
              {educationList.map((item, i) => (
                <EducationCard key={i} data={item} />
              ))}
            </DevEducation>
          </DevEducationContainer>
        </div>
      </Wrapper>
    </AboutmeSection>
  );
}

export default Aboutme;

const AboutmeSection = styled.div`
  color: #fff;
  width: 100%;
  min-height: 100vh;
  background-image: url(./assets/images/aboutme_bg_mob.svg);
  background-size: cover;
  @media screen and (min-width: 992px) {
    width: 80%;
    margin-left: 20%;
    background: url(./assets/images/aboutme_bg.svg);
  }
  @media screen and (min-width: 1200px) {
    width: 82.5%;
    margin-left: 17.5%;
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
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 400px) {
    flex-direction: column;
  }
`;

const DevDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px dashed #00a19b;
  border-bottom: 1px dashed #00a19b;
  height: fit-content;
  @media screen and (min-width: 768px) {
    height: 100%;
  }
  @media screen and (min-width: 992px) {
    height: 50%;
    width: 100%;
  }
  p {
    margin: 0;
    text-align: center;
    font-size: 1rem;
    padding: 10px 20px;
    font-family: "Chivo Mono", monospace;
    text-shadow: 1px 2px 4px rgba(37, 150, 190, 0.6);
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
      font-size: 1.35rem;
      line-height: 2.2rem;
      padding: 8px 40px;
    }
    @media screen and (min-width: 1600px) {
      line-height: 2.5rem;
    }
  }
`;

const DevTechnologies = styled.div`
  @media screen and (max-width: 600px) {
    border-top: 1px dashed #00a19b;
    padding-bottom: 20px;
  }
  height: fit-content;
  @media screen and (min-width: 768px) {
    height: 100%;
  }
  @media screen and (min-width: 992px) {
    height: 50%;
    width: 100%;
  }
`;

const TechnologiesContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px;
  @media screen and (min-width: 992px) {
    align-items: center;
    height: 100%;
  }
`;

const DevEducationContainer = styled.div`
  height: 100%;
  border-left: 0.5px dashed #00a19b;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-content: center;
  @media screen and (max-width: 400px) {
    border-left: 0;
    border-top: 1px dashed #00a19b;
  }
  h5 {
    @media screen and (max-width: 400px) {
      /* margin: 0; */
    }
  }
`;

const DevEducation = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 20px;
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

const DevEducationCard = styled.div``;
