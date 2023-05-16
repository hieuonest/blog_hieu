import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import "./Location.css";

const BANNER_HEADER = [
  { srcImg: "/img/icon-facebook.jpg", alt: "icon-face" },
  { srcImg: "/img/crown.png", alt: "img-crown" },
  { srcImg: "/img/img_H.png", alt: "img-fiverr" },
  { srcImg: "/img/glassesimoji.png", alt: "img-glassesimoji" },
  { srcImg: "/img/thumbup.png", alt: "img-thumbup" },
];
export default function Location() {
  return (
    <ContainerHome className="overflow-hidden" id="home">
      <div className="Intro" id="Intro">
        <div className="i-left">
          <div className="i-name">
            <span className="hello">Hy! I Am</span>
            <span className="full-name">HAN VIET HIEU</span>
            <span className="title">
              Web Developer with high level of experience in web designing and
              development, producting the Quality work
            </span>
          </div>
        </div>
        <div className="i-right">
          <div className="w-right">
            <motion.div
              initial={{ rotate: 45 }}
              whileInView={{ rotate: 0 }}
              viewport={{ margin: "-40px" }}
              transition={{ duration: 3.5, type: "spring" }}
              className="w-mainCircle"
            >
              {BANNER_HEADER.map((item, index) => (
                <div className="w-secCircle" key={`banner_${index}`}>
                  <img src={item.srcImg} alt={item.alt} width="120px" />
                </div>
              ))}
            </motion.div>
            <div className="w-backCircle blueCircle" />
            <div className="w-backCircle yellowCircle" />
          </div>
        </div>
      </div>
    </ContainerHome>
  );
}
const ContainerHome = styled.div`
  padding: 3rem;
  position: relative;
  width: 100%;
  min-height: 300px;
  margin: auto;
  background: linear-gradient(-45deg, #ffffff, #ffff99, #e8e8e8, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  .title {
    font-size: 18px;
  }
  .container {
    position: absolute;
    text-align: center;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .fullName {
    font-size: 48px;
  }
  .title {
    font-size: 20px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
  .full-name,
  .hello {
    font-size: 3rem;
  }

  @media (max-width: 769px) {
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0;
    .Intro {
      padding-top: 1rem;
    }
    .full-name,
    .hello {
      font-size: 2rem;
    }
    .title {
      font-size: 18px;
    }
  }

  @media screen and (min-width: 577px) and (max-width: 769px) {
    padding: 3rem;
    .full-name,
    .hello {
      font-size: 3rem;
    }
    .i-right {
      top: -70px;
    }
  }

  @media screen and (max-width: 993px) and (min-width: 769px) {
    .i-right {
      scale: 0.8;
    }
  }
`;
