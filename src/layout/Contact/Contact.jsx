import React from "react";
import styled from "styled-components";
import { AiOutlineSend } from "react-icons/ai";

function Contact() {
  return (
    <ContactContainer className="col-12 col-lg-10">
      <Wrapper className="col-12 col-lg-10 m-auto d-grid align-content-center">
        <FormContainer className="col-10 col-sm-8 col-md-6 m-auto text-white d-flex flex-column gap-3">
          <FormTitle>Contacto</FormTitle>
          <ContactForm className="d-flex flex-column gap-3">
            <div className="d-flex flex-column formGroup">
              <input
                name="email"
                type="email"
                placeholder="Ingresa tu e-mail"
                className="formField"
                required
              />
              <label htmlFor="email" className="formLabel">
                Email
              </label>
            </div>

            <div className="d-flex flex-column formGroup">
              <TextArea
                className="formField"
                name="mensaje"
                placeholder="Ingresa tu mensaje"
                style={{ resize: "none" }}
              />
              <label htmlFor="mensaje" className="formLabel">
                Mensaje
              </label>
            </div>

            <button
              type="submit"
              className="d-flex gap-1 justify-content-center align-items-center"
            >
              <p className="m-0">Enviar</p>
              <AiOutlineSend />
            </button>
          </ContactForm>
        </FormContainer>
      </Wrapper>
    </ContactContainer>
  );
}

export default Contact;

const ContactContainer = styled.div`
  min-height: 100vh;
  background-image: url(./assets/images/contact_bg.svg);
  background-size: cover;
  @media screen and (min-width: 992px) {
    width: 75%;
  }
  @media screen and (min-width: 1200px) {
    width: 82.5%;
  }
`;

const Wrapper = styled.div`
  height: 100%;
`;

const FormContainer = styled.div``;

const FormTitle = styled.h3`
  text-align: center;
  font-size: 200%;
  margin: 0;
  font-family: "Chivo Mono", monospace;
  text-shadow: 1px 2px 4px rgba(37, 150, 190, 0.6),
    1px 2px 4px rgba(37, 150, 190, 0.6), 1px 2px 4px rgba(37, 150, 190, 0.6),
    1px 2px 4px rgba(37, 150, 190, 0.6);
`;

const ContactForm = styled.form`
  font-family: "Chivo Mono", monospace;
  position: relative;
  background-color: #00a19c36;
  padding: 15px;
  border-radius: 20px;
  .formGroup {
    position: relative;
    padding: 15px 0 0;
    margin-top: 10px;
    width: 100%;
    .formLabel {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
      color: gray;
    }
    .formField {
      font-family: inherit;
      width: 100%;
      border: 0;
      border-bottom: 2px solid #00fff7;
      outline: 0;
      font-size: 1.3rem;
      color: #fff;
      padding: 7px 0;
      background: transparent;
      transition: border-color 0.2s;

      &:required,
      &:invalid {
        box-shadow: none;
      }
      &:focus {
        ~ .form__label {
          position: absolute;
          top: 0;
          display: block;
          transition: 0.2s;
          font-size: 1rem;
        }
        padding-bottom: 6px;
        border-width: 3px;
        border-image: linear-gradient(to right, #03fff7, #ffd000);
        border-image-slice: 1;
      }
      &::placeholder {
        color: transparent;
      }
      &:placeholder-shown ~ .formLabel {
        font-size: 1.3rem;
        cursor: text;
        top: 20px;
      }
    }
  }
  button {
    width: fit-content;
    margin: auto;
    display: inline-block;
    padding: 8px 25px;
    border: 0.5px solid #007773;
    border-radius: 15px;
    transition: all 0.2s ease-in;
    position: relative;
    overflow: hidden;
    font-size: 19px;
    color: white;
    z-index: 1;
    background-color: #007773;
    box-shadow: 2px 2px 5px rgba(37, 150, 190, 0.6),
      -2px -2px 5px rgba(37, 150, 190, 0.6);
    &::before {
      content: "";
      position: absolute;
      left: 50%;
      transform: translateX(-50%) scaleY(1) scaleX(1.25);
      top: 100%;
      width: 140%;
      height: 180%;
      background-color: rgba(0, 0, 0, 0.05);
      border-radius: 50%;
      display: block;
      transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
      z-index: -1;
    }
    &::after {
      content: "";
      position: absolute;
      left: 55%;
      transform: translateX(-50%) scaleY(1) scaleX(1.45);
      top: 180%;
      width: 160%;
      height: 190%;
      background-color: #004543;
      border-radius: 50%;
      display: block;
      transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
      z-index: -1;
    }
    &:hover {
      color: #ffffff;
      border: 1px solid #39bda7;
    }
    &:hover:before {
      top: -35%;
      background-color: #004e41;
      transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
    }
    &:hover:after {
      top: -45%;
      background-color: #004e41;
      transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
    }
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 5px;
`;
