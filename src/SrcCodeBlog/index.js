import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import Profile from "./Profile";
import NavbarTablet from "./Menu/NavbarMenu/NavbarTablet";
import ScroolTop from "./ScroolTop";
import Footer from "./Footer";

const CAREER_PART_SHOW = 10;
export default function SrcCodeBlog() {
  const refScreen = useRef(null);
  const [isHiddenMenu, setIsHiddenMenu] = useState(true);
  const [mode, setMode] = useState(false);

  const handleScroll = () => {
    const distanceAbove = document.documentElement?.scrollTop;
    const distanceToTop =
      (distanceAbove / refScreen?.current?.offsetHeight) * 100;
    const containerItem = document.getElementById("container-scroll-top");
    distanceToTop > CAREER_PART_SHOW
      ? containerItem.classList.add("show-screen-widget")
      : containerItem.classList.remove("show-screen-widget");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [refScreen]);

  return (
    <Container
      className={`container__blog ${mode ? "bg-black dark-mode" : "bg-white"}`}
      mode={mode}
      ref={refScreen}
    >
      <div className={isHiddenMenu && "blog__main"}>
        <div>
          <NavbarTablet
            isHiddenMenu={isHiddenMenu}
            setIsHiddenMenu={setIsHiddenMenu}
          />
        </div>
        <div className="sidebar">
          <Menu
            setIsHiddenMenu={setIsHiddenMenu}
            setMode={setMode}
            mode={mode}
          />
        </div>
        <div className="profile">
          <Profile />
          <Footer />
        </div>
      </div>
      <div id="container-scroll-top" className="hidden-screen-widget">
        <ScroolTop />
      </div>
    </Container>
  );
}

const Container = styled.div`
  .show-screen-widget {
    display: block !important;
  }

  .hidden-screen-widget {
    display: none;
  }

  .sidebar {
    width: 200px;
    position: fixed;
    left: 0;
    top: 0;
    overflow: hidden;
    height: 100%;
    background: var(--darkBlue);
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
