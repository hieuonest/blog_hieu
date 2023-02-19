import React, { useState, useRef } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import Profile from "./Profile";
import NavbarTablet from "./Menu/NavbarMenu/NavbarTablet";

export default function SrcCodeBlog() {
  const refScreen = useRef(null);
  const [isHiddenMenu, setIsHiddenMenu] = useState(true);
  const A = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Container className="container__blog" ref={refScreen}>
      <div className={isHiddenMenu && "blog__main"}>
        <div>
          <NavbarTablet
            isHiddenMenu={isHiddenMenu}
            setIsHiddenMenu={setIsHiddenMenu}
          />
        </div>
        <div className="sidebar sidebar-">
          <Menu setIsHiddenMenu={setIsHiddenMenu} />
        </div>
        <div className="profile">
          <Profile />
        </div>
      </div>
      <button
        style={{
          marginTop: "100px",
          zIndex: "999",
          color: "red",
          textAlign: "center",
          width: "100vw",
        }}
        onClick={A}
      >
        nanananananan
      </button>
    </Container>
  );
}

const Container = styled.div`
  .sidebar {
    width: 200px;
    position: fixed;
    left: 0;
    top: 0;
    overflow: hidden;
    height: 100%;
    background: #243e56;
    color: #ffffffb3;
    z-index: 9;
  }

  .profile {
    padding-left: 200px;
  }

  @media (max-width: 992px) {
    .blog__main {
      .sidebar {
        display: none;
      }
    }
    .profile {
      padding-left: 0;
    }
  }
`;
