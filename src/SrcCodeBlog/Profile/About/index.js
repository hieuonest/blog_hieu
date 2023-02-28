import React from "react";
import styled from "styled-components";
import { information } from "../../Data/const";
import Title from "../components/Title";

const personalInformation = [
  {
    infor: "Birthday",
    detail: "24/04/1999",
    icon: "fa-birthday-cake",
  },
  {
    infor: "City",
    detail: "Ha Noi, Viet Nam",
    icon: "fa fa-contao",
  },
  {
    infor: "Email",
    detail: "hanviethieu1999@gmail.com",
    icon: "fa-envelope-o",
  },
];
export default function About() {
  return (
    <ContainerAbout>
      <Title content={"About"} id="about" />
      <div>
        <p>
          Xin chào, tôi là Hiếu! Đây là nơi tôi ghi lại những kiến thức hay đôi
          khi là những chia sẻ trong quá trình làm việc, học tập những năm ở vị
          trí lập trình viên (Software engineer).
        </p>
        <div className="row">
          <div className="col-lg-5 col-md-6 col-sm-5 col-12 pr-0 container-avatar">
            <img
              src="/img/img.jpg"
              alt="img-avatar"
              width="300px"
              className="img-avatar"
            />
          </div>
          <div className="col-lg-7 col-md-6 col-sm-7 col-12 pr-0">
            <h3 className="">Front-end Developer</h3>
            <hr />
            <ul>
              {personalInformation.map((item, index) => (
                <li key={index}>
                  <i className={`fa ${item.icon} aria-hidden`}></i> {item.infor}
                  :<span>{item.detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </ContainerAbout>
  );
}

const ContainerAbout = styled.div`
  /* padding: 60px 0; */
  margin: 3rem;
  .img-avatar,
  .container-avatar {
    border-radius: 8px;
    text-align: center;
    overflow: hidden;
  }
  h3 {
    font-size: 1.75rem;
  }
  ul {
    margin: 0;

    li {
      line-height: 50px;
      color: #222222;
      span {
        padding-left: 10px;
        color: #149ddd;
      }
    }
    i {
      padding-right: 15px;
      color: #444444;
    }
  }
  @media (max-width: 560px) {
    margin-bottom: 0;
    margin-left: 1rem;
    margin-right: 1rem;
    overflow: hidden;
    .img-avatar {
      width: 100%;
    }
    h3 {
      padding-top: 1rem;
    }
    ul {
      padding-left: 1rem;
      li {
        line-height: 30px;
        display: flex;
        align-items: center;
      }
    }
  }
  @media screen and (max-width: 769px) and (min-width: 577px) {
    .img-avatar {
      width: 200px;
    }
    h3 {
      font-size: 1.25rem;
    }
    ul {
      li {
        line-height: 40px;
        display: flex;
        align-items: center;
      }
    }
  }
`;
