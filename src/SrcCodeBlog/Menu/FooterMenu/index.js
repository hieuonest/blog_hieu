import React from "react";
import styled from "styled-components";

export default function FooterMenu() {
  return (
    <Div>
      <p className="container__footer">© Copyright HanHieu 2023</p>
    </Div>
  );
}

const Div = styled.div`
  margin: 0 auto;
  font-size: 13px;
  line-height: 20px;
  font-style: italic;
  text-align: center;
  justify-content: center;
  display: flex;
  .container__footer {
    position: absolute;
    bottom: 5%;
    width: 70%;
  }
`;
