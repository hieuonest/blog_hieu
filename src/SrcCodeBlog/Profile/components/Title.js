import React from "react";
import styled from "styled-components";

export default function Title({ content = "", id = "" }) {
  return (
    <TitleHeader id={id} className="title-blog">
      {content}
    </TitleHeader>
  );
}

const TitleHeader = styled.div`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
  position: relative;
  width: max-content;
  color: #173b6c;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 5px;
    background: #149ddd;
    bottom: 0;
    left: 0;
    border-radius: 50%;
  }
`;
