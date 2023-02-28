import React from "react";
import styled from "styled-components";

export default function NavbarTablet({ isHiddenMenu, setIsHiddenMenu }) {
  return (
    <ContainerNavbarTablet>
      <div onClick={() => setIsHiddenMenu(!isHiddenMenu)}>
        {isHiddenMenu ? (
          <i className="fa fa-align-justify" aria-hidden />
        ) : (
          <i className="fa fa-times" aria-hidden />
        )}
      </div>
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

  @media (max-width: 577px) {
    top: 15px;
    right: 15px;
    width: 40px;
    height: 40px;

    i {
      font-size: 18px;
      line-height: 40px;
    }
  }

  @media (min-width: 993px) {
    display: none;
  }
`;
