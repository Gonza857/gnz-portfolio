import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  projectsInfo,
  technologiesImages,
  columnsImagesProject,
} from "../../projectsData/projectsData";
import styled, { keyframes } from "styled-components";
import LinkButton from "../Button/LinkButton";
import { ModalProjectImg } from "../ModalProjectImg/ModalProjectImg";

export const FullProjectView = () => {
  const [imagesUsed, setImagesUsed] = useState([]);
  let params = useParams();
  let paramsId = Number(params.id);
  let searchProject = projectsInfo.find((project) => project.id === paramsId);
  const { thisProjectInfo } = searchProject;

  function filtrarTecnos() {
    let usedTecnos = [];
    technologiesImages.forEach((tecno) => {
      thisProjectInfo.technologies.forEach((tecnoUsed) => {
        if (tecnoUsed === tecno.name) {
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
    <ProjectViewContainer className="col-md-12 col-lg-9 col-xl-10 pt-5 pt-xl-0 pb-5 pb-lg-0">
      <Wrapper className="gap-3 gap-lg-0 mt-lg-1">
        {/*  */}

        <ProjectInfo className=" d-flex flex-column col-12 col-xl-5 gap-3 gap-lg-2 px-2 px-sm-3 px-lg-4 pt-xl-5 bor3">
          <Title>{thisProjectInfo.title}</Title>

          <div className="d-flex flex-wrap gap-3 gap-md-0">
            {""}

            <div className="col-md-6 p-md-2 m-lg-0 order-lg-0 col-lg-6 col-xl-12">
              <Subtitles className="d-flex flex-column text-start gap-lg-3 gap-xl-1 flex-lg-column">
                Descripcion:
                <Descriptions className="text-start">
                  {thisProjectInfo.descripcion}
                </Descriptions>
              </Subtitles>
            </div>

            {""}
            <div className="col-12 col-md-6 p-md-2 col-lg-6 m-lg-0 order-lg-1 col-xl-12">
              <Subtitles className="text-start">
                Tecnologias utilizadas:
              </Subtitles>
              <TechnologiesImgContainer className="d-flex flex-wrap gap-2 justify-content-center justify-content-lg-center justify-content-xl-start mt-md-2">
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
            </div>

            {thisProjectInfo.otherTechnologies === "" ? (
              ""
            ) : (
              <div className="col-12 col-md-12 col-lg-12 order-lg-2 mt-lg-3 ">
                <Subtitles className="text-start ">
                  Otras tecnologias utilizadas:
                </Subtitles>
                <Descriptions className="text-start ">
                  {thisProjectInfo.otherTechnologies}
                </Descriptions>
              </div>
            )}

            <div className="d-flex align-items-center justify-content-start text-start col-12 gap-2 col-lg-12 order-lg-3 mt-md-4 m-lg-0 mt-lg-3 flex-xl-column align-items-xl-start">
              <Subtitles className="text-start">
                Fecha de realización:
              </Subtitles>
              <Descriptions className="text-start">
                {thisProjectInfo.finishedDate}
              </Descriptions>
            </div>
          </div>
          <div className="my-lg-2">
            <LinkButton href={thisProjectInfo.btnLinkSite}>
              Visitar Sitio
            </LinkButton>
          </div>
        </ProjectInfo>

        <ProjectImagesContainer className="col-12 col-xl-7 px-2 px-md-0 p-lg-0 gap-3 gap-md-2">
          {thisProjectInfo.images.map((img, i) => {
            return (
              <ModalProjectImg imgRoute={img} cols={columnsImagesProject[i]} />
            );
          })}
        </ProjectImagesContainer>
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
  background: rgb(72, 0, 0);
  background: radial-gradient(
    circle,
    rgba(72, 0, 0, 1) 0%,
    rgba(77, 19, 19, 1) 35%,
    rgba(0, 0, 0, 1) 100%
  );
  min-height: 100vh;
  transition: all 0.5s;
  overflow: hidden;
  display: grid;
  @media screen and (min-width: 920px) {
    width: 85%;
    margin-left: 15%;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: row;
  text-align: center;
  flex-direction: column;
  @media screen and (min-width: 1200px) {
    flex-direction: row;
  }
`;

const ProjectImagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: fit-content;
  justify-content: center;
  @media screen and (min-width: 1200px) {
    align-items: center;
    justify-content: center;
    height: 100%;
  }
`;

const ProjectInfo = styled.div`
  border: 0;
  div {
    animation: ${RevealAnim} 1s;
  }
  @media screen and (min-width: 1200px) {
    border-right: 2px dashed #00a19b;
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
    @media screen and (min-width: 1200px) {
      width: 55px;
      height: 55px;
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
  margin: 0;
`;

const Subtitles = styled.p`
  color: #fff;
  font-family: "Chivo Mono", monospace;
  font-size: 1rem;
  text-shadow: 1px 2px 4px rgba(37, 150, 190, 0.6),
    1px 2px 4px rgba(37, 150, 190, 0.6);
  margin: 0;
  @media screen and (min-width: 600px) {
    font-size: 1.15rem;
  }
  @media screen and (min-width: 992px) {
    font-size: 1.1rem;
  }
`;

const Descriptions = styled.p`
  font-family: "Chivo Mono", monospace;
  color: #fff;
  font-size: 0.9rem;
  margin: 0;
  text-shadow: none;
  @media screen and (min-width: 600px) {
    font-size: 1rem;
  }
`;
