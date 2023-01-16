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
      <Wrapper className="mt-4 gap-3 gap-lg-0 bor1">
        {/*  */}

        <ProjectInfo className=" d-flex flex-column col-12 gap-3 px-2 px-sm-3 px-lg-4 col-xl-5 gap-lg-1 bor1">
          <Title>{thisProjectInfo.title}</Title>

          <div className="bor1 d-flex flex-wrap">
            {""}

            <div className="bor2 col-md-8 mb-md-3 order-lg-0 col-lg-6 col-xl-12">
              <Subtitles className="d-flex flex-column text-start flex-md-row gap-lg-3 flex-lg-column gap-xl-1">
                Descripcion:
                <Descriptions className="text-start px-md-2">
                  {thisProjectInfo.descripcion}
                </Descriptions>
              </Subtitles>
            </div>

            {""}

            <div className="d-flex flex-column justify-content-start text-start col-md-4 gap-md-2 col-lg-6 order-lg-3 mt-lg-3 flex-xl-row">
              <Subtitles>Fecha de realización:</Subtitles>
              <Descriptions className="text-start">
                {thisProjectInfo.finishedDate}
              </Descriptions>
            </div>

            {""}

            <div className="col-12 col-lg-6 mt-md-2 mb-md-4 order-lg-1 col-xl-12 bor1">
              <Subtitles className="text-start">
                Tecnologias utilizadas:
              </Subtitles>
              <TechnologiesImgContainer className="d-flex flex-wrap gap-2 justify-content-center justify-content-lg-start mt-md-2">
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

            <div className="bor2 col-12 order-lg-2">
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
            </div>
          </div>
          <LinkButton href={thisProjectInfo.btnLinkSite}>
            Visitar Sitio
          </LinkButton>
        </ProjectInfo>

        <div className="col-12 col-xl-7 d-flex flex-wrap justify-content-center gap-3 px-2 px-md-0 p-lg-0 bor1 my-md-3">
          <ProjectImgContainer className="col-12 col-sm-8 col-md-5 col-xl-8">
            <img src={thisProjectInfo.img1} alt="" />
          </ProjectImgContainer>
          <ProjectImgContainer className="col-12 col-sm-6 col-md-6 col-xl-5">
            <img src={thisProjectInfo.img2} alt="" />
          </ProjectImgContainer>
          <ProjectImgContainer className="col-12 col-sm-5 col-md-6 col-xl-5">
            <img src={thisProjectInfo.img3} alt="" />
          </ProjectImgContainer>
          <ProjectImgContainer className="col-12 col-sm-8 col-md-5 col-xl-6">
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
  background-image: url(../assets/images/singleProyect_bg_mob.svg);
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

  @media screen and (max-width: 1199px) {
    flex-direction: column;
  }
`;

const ProjectInfo = styled.div`
  border-right: 2px dashed #00a19b;
`;

const ProjectImgContainer = styled.div`
  border: 3px solid yellow;
  display: flex;
  align-items: center;
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
  font-size: 0.8rem;
  margin: 0;
  text-shadow: none;
  @media screen and (min-width: 600px) {
    font-size: 1rem;
  }
`;
