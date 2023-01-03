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
  ];

  return (
    <ProjectsSection className="col-10 bor3 d-flex flex-column">
      <SectionTitle>Mis proyectos</SectionTitle>
      <Wrapper className="col-10">
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
`;

const Wrapper = styled.div`
  height: 90%;
  margin: auto;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const SectionTitle = styled.h2`
  color: #fff;
  margin: 0;
  padding: 10px 0;
  text-align: center;
  font-family: "Chivo Mono", monospace;
  text-shadow: 1px 2px 4px rgba(37, 150, 190, 0.6),
    1px 2px 4px rgba(37, 150, 190, 0.6), 1px 2px 4px rgba(37, 150, 190, 0.6),
    1px 2px 4px rgba(37, 150, 190, 0.6);
`;

const ProjectsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  justify-content: stretch;
  gap: 30px;
  padding: 0 15px;
`;
