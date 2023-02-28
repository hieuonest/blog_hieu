import React from "react";
import styled from "styled-components";
import { information } from "../../Data/const";

export default function Profile() {
  const handleRouter = () => {
    window.open(information.fakeBook);
  };

  return (
    <Container>
      <img
        className="profile__avt"
        src={information.avatar}
        alt="ảnh đại diện"
      />
      <h1 className="profile__fullName">
        {information.fullName}{" "}
        <i
          className="fa fa-facebook-square"
          aria-hidden
          onClick={handleRouter}
        />
      </h1>
    </Container>
  );
}

const Container = styled.div`
  .profile__avt {
    margin: 15px auto;
    display: block;
    width: 100px;
    border: 8px solid #2c2f3f;
    border-radius: 15%;
    height: auto;
  }
  .profile__fullName {
    font-size: 24px;
    margin: 0;
    padding: 0;
    font-weight: 600;
    text-align: center;
    color: white;
    i {
      cursor: pointer;
      &:hover {
        opacity: 0.8;
        transition: 0.3s ease-in-out;
      }
    }
  }
`;
