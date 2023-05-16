import React from "react";
import styled from "styled-components";
import Title from "../components/Title";

export default function Resume() {
  return (
    <ContainerResume>
      <Title content="Resume" id="resume" />
      <div className="row px-0">
        <div className="col-12 col-md-6">
          <div className="resume__detail">
            <h3>Sumary</h3>
            <h4>Hán Việt Hiếu</h4>
            <p>
              Tôi có hơn 1 năm kinh nghiệm trong vị trí Web Developer. Ngoài
              công việc chuyên môn tôi có niềm đam mê với Guitar, Game, Đá bóng.
            </p>
            <ul>
              <li>Ha Noi, Viet Nam</li>
              <li>hanviethieu1999@gmail.com</li>
            </ul>
          </div>
          <div className="resume__detail">
            <h3>Education</h3>
            <h4>Đại học Đông Đô</h4>
            <p className="working-time">10/2017 - 04/2022</p>
            <ul>
              <li>Chuyên ngành: Công nghệ thông tin</li>
              <li>Tốt nghiệp loại khá: 2.61/4</li>
            </ul>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="resume__detail">
            <h3>Professional Experience</h3>
            <h4>JUST-IN-TIME SOLUTIONS</h4>
            <p className="font-italic">Thực tập sinh</p>
            <p className="working-time">10/2020 - 04/2021</p>
            <ul>
              <li>
                Nghiên cứu và ứng dụng công nghệ đã học áp dụng xây các
                components cho hệ thống ngân hàng
              </li>
              <li>
                Công nghệ sử dụng chủ yếu: HTML, CSS, JAVASCRIP, REACTJS...
              </li>
              <li>
                Website phát triển:{" "}
                <a href="https://jits.com.vn/" target="_blank">
                  jits.com.vn/
                </a>
              </li>
            </ul>
          </div>
          <div className="resume__detail">
            <h4>Monkey - Dự án Hoc10.vn</h4>
            <p className="font-italic">Lập trình viên</p>
            <p className="working-time">06/2021 - 01/2023</p>
            <ul>
              <li>Phát triển tính năng và vận hành hệ thống cho dự án Hoc10</li>
              <li>
                Cùng team đưa ra những giải pháp giải quyết các vấn đề người
                dùng theo mô hình Agile Scrum
                <ul>
                  <li>Phát triển version 2 của website Hoc10</li>
                  <li>
                    Phát triển tính năng luyện tập, luyện thi cho học sinh
                  </li>
                  <li>
                    Phát triển tính năng tập huấn, upload và chia sẻ slide bài
                    giảng cho giáo viên
                  </li>
                  <li>
                    Phát triển tính năng báo cáo chi tiết sách, game, luyện tập,
                    luyện thi, ngân hàng câu hỏi
                  </li>
                  <li>
                    Phát triển tính năng báo lỗi trên sách, bài luyện tập, bài
                    luyện thi, tập huấn
                  </li>
                  <li>
                    Phát triển phần Blog, checking hành vi người dùng bằng
                    GOOGLE-TAG-MANAGER
                  </li>
                </ul>
              </li>
              <li>Maintain fix bug hệ thống</li>
              <li>Làm event trao quà cho giáo viên nhân ngày 20-11</li>
              <li>
                Làm game tương tác như (multiple choice, word finding, game
                SROI...)
              </li>
              <li>
                Giải nhì cuộc thi sáng tạo công nghệ <strong>We Share</strong>{" "}
                do Monkey tổ chức
                <ul>
                  <li>
                    Lên ý tưởng cùng team, tìm hiểu công nghệ sử dụng, trực tiếp
                    xây dựng và phát triển game nối, đoán từ, chọn đáp án đúng.
                    Dùng công nghệ real-time (Server Sent Events vs WebSockets)
                    để tạo cuộc thi cho học sinh.
                  </li>
                </ul>
              </li>
              <li>
                Website phát triển:{" "}
                <span>
                  <a href="https://hoc10.vn/" target="_blank">
                    Hoc10.vn/
                  </a>
                </span>
              </li>
            </ul>
          </div>
          <div className="resume__detail">
            <h4>Monkey - Dự án Tutoring</h4>
            <p className="font-italic">Lập trình viên</p>
            <p className="working-time">01/2023 - 03/2023</p>
            <ul>
              <li>Phát triển mới tính năng cho dự án Tutoring</li>
              <li>
                Tạo website mới giúp giáo viên giảng dạy trực tiếp trên website
              </li>
              <li>Làm luồng đăng ký, đăng nhập</li>
              <li>Giáo viên có thể thêm sửa xóa học sinh trong lớp...</li>
              <li>Website đang trong quá trình phát triển</li>
            </ul>
          </div>
          <div className="resume__detail">
            <h4>Monkey - Dự án King-Of-Bet</h4>
            <p className="font-italic">Lập trình viên</p>
            <p className="working-time">04/2023 - Now</p>
            <ul>
              <li>Tạo ra một website về bóng đá</li>
              <li>Web có tri tiết các trận đá bóng</li>
              <li>Người dùng có thể trọn kèo để đặt cược</li>
              <li>Build website từ đầu (config redux thunk, axios, env...)</li>
              <li>Cắt ghép giao diện từ Fixma</li>
              <li>Website đang trong quá trình phát triển</li>
            </ul>
          </div>
        </div>
      </div>
    </ContainerResume>
  );
}

const ContainerResume = styled.div`
  margin: 3rem;
  li {
    list-style: square !important;
  }
  .resume__detail {
    padding-left: 15px;
    border-left: 2px solid #0d6efd;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      width: 16px;
      height: 16px;
      border-radius: 50px;
      left: -9px;
      top: 0;
      background: #fff;
      border: 2px solid #1f5297;
    }
  }
  .working-time {
    background-color: #9e9ef1;
    font-style: italic;
    width: max-content;
    padding-left: 5px;
    padding-right: 5px;
    font-size: 12px;
  }
  @media (max-width: 577px) {
    margin-left: 1rem;
    margin-right: 1rem;
    margin-bottom: 0;
  }
`;
