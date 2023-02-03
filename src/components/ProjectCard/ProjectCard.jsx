import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

function ProjectCard({ data, id }) {
  console.log(data.entrada);
  const { entrada } = data;
  return (
    <ProjectCardContainer className="col-3">
      <ImgContainer>
        <img
          src={data.imgLocalRoute}
          alt="Project Logo"
          style={data.imgBorderCircle ? { borderRadius: "50%" } : {}}
        />
      </ImgContainer>
      <ProjectInfo>
        <ProjectTitle>
          <Link to={`/project/${id}`}>{data.titulo}</Link>
        </ProjectTitle>
        <ProjectDescription className="m-0">
          {data.descripcion}
          <Link to={`/project/${id}`}>Ver más.</Link>
        </ProjectDescription>
      </ProjectInfo>
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
  height: 100px;
  display: flex;
  align-items: center;
  gap: 20px;
  color: #fff;
  border: 1px solid #00a19b;
  border-radius: 20px;
  padding: 0 15px;
  min-width: 280px;
  gap: 10px;
  animation: ${RevealAnim} 1s;
  transition: all 0.3s;
  &:hover {
    box-shadow: 0px 0px 50px 0px rgba(0, 161, 155, 0.75);
  }
  @media screen and (min-width: 400px) {
    min-width: 300px;
  }
`;

const ImgContainer = styled.div`
  img {
    width: 50px;
    height: 50px;
    object-fit: contain;
    @media screen and (max-width: 400px) {
      width: 40px;
      height: 40px;
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
    text-shadow: 1px 2px 4px rgba(37, 150, 190, 0.6),
      1px 2px 4px rgba(37, 150, 190, 0.6);
    margin: 0;
    font-weight: 600;
    font-size: 1rem;
    color: #fff;
    @media screen and (min-width: 400px) {
      font-size: 1rem;
    }
  }
`;

const ProjectDescription = styled.p`
  font-size: 0.8rem;
  a {
    color: #fff;
    text-shadow: 1px 2px 4px rgba(37, 150, 190, 0.6),
      1px 2px 4px rgba(37, 150, 190, 0.6), 1px 2px 4px rgba(37, 150, 190, 0.6),
      1px 2px 4px rgba(37, 150, 190, 0.6);
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
