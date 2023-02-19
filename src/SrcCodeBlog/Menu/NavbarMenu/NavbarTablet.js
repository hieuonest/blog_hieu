import React from "react";
import styled from "styled-components";

export default function NavbarTablet({ isHiddenMenu, setIsHiddenMenu }) {
  return (
    <Div>
      <div onClick={() => setIsHiddenMenu(!isHiddenMenu)}>
        {isHiddenMenu ? (
          <i class="fa fa-align-justify" aria-hidden />
        ) : (
          <i className="fa fa-times" aria-hidden />
        )}
      </div>
    </Div>
  );
}

const Div = styled.div`
  position: fixed;
  z-index: 9;
  cursor: pointer;
  top: 30px;
  right: 30px;
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: #243e56;
  i {
    font-size: 22px;
    display: flex;
    justify-content: center;
    line-height: 50px;
  }
  &:hover {
    background-color: #9e9ef1;
    transition: 0.3s ease-in-out;
  }
`;
