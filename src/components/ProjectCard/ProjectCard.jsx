import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function ProjectCard({ data, id }) {
  console.log(data.imgBorderCircle);
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
        <ProjectTitle>{data.titulo}</ProjectTitle>
        <p className="m-0">
          {data.descripcion}
          <Link to={`/project/${id}`}>Ver más.</Link>
        </p>
      </ProjectInfo>
    </ProjectCardContainer>
  );
}

export default ProjectCard;

const ProjectCardContainer = styled.div`
  min-width: 300px;
  height: 100px;
  display: flex;
  align-items: center;
  gap: 20px;
  color: #fff;
  border: 1px solid #00a19b;
  border-radius: 20px;
  padding: 0 15px;
  @media screen and (max-width: 400px) {
    width: 100%;
    gap: 10px;
  }
`;

const ImgContainer = styled.div`
  border: 1px solid #00a19b;
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
  border: 1px solid #00a19b;
  p {
    @media screen and (max-width: 400px) {
      font-size: 15px;
    }
    a {
      margin-left: 8px;
    }
  }
`;

const ProjectTitle = styled.p`
  margin: 0;
  font-weight: 600;
  @media screen and (min-width: 400px) {
    font-size: 18px;
  }
`;
