import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

function EducationCard({ data }) {
  return (
    <CardContainer
      className="col-12 gap-3"
      initial={{ x: 500, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <CardImage className="col-2">
        <img
          src={data.localImg}
          alt={data.altImg}
          style={{
            borderRadius: `${data.roundedImg ? "50%" : "10%"}`,
            backgroundColor: `${data.bgWhite ? "#fff" : "unset"}`,
          }}
        />
      </CardImage>
      <CardInfo className="d-flex flex-column justify-content-center">
        <CardTitle>{data.cardTitle}</CardTitle>
        <p>{data.instituto}</p>
        <p>{data.description1}</p>
        <p>{data.finishDate}</p>
      </CardInfo>
    </CardContainer>
  );
}

export default EducationCard;

const CardContainer = styled(motion.div)`
  display: flex;
  min-width: 300px;
  @media screen and (max-width: 992px) {
    border-top: 1px dashed #00a19b;
    padding: 10px 0;
  }
  @media screen and (min-width: 992px) {
    padding: 5px 0;
  }
`;

const CardImage = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;
  width: 20%;
  img {
    width: 60px;
    height: 60px;
    object-fit: contain;
    @media screen and (min-width: 992px) {
      width: 60px;
      height: 60px;
    }
  }
`;

const CardInfo = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    margin: 0;
    font-family: "Chivo Mono", monospace;
    @media screen and (max-width: 400px) {
      font-size: 0.8rem;
    }
    @media screen and (min-width: 400px) {
      font-size: 0.8rem;
    }
    @media screen and (min-width: 992px) {
      font-size: 0.7rem;
    }
    @media screen and (min-width: 1100px) {
      font-size: 0.8rem;
    }
    @media screen and (min-width: 1200px) {
      font-size: 0.9rem;
    }
    @media screen and (min-width: 1400px) {
      font-size: 1rem;
    }
  }
`;

const CardTitle = styled.div`
  font-family: "Chivo Mono", monospace;
  font-size: 18px;
  text-shadow: 1px 2px 4px rgba(37, 150, 190, 0.6),
    1px 2px 4px rgba(37, 150, 190, 0.6), 1px 2px 4px rgba(37, 150, 190, 0.6);
`;
