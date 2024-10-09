import React from "react";
import styled from "styled-components";
import Title from "../components/Title";

const dataWorking = [
  {
    logoCompany: "/img/cty-jits.jpg",
    location: "Thực tập sinh",
    companyName: "JUST-IN-TIME SOLUTIONS (jits)",
    workingTime: "10/2020 - 04/2021",
  },
  {
    logoCompany:
      "https://static.topcv.vn/company_logos/psMPv0ZZb1sUc3hhsagvRqgOCH9gTQ43_1633421799____d70425d87c547f71d6df274b8a328f62.png",
    location: "Front-end Developer",
    companyName: "Early Start ( Monkey )",
    workingTime: "06/2021 - 03/2023",
  },
  {
    logoCompany: "/img/logo-arabica.svg",
    location: "Web Developer",
    companyName: "Arabica Tech",
    workingTime: "04/2023 - Now",
  },
];
export default function Experience() {
  return (
    <Working>
      <Title content="Experience" id="experience" />
      <div className="row">
        {dataWorking.map((item, index) => (
          <div
            key={index}
            className="col-12 col-lg-6 col-md-6 col-sm-12 col-xl-4 d-flex container__working"
          >
            <div className="container__working-detail">
              <img
                src={item.logoCompany}
                alt="logo-cong-ty"
                width="150"
                className="logo-company"
              />
              <ul>
                <li>{item.location}</li>
                <li className="company-name">
                  <strong>{item.companyName}</strong>
                </li>
                <li className="working-time">{item.workingTime}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Working>
  );
}

const Working = styled.div`
  padding: 3rem;
  .container__working,
  .container__working-detail {
    align-items: center;
  }

  .container__working-detail {
    display: flex;
  }

  @media screen and (min-width: 992px) and (max-width: 1200px) {
    .row .container__working:last-child {
      margin-top: 20px;
    }
  }

  ul {
    line-height: 30px;
    margin-bottom: 0;
    li {
      line-height: 1;
    }

    .company-name {
      padding: 12px 0;
    }

    .working-time {
      background-color: rgb(102 102 195);
      font-style: italic;
      width: max-content;
      font-size: 12px;
      border-radius: 8px;
      color: white;
      padding: 8px 12px;
    }
  }

  @media (max-width: 1600px) {
    .container__working-detail {
      box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 10px;
      border-radius: 10px;
      padding: 10px;
      padding-top: 10px;
      line-height: 30px;
      width: 100%;
      height: 100%;
    }
  }

  @media (max-width: 992px) {
    .row .container__working:last-child {
      margin-top: 20px;
    }
  }

  @media screen and (max-width: 768px) and (min-width: 576px) {
    padding: 1rem;
    .row .container__working:not(:first-child) {
      margin-top: 20px;
    }
  }
  @media (max-width: 576px) {
    padding-bottom: 0;
    padding-left: 1rem;
    padding-right: 1rem;
    .container__working-detail {
      div,
      li {
        font-size: 13px;
      }
    }

    .row .container__working:not(:first-child) {
      margin-top: 20px;
    }
    .logo-company {
      width: 100px;
    }
    ul {
      padding-left: 1rem;
      li {
        font-size: 13px;
      }
    }
  }
  /* .container__working:first-child {
    padding-bottom: 20px;
  } */
`;
