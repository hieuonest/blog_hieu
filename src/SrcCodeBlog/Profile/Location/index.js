import React from "react";
import styled from "styled-components";

const fullName = {
  name: "HanVietHieu",
  desc: "Hello world! I'm Front-end Developer...",
};
export default function Location() {
  const splitFullName = fullName.name.split("");
  return (
    <Div id="home">
      <div className="container">
        <h2 className="fullName">
          {splitFullName.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </h2>
        <p className="title">Hello world! I'm Front-end Developer...</p>
      </div>
    </Div>
  );
}
const Div = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  margin: auto;
  background: linear-gradient(-45deg, #ee7752, #99cc66, #23a6d5, #23d5ab);
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
`;
