import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

function TecnoLogo({ data }) {
  return (
    <LogoImage
      initial={{ x: -500 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      src={data.localImg}
      alt={data.altImg}
      style={data.style}
    />
  );
}

export default TecnoLogo;

const LogoImage = styled(motion.img)`
  width: 65px;
  height: 65px;
  padding: 5px;
  object-fit: contain;
  @media screen and (min-width: 768px) {
    width: 68px;
    height: 68px;
  }
  @media screen and (min-width: 1100px) {
    width: 75px;
    height: 75px;
  }
  @media screen and (min-width: 1200px) {
    width: 80px;
    height: 80px;
  }
  @media screen and (min-width: 1300px) {
    width: 85px;
    height: 85px;
  }
  @media screen and (min-width: 1400px) {
    width: 90px;
    height: 90px;
  }
`;
