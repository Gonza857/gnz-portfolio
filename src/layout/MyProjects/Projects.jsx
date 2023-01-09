import React from "react";
import styled from "styled-components";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

function Projects() {
  const projectsInfo = [
    {
      titulo: "Proyecto Coderhouse",
      descripcion: "Proyecto final del curso de desarrollo web.",
      imgLocalRoute: "./assets/images/desarrolloweb_logo.png",
      imgBorderCircle: false,
    },
    {
      titulo: "Proyecto Coderhouse",
      descripcion: "Proyecto final del curso de Javascript.",
      imgLocalRoute: "./assets/images/javascript_logo.png",
      imgBorderCircle: false,
    },
    {
      titulo: "Proyecto Coderhouse",
      descripcion: "Proyecto final del curso de React JS.",
      imgLocalRoute: "./assets/images/react_logo.svg",
      imgBorderCircle: true,
    },
    {
      titulo: "Proyecto Red Solana",
      descripcion: "Proyecto C.R.U.D para un casino.",
      imgLocalRoute: "./assets/images/redsolana_logo.png",
      imgBorderCircle: true,
    },
    {
      titulo: "Proyecto Red Solana",
      descripcion: "Proyecto C.R.U.D para un casino.",
      imgLocalRoute: "./assets/images/redsolana_logo.png",
      imgBorderCircle: true,
    },
    {
      titulo: "Proyecto Red Solana",
      descripcion: "Proyecto C.R.U.D para un casino.",
      imgLocalRoute: "./assets/images/redsolana_logo.png",
      imgBorderCircle: true,
    },
    {
      titulo: "Proyecto Red Solana",
      descripcion: "Proyecto C.R.U.D para un casino.",
      imgLocalRoute: "./assets/images/redsolana_logo.png",
      imgBorderCircle: true,
    },
    {
      titulo: "Proyecto Red Solana",
      descripcion: "Proyecto C.R.U.D para un casino.",
      imgLocalRoute: "./assets/images/redsolana_logo.png",
      imgBorderCircle: true,
    },
    {
      titulo: "Proyecto Red Solana",
      descripcion: "Proyecto C.R.U.D para un casino.",
      imgLocalRoute: "./assets/images/redsolana_logo.png",
      imgBorderCircle: true,
    },
  ];

  return (
    <ProjectsSection className="col-md-12 col-lg-9 col-xl-10 bor3 d-flex flex-column">
      <SectionTitle>Mis proyectos</SectionTitle>
      <Wrapper className="col-11 bor2">
        <ProjectsWrapper>
          {projectsInfo.map((proyecto, i) => {
            return <ProjectCard key={i} data={proyecto} id={i} />;
          })}
        </ProjectsWrapper>
      </Wrapper>
    </ProjectsSection>
  );
}

export default Projects;

const ProjectsSection = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background-image: url(./assets/images/projects_bg.svg);
  background-size: cover;
  transition: all 0.5s;
  overflow: hidden;
  @media screen and (max-width: 992px) {
    background-size: cover;
    background-image: url(./assets/images/projects_bg_mobile.svg);
  }
  @media screen and (min-width: 992px) {
    width: 75%;
  }
  @media screen and (min-width: 1200px) {
    width: 82.5%;
  }
`;

const Wrapper = styled.div`
  min-height: 90%;
  margin: auto;
  overflow-y: scroll;
  display: flex;
  flex-wrap: wrap;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const SectionTitle = styled.h2`
  color: #fff;
  margin: 0;
  padding-bottom: 10px;
  text-align: center;
  font-family: "Chivo Mono", monospace;
  text-shadow: 1px 2px 4px rgba(37, 150, 190, 0.6),
    1px 2px 4px rgba(37, 150, 190, 0.6), 1px 2px 4px rgba(37, 150, 190, 0.6),
    1px 2px 4px rgba(37, 150, 190, 0.6);
  @media screen and (max-width: 600px) {
    margin-top: 0px;
  }
  @media screen and (max-width: 992px) {
    margin-top: 20px;
  }
`;

const ProjectsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: flex-start;
  flex-wrap: wrap;
  gap: 15px;
  border: 5px solid red;
`;
