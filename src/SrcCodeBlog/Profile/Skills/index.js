import React from "react";
import styled from "styled-components";
import Title from "../components/Title";

const dataSkills = [
  {
    img: "fa fa-object-group",
    title: "Font-end",
    knowledgeDetail:
      "Javascript, Reactjs, Bootstrap, Jquery, Angular, Nextjs, Bootstrap, Antd, Material-UI, Html, Scss, Sass...",
  },
  {
    img: "fa fa-object-group",
    title: "Back-end (Basic)",
    knowledgeDetail:
      "Express, Nodejs ,SQL, MySql, Oracle, Redis, Sequelize, Socket",
  },
  {
    img: "fa fa-object-group",
    title: "Office Computing",
    knowledgeDetail: "Word, Access, Powerpoint",
  },
  {
    img: "fa fa-graduation-cap",
    title: "Kiến thức khác",
    knowledgeDetail:
      "Oop, Java-core(oop), Php, Github, Gitlab, Bitbucket, React native, Figma, Photoshop,...",
  },
];

const knowledge = [
  [
    { title: "HTML", learned: "100" },
    { title: "CSS", learned: "90" },
    { title: "JS", learned: "90" },
  ],
  [
    { title: "REACTJS", learned: "80" },
    { title: "ANGULAR", learned: "80" },
    { title: "NEXTJS", learned: "60" },
  ],
];
export default function Skills() {
  return (
    <ContainerSkill>
      <Title content="Skills" id="skills" />
      <div>
        <P className="pb-1">
          Tôi đã có hơn 3,5 năm kinh nghiệm trong vị trí Web Developer. Tôi có
          thể làm việc với các ngôn ngữ như như:{" "}
          <strong>
            Reactjs, Nextjs, Angular, Vuejs, Jquery, Express, Mysql...
          </strong>
        </P>
        <div className="row">
          {dataSkills.map((item, index) => (
            <div
              className="col-6 col-md-6 col-lg-6 col-xl-3 detail__skills"
              key={index}
            >
              <div className="skill">
                <i className={item.img} aria-hidden />
                <p className="pb-0">
                  <strong>{item.title}</strong>
                </p>
                <p className="knowledge pb-0">{item.knowledgeDetail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="row">
        {knowledge.map((knowledges, index) => (
          <div
            key={index}
            className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6"
          >
            {knowledges.map((item, index) => (
              <div key={`_${index}`}>
                <p className="language">
                  <strong>{item.title}</strong>
                </p>
                <ContainerProgressbar
                  learned={item.learned}
                  className="container__progressbar"
                >
                  <div className="progressbar">{item.learned}%</div>
                </ContainerProgressbar>
              </div>
            ))}
          </div>
        ))}
      </div>
    </ContainerSkill>
  );
}

const P = styled.p`
  color: #333;
  font-size: 1em;
`;

const ContainerSkill = styled.div`
  margin: 3rem;
  margin-bottom: 0;
  i {
    color: green;
  }

  .knowledge {
    margin-bottom: 0;
    padding-bottom: 0;
  }

  .detail__skills {
    height: inherit;
    .skill {
      box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 10px;
      border-radius: 10px;
      padding: 10px;
      padding-top: 10px;
      line-height: 30px;
      height: 100%;
    }
  }
  .language {
    padding-top: 20px;
  }

  @media (max-width: 992px) {
    .detail__skills {
      margin: 10px 0;
    }

    .row .detail__skills:nth-child(1),
    .row .detail__skills:nth-child(2) {
      margin-top: 0;
    }
  }

  @media screen and (max-width: 768px) and (min-width: 576px) {
    margin: 1rem;
  }

  @media (max-width: 576px) {
    margin-left: 1rem;
    margin-right: 1rem;
    .language {
      padding-top: 15px;
      margin-bottom: 0px;
    }

    .knowledge {
      font-size: 13px;
    }
  }
`;

const ContainerProgressbar = styled.div`
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  background-color: #ccc;
  .progressbar {
    width: ${(props) => props.learned}%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    background-color: #0d6efd;
    transition: width 0.6s ease;
  }
`;
