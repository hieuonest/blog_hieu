import React from "react";
import styled from "styled-components";

export default function NavbarTablet({ isHiddenMenu, setIsHiddenMenu }) {
  return (
    <ContainerNavbarTablet onClick={() => setIsHiddenMenu(!isHiddenMenu)}>
      {isHiddenMenu ? (
        <i className="fa fa-align-justify" aria-hidden />
      ) : (
        <i className="fa fa-times" aria-hidden />
      )}
    </ContainerNavbarTablet>
  );
}

const ContainerNavbarTablet = styled.div`
  position: fixed;
  z-index: 9;
  cursor: pointer;
  top: 20px;
  right: 20px;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background-color: #243e56;
  justify-content: center;
  align-items: center;
  display: flex;

  i {
    font-size: 18px;
    display: flex;
    justify-content: center;
    line-height: 50px;
  }
  @media (min-width: 992px) {
    &:hover {
      background-color: #9e9ef1;
      transition: 0.3s ease-in-out;
    }
  }

  @media (max-width: 576px) {
    top: 15px;
    right: 15px;
    width: 40px;
    height: 40px;

    i {
      font-size: 18px;
      line-height: 40px;
    }
  }

  @media (min-width: 992px) {
    display: none;
  }
`;
