import React from "react";
import styled from "styled-components";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { projectsInfo } from "../../projectsData/projectsData";

function Projects() {
  return (
    <ProjectsSection className="col-md-12 col-lg-9 col-xl-10 d-flex flex-column pb-3 pb-lg-0 pt-lg-5 gap-3 gap-md-0">
      <SectionTitle>Portfolio</SectionTitle>
      <Wrapper className="col-11">
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
  background: rgb(0, 161, 155);
  background: radial-gradient(
    circle,
    rgba(0, 161, 155, 1) 0%,
    rgba(0, 44, 42, 1) 0%,
    rgba(0, 83, 80, 1) 50%,
    rgba(0, 44, 42, 1) 100%,
    rgba(0, 161, 155, 1) 100%
  );
  transition: all 0.5s;
  @media screen and (min-width: 992px) {
    width: 85%;
    margin-left: 15%;
  }
`;

const Wrapper = styled.div`
  min-height: 90%;
  margin: auto;
  overflow-y: scroll;
  overflow: visible;
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
  gap: 20px;
  overflow: visible;
`;
