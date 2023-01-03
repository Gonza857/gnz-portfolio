import React from "react";
import styled from "styled-components";

function Aboutme() {
  return (
    <AboutmeSection className="col-10">
      <Wrapper>
        <div className="col-7 d-flex flex-wrap">
          <DevDescription className="col-12">
            <SectionTitle className="animate__animated animate__bounceInLeft">
              Sobre mí
            </SectionTitle>
            <p className="animate__animated animate__bounceIn">
              Actualmente me encuentro realizando proyectos como Frontend
              developer. Estoy utilizando Javascript como lenguaje de
              programación junto con HTML y CSS para realizar sitios web. Como
              Framework, utilizo React JS. Me mantengo adquiriendo conocimientos
              y habilidades de este ámbito constantemente. Mi objetivo es
              formarme como Desarrollador Web Fullstack.
            </p>
          </DevDescription>

          <DevTechnologies className="col-12 d-flex flex-column">
            <SectionTitle className="animate__animated animate__bounceInLeft">
              Tecnologías utilizadas
            </SectionTitle>
            <TechnologiesContainer className="d-flex">
              <img
                className="animate__animated animate__fadeIn"
                src="./assets/images/vsc_logo.png"
                alt=""
              />
              <img
                className="animate__animated animate__fadeIn"
                src="./assets/images/html_logo.png"
                alt=""
              />
              <img
                className="animate__animated animate__fadeIn"
                src="./assets/images/css_logo.png"
                alt=""
              />
              <img
                className="animate__animated animate__fadeIn"
                src="./assets/images/javascript_logo.png"
                alt=""
              />
              <img
                className="animate__animated animate__fadeIn"
                src="./assets/images/react_logo.png"
                alt=""
              />
              <img
                className="animate__animated animate__fadeIn"
                src="./assets/images/styledcomp_logo.png"
                alt=""
              />
              <img
                className="animate__animated animate__fadeIn"
                src="./assets/images/git_logo.png"
                alt=""
              />
              <img
                className="animate__animated animate__fadeIn"
                src="./assets/images/github_logo.png"
                alt=""
              />
              <img
                className="animate__animated animate__fadeIn"
                src="./assets/images/sass_logo.png"
                alt=""
              />
              <img
                className="animate__animated animate__fadeIn"
                src="./assets/images/netlify_logo.png"
                alt=""
              />
              <img
                className="animate__animated animate__fadeIn"
                src="./assets/images/hostinger_logo.webp"
                alt=""
              />
              <img
                className="animate__animated animate__fadeIn"
                src="./assets/images/bootstrap_logo.png"
                alt=""
              />
              <img
                className="animate__animated animate__fadeIn"
                src="./assets/images/firebase_logo.svg"
                alt=""
              />
            </TechnologiesContainer>
          </DevTechnologies>
        </div>

        <div className="col-5">
          <DevEducationContainer className="col-12 d-flex flex-column align-content-center">
            <SectionTitle>Formación y estudios</SectionTitle>
            <DevEducation className="d-flex flex-wrap flex-column gap-4 pt-2 align-content-center">
              <div className="col-12 d-flex gap-3 animate__animated animate__bounceInRight">
                <div className=" col-2 d-grid align-content-center justify-content-center">
                  <img
                    src="./assets/images/aaci_logo.png"
                    alt=""
                    style={{ borderRadius: "30%" }}
                  />
                </div>
                <div className="d-flex flex-column justify-content-center">
                  <p>Inglés Superior</p>
                  <p>Asociación Argentina de Cultura Inlgesa</p>
                  <p>Titulo obtenido: Inglés Superior B2</p>
                  <p>Fecha de finalización: Diciembre, 2021</p>
                </div>
              </div>

              <div className="col-12 d-flex gap-3 animate__animated animate__bounceInRight">
                <div className=" col-2 d-grid align-content-center justify-content-center">
                  <img
                    src="./assets/images/coderhouse_logo.webp"
                    alt=""
                    style={{ backgroundColor: "#fff", borderRadius: "50%" }}
                  />
                </div>
                <div className="d-flex flex-column justify-content-center">
                  <p>Curso de Desarrollo Web</p>
                  <p>Coderhouse</p>
                  <p style={{ fontSize: "10px" }}>
                    HTML, CSS, BOOTSTRAP, SASS, GIT, SEO, CLIENTE, SERVIDOR.
                  </p>
                  <p>Fecha de finalización: Mayo, 2022</p>
                </div>
              </div>

              <div className="col-12 d-flex gap-3 animate__animated animate__bounceInRight">
                <div className=" col-2 d-grid align-content-center justify-content-center">
                  <img
                    src="./assets/images/coderhouse_logo.webp"
                    alt=""
                    style={{ backgroundColor: "#fff", borderRadius: "50%" }}
                  />
                </div>
                <div className="d-flex flex-column justify-content-center">
                  <p>Curso de Javascript</p>
                  <p>Coderhouse</p>
                  <p>Javascript para desarrollo web.</p>
                  <p>Fecha de finalización: Agosto, 2022</p>
                </div>
              </div>

              <div className="col-12 d-flex gap-3 animate__animated animate__bounceInRight">
                <div className=" col-2 d-grid align-content-center justify-content-center">
                  <img
                    src="./assets/images/coderhouse_logo.webp"
                    alt=""
                    style={{ backgroundColor: "#fff", borderRadius: "50%" }}
                  />
                </div>
                <div className="d-flex flex-column justify-content-center">
                  <p>Curso de React JS</p>
                  <p>Coderhouse</p>
                  <p>React JS, desarrollo de una web app SPA.</p>
                  <p>Fecha de finalización: Noviembre, 2022</p>
                </div>
              </div>

              <div className="col-12 d-flex gap-3 animate__animated animate__bounceInRight">
                <div className=" col-2 d-grid align-content-center justify-content-center">
                  <img
                    src="./assets/images/jn8_logo.png"
                    alt=""
                    style={{ borderRadius: "10%" }}
                  />
                </div>
                <div className="col-10">
                  <p>Educación Secundaria Tecnica</p>
                  <p>Instituto: Jorge Newbery E.E.S.T.N°8</p>
                  <p>Titulo obtenido: Técnico Electromecánico</p>
                  <p>Fecha de finalización: Diciembre, 2022</p>
                </div>
              </div>
            </DevEducation>
          </DevEducationContainer>
        </div>
      </Wrapper>
    </AboutmeSection>
  );
}

