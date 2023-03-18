import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import MainBtn from "../Button/MainBtn";

function ProjectCard({ data, id }) {
  return (
    <ProjectCardContainer className="col-11 col-md-11 col-lg-10 col-xl-8 d-flex flex-column flex-md-row p-2 p-lg-0">
      <div className="col-12 col-md-9 col-lg-10 bor2 d-flex flex-wrap justify-content-around align-items-center gap-1 gap-lg-0">
        <ImgContainer className="col-2 bor1">
          <img
            className="bor2"
            src={data.imgLocalRoute}
            alt="Project Logo"
            style={data.imgBorderCircle ? { borderRadius: "50%" } : {}}
          />
        </ImgContainer>

        <ProjectInfo className="col-9 bor3">
          <ProjectTitle>
            <Link to={`/project/${id}`}>{data.titulo}</Link>
          </ProjectTitle>
          <ProjectDescription className="m-0">
            {data.descripcion}
          </ProjectDescription>
        </ProjectInfo>
      </div>

      <div className="d-flex gap-2 bor3">
        <MainBtn>
          <Link to={`/project/${id}`}>Ver más</Link>
        </MainBtn>
      </div>
    </ProjectCardContainer>
  );
}

export default ProjectCard;

const RevealAnim = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

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

const ProjectCardContainer = styled.div`
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: #fff;
  border: 1px solid rgba(37, 150, 190, 0.6);
  border-radius: 5px;
  padding: 0 15px;
  min-width: 280px;
  animation: ${RevealAnim} 1s;
  transition: all 0.3s;
  box-shadow: 2px 2px 5px rgba(37, 150, 190, 0.6),
    -2px -2px 5px rgba(37, 150, 190, 0.6);
  color: #fff;
  &:hover {
    box-shadow: 0px 0px 15px 3px rgba(255, 0, 8, 0.75);
  }
  @media screen and (min-width: 400px) {
    min-width: 300px;
  }
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 70px;
    height: 70px;
    object-fit: contain;
    @media screen and (max-width: 600px) {
      width: 50px;
      height: 50px;
    }
  }
`;

const ProjectInfo = styled.div`
  p {
    font-family: "Chivo Mono";
  }
`;

const ProjectTitle = styled.div`
  a {
    font-family: "Chivo Mono";
    text-shadow: 2px 2px 5px rgba(203, 0, 7, 0.75),
      -2px -2px 5px rgba(203, 0, 7, 0.75);
    margin: 0;
    font-weight: 600;
    font-size: 0.9rem;
    color: #fff;
    @media screen and (min-width: 600px) {
      font-size: 1rem;
    }
  }
`;

const ProjectDescription = styled.p`
  font-size: 0.6rem;
  a {
    color: #fff;
    text-shadow: 2px 2px 5px rgba(203, 0, 7, 0.75),
      -2px -2px 5px rgba(203, 0, 7, 0.75), 2px 2px 5px rgba(203, 0, 7, 0.75),
      -2px -2px 5px rgba(203, 0, 7, 0.75);
    margin-left: 8px;
    transition: all 0.3s;
    &:hover {
      text-shadow: 1px 2px 4px rgba(37, 150, 190, 0.6),
        1px 2px 4px rgba(37, 150, 190, 0.6), 1px 2px 4px rgba(37, 150, 190, 0.6),
        1px 2px 4px rgba(37, 150, 190, 0.6), 1px 2px 4px rgba(37, 150, 190, 0.6),
        1px 2px 4px rgba(37, 150, 190, 0.6);
    }
  }
`;
