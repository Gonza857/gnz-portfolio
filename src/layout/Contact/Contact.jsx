import React, { useState, useRef } from "react";
import styled from "styled-components";
import { AiOutlineSend } from "react-icons/ai";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Ring } from "@uiball/loaders";

import ReCAPTCHA from "react-google-recaptcha";
import MainBtn from "../../components/Button/MainBtn";

function Contact() {
  const captcha = useRef(null);
  const form = useRef();

  const [isSending, setIsSending] = useState(false);
  const [validCaptcha, setValidCaptcha] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const notifySuccess = () => {
    toast.success("Correo electrónico enviado correctamente!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const notifyError = (errorText) => {
    toast.error(
      `Oops! Ocurrio un error. Inténtalo de nuevo más tarde. ${errorText}`,
      {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      }
    );
  };

  const notifyWarning = () => {
    toast.info("Debes completar el Captcha", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const onChange = () => {
    if (captcha.current.getValue()) {
      setValidCaptcha(true);
    } else {
      setValidCaptcha(false);
    }
  };
  const onSubmit = () => {
    setIsSending(true);
    if (captcha.current.getValue()) {
      console.log("envio con captcha valido");
      emailjs
        .sendForm(
          "service_f6kumxu",
          "template_fkqb4th",
          form.current,
          "hngfXkj4dqbpXlBAg"
        )
        .then(
          (result) => {
            notifySuccess();
            reset();
            setIsSending(false);
          },
          (error) => {
            notifyError(error.text);
          }
        );
    } else {
      notifyWarning();
      setIsSending(false);
    }
  };

  return (
    <ContactContainer className="col-12 col-lg-10">
      <ToastContainer />
      <Wrapper className="col-12 col-lg-10">
        <FormContainer className="col-10 col-sm-8 col-md-6 gap-3">
          <FormTitle>Contacto</FormTitle>
          <ContactForm
            ref={form}
            className="gap-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="d-flex flex-column formGroup">
              <input
                name="email"
                type="email"
                placeholder="Ingresa tu e-mail"
                className="formField"
                {...register("email")}
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
                {...register("mensaje", {
                  required: "Escribe tu mensaje",
                })}
              />
              <label htmlFor="mensaje" className="formLabel">
                Mensaje
              </label>
              {errors.mensaje && (
                <small className="text-danger col-12">
                  {errors.mensaje.message}
                </small>
              )}
            </div>

            <CaptchaContainer>
              <ReCAPTCHA
                ref={captcha}
                sitekey="6LfOnO0jAAAAAMX0QVYKuEqk67OfYstCILmhDbKv"
                onChange={onChange}
                theme={"dark"}
                size={window.screen.width < 992 ? "compact" : "normal"}
                style={{
                  margin: `${window.screen.width < 992 ? "unset" : "auto"}`,
                }}
              />
            </CaptchaContainer>
            {!isSending ? (
              <MainBtn type="secondary">
                Enviar
                <AiOutlineSend />
              </MainBtn>
            ) : (
              <SendBtnContainer>
                <MainBtn
                  mode="submit"
                  modStyle={{ pointerEvents: "none", cursor: "not-allowed" }}
                >
                  <Ring size={40} lineWeight={5} speed={2} color="#ffffff" />
                </MainBtn>
              </SendBtnContainer>
            )}
          </ContactForm>
        </FormContainer>
      </Wrapper>
    </ContactContainer>
  );
}

export default Contact;

const SendBtnContainer = styled.div`
  width: fit-content;
  margin: auto;
`;

const CaptchaContainer = styled.div`
  width: fit-content;
  margin: auto;
`;

const ContactContainer = styled.div`
  min-height: 100vh;
  background: rgb(0, 161, 155);
  background: radial-gradient(
    circle,
    rgba(0, 161, 155, 1) 0%,
    rgba(0, 44, 42, 1) 0%,
    rgba(0, 83, 80, 1) 50%,
    rgba(0, 44, 42, 1) 100%,
    rgba(0, 161, 155, 1) 100%
  );
  @media screen and (min-width: 1200px) {
    width: 85%;
    margin-left: 15%;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  padding-top: 20px;
  margin: auto;
  display: grid;
  align-content: flex-start;
  padding-top: 50px;
  @media screen and (min-width: 600px) {
    padding: unset;
    align-content: unset;
  }
`;

const FormContainer = styled.div`
  height: fit-content;
  margin: auto;
  color: #fff;
  display: flex;
  flex-direction: column;
`;

const FormTitle = styled.h3`
  text-align: center;
  font-size: 200%;
  margin: 0;
  margin-bottom: 20px;
  font-family: "Chivo Mono", monospace;
  text-shadow: 1px 2px 4px rgba(37, 150, 190, 0.6),
    1px 2px 4px rgba(37, 150, 190, 0.6), 1px 2px 4px rgba(37, 150, 190, 0.6),
    1px 2px 4px rgba(37, 150, 190, 0.6);
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  font-family: "Chivo Mono", monospace;
  position: relative;
  background-color: #00000036;
  padding: 15px;
  border-radius: 20px;
  box-shadow: -1px 0px 46px 12px rgba(0, 161, 155, 0.75);
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
      border-bottom: 2px solid #ff0000;
      outline: 0;
      font-size: 1rem;
      color: #fff;
      padding: 7px 0;
      background: transparent;
      transition: border-color 0.2s;

      @media screen and (min-width: 600px) {
        font-size: 1.3rem;
      }

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
        border-image: linear-gradient(to right, #03fff7, #ff0000);
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
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 5px;
  @media screen and (min-width: 600px) {
    height: 200px;
  }
`;