export default Aboutme;

const SectionTitle = styled.h5`
  font-family: "Chivo Mono", monospace;
  text-shadow: 1px 2px 4px rgba(37, 150, 190, 0.6),
    1px 2px 4px rgba(37, 150, 190, 0.6), 1px 2px 4px rgba(37, 150, 190, 0.6),
    1px 2px 4px rgba(37, 150, 190, 0.6);
  text-align: center;
  font-size: 23px;
  padding-top: 20px;
`;

const AboutmeSection = styled.div`
  color: #fff;
  height: 100vh;
  background: url(./assets/images/aboutme_bg.svg);
  background-size: cover;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
`;

const DevDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50%;
  border-right: 0.5px dashed #00a19b;
  border-bottom: 0.5px dashed #00a19b;
  p {
    margin: 0;
    text-align: center;
    padding: 0px 90px;
    /* border: 1px solid pink; */
    font-size: 20px;
    font-family: "Chivo Mono", monospace;
    text-shadow: 1px 2px 4px rgba(37, 150, 190, 0.6);
  }
`;

const DevTechnologies = styled.div`
  height: 50%;
  border-bottom: 0.5px dashed #00a19b;
`;

const TechnologiesContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 7px;
  img {
    width: 90px;
    height: 90px;
    padding: 5px;
    object-fit: contain;
    &:nth-child(8) {
      border-radius: 50%;
    }
  }
`;

const DevEducationContainer = styled.div`
  height: 100%;
  border-left: 0.5px dashed #00a19b;
  overflow: hidden;
`;

const DevEducation = styled.div`
  height: 100%;
  width: 100%;
  div {
    width: fit-content;
    div {
      img {
        width: 40px;
        height: 40px;
        object-fit: contain;
      }
    }
    p {
      margin: 0;
      font-size: 13px;
      font-family: "Chivo Mono", monospace;
      &:nth-child(1) {
        font-size: 18px;
        text-shadow: 1px 2px 4px rgba(37, 150, 190, 0.6),
          1px 2px 4px rgba(37, 150, 190, 0.6),
          1px 2px 4px rgba(37, 150, 190, 0.6);
      }
    }
  }
`;
