import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  projectsInfo,
  technologiesImages,
} from "../../projectsData/projectsData";
import styled, { keyframes } from "styled-components";
import LinkButton from "../Button/LinkButton";

export const FullProjectView = () => {
  const [imagesUsed, setImagesUsed] = useState([]);
  let params = useParams();
  let paramsId = params.id;
  console.log(paramsId);

  let searchProject = projectsInfo.find((project) => project.id == paramsId);
  console.log(searchProject);

  const { thisProjectInfo } = searchProject;
  console.log(thisProjectInfo.technologies);
  console.log("encontraste");
  console.log(technologiesImages);

  function filtrarTecnos() {
    let usedTecnos = [];
    technologiesImages.forEach((tecno) => {
      thisProjectInfo.technologies.forEach((tecnoUsed) => {
        if (tecnoUsed == tecno.name) {
          usedTecnos.push(tecno);
        }
      });
    });
    setImagesUsed(usedTecnos);
  }

  useEffect(() => {
    filtrarTecnos();
  }, []);

  return (
    <ProjectViewContainer className="col-md-12 col-lg-9 col-xl-10 pt-5">
      <Wrapper className="mt-4 gap-3 gap-lg-0">
        {/*  */}

        <ProjectInfo className="col-12 col-lg-5 d-flex flex-column gap-3 px-4">
          <Title>{thisProjectInfo.title}</Title>
          <div>
            <Subtitles className="d-flex flex-column text-start flex-lg-row gap-lg-3">
              Descripcion:
              <Descriptions className="text-start">
                {thisProjectInfo.descripcion}
              </Descriptions>
            </Subtitles>
          </div>
          <div className="d-flex flex-column justify-content-start text-start flex-lg-row gap-lg-2">
            <Subtitles>Fecha de realización:</Subtitles>
            <Descriptions className="text-start">
              {thisProjectInfo.finishedDate}
            </Descriptions>
          </div>
          <Subtitles className="text-start">Tecnologias utilizadas:</Subtitles>
          <TechnologiesImgContainer className="d-flex flex-wrap gap-2 justify-content-center justify-content-lg-start">
            {imagesUsed.map((tecno, i) => {
              return (
                <img
                  src={tecno.localImg}
                  alt={tecno.altImg}
                  key={i}
                  style={tecno.style}
                />
              );
            })}
          </TechnologiesImgContainer>
          {thisProjectInfo.otherTechnologies === "" ? (
            ""
          ) : (
            <>
              <Subtitles className="text-start">
                Otras tecnologias utilizadas:
              </Subtitles>
              <Descriptions className="text-start">
                {thisProjectInfo.otherTechnologies}
              </Descriptions>
            </>
          )}
          <LinkButton href={thisProjectInfo.btnLinkSite}>
            Visitar Sitio
          </LinkButton>
        </ProjectInfo>

        <div className="col-12 col-lg-7 d-flex flex-wrap justify-content-center gap-3 bor2 px-3 p-lg-0">
          <ProjectImgContainer className="col-lg-8">
            <img src={thisProjectInfo.img1} alt="" />
          </ProjectImgContainer>
          <ProjectImgContainer className="col-lg-5">
            <img src={thisProjectInfo.img2} alt="" />
          </ProjectImgContainer>
          <ProjectImgContainer className="col-lg-5">
            <img src={thisProjectInfo.img3} alt="" />
          </ProjectImgContainer>
          <ProjectImgContainer className="col-lg-6">
            <img src={thisProjectInfo.img4} alt="" />
          </ProjectImgContainer>
        </div>
      </Wrapper>
    </ProjectViewContainer>
  );
};

const RevealAnim = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const ProjectViewContainer = styled.div`
  background-image: url(../assets/images/home_bg.svg);
  background-size: cover;
  min-height: 100vh;
  transition: all 0.5s;
  overflow: hidden;
  display: grid;

  @media screen and (min-width: 992px) {
    width: 75%;
  }
  @media screen and (min-width: 1200px) {
    width: 82.5%;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: row;
  text-align: center;

  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`;

const ProjectInfo = styled.div`
  border-right: 2px dashed #00a19b;
`;

const ProjectImgContainer = styled.div`
  img {
    width: 100%;
    object-fit: contain;
    border: 1px solid #00a19b;
    border-radius: 15px;
    box-shadow: 1px 2px 4px rgba(37, 150, 190, 0.6),
      -1px -2px 4px rgba(37, 150, 190, 0.6);
    /* animation: name duration timing-function delay iteration-count direction
      fill-mode; */
    animation: ${RevealAnim} 1s;
  }
`;

const TechnologiesImgContainer = styled.div`
  img {
    width: 65px;
    height: 65px;
    padding: 5px;
    object-fit: contain;
    &:nth-child(8) {
      border-radius: 50%;
    }
    @media screen and (min-width: 768px) {
      width: 68px;
      height: 68px;
    }
    @media screen and (min-width: 1100px) {
      width: 75px;
      height: 75px;
    }
  }
`;

const Title = styled.p`
  color: #fff;
  font-family: "Chivo Mono", monospace;
  text-shadow: 1px 2px 4px rgba(37, 150, 190, 0.6),
    1px 2px 4px rgba(37, 150, 190, 0.6), 1px 2px 4px rgba(37, 150, 190, 0.6),
    1px 2px 4px rgba(37, 150, 190, 0.6);
  text-align: center;
  font-size: 1.5rem;
`;

const Subtitles = styled.p`
  color: #fff;
  font-family: "Chivo Mono", monospace;
  font-size: 1.2rem;
  text-shadow: 1px 2px 4px rgba(37, 150, 190, 0.6),
    1px 2px 4px rgba(37, 150, 190, 0.6);
  margin: 0;
`;

const Descriptions = styled.p`
  font-family: "Chivo Mono", monospace;
  color: #fff;
  font-size: 0.9rem;
  margin: 0;
  text-shadow: none;
`;
