import React, { useState } from "react";
import styled from "styled-components";
import Title from "../components/Title";
import SliderBlogs from "./SliderBlogs";
import Modals from "./Modals";

const DEFAULT_MODAL = { show: false, slug: "" };
export default function Blogs() {
  const [showModal, setShowModal] = useState(DEFAULT_MODAL);

  const handleShowModal = (data) => {
    setShowModal({ show: true, slug: data });
  };

  return (
    <ContainerBlogs>
      <Title content="Blogs" id="blogs" />
      <div className="container-slider">
        <SliderBlogs handleShowModal={handleShowModal} />
      </div>
      <Modals
        show={showModal}
        handleClose={() => setShowModal(DEFAULT_MODAL)}
      />
    </ContainerBlogs>
  );
}

const ContainerBlogs = styled.div`
  margin: 3rem;
  margin-bottom: 0;
  padding-bottom: 0;
  .container-slider {
    background: "#ccc";
    height: 400px;
  }
  @media (max-width: 577px) {
    margin-left: 1rem;
    margin-right: 1rem;
    .container-slider {
      height: auto;
    }
  }
  @media screen and (max-width: 769px) and (min-width: 577px) {
    .container-slider {
      height: auto;
    }
  }
`;
