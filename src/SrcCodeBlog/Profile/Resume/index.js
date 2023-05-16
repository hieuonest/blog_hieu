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
              '* Mọi sự cố gắng đều được đền đáp sứng đáng. Cố gắng chưa chắc đã
              thành công nhưng không cố gắng chắc chắn sẽ thất bại.'
            </p>
            <ul>
              <li>
                Mong muốn tìm được môi trường làm việc chuyên nghiệp, lâu dài,
                mức lương ổn định + phát triển bản thân
              </li>
              <li>Mục tiêu ngắn hạn là trở thành lập trình viên full stack.</li>
              <li>
                Mục tiêu dài hạn trong vòng 3-5 năm tới có thể trở thành quản lý
                của 1 team.
              </li>
              <li>Kỹ năng làm việc nhóm tốt.</li>
              <li>Hiểu biết về UI/UX, SEO web</li>
              <li>
                Dễ thích nghi môi trường mới, có khả năng làm việc nhóm hoặc làm
                độc lập
              </li>
              <li>Sở thích: Bóng đá, Guitar, Bida...</li>
            </ul>
          </div>
          <div className="resume__detail">
            <h3>Education</h3>
            <h4>Đại học Đông Đô</h4>
            <p className="working-time">10/2017 - 04/2022</p>
            <ul>
              <li>Chuyên ngành: Công nghệ thông tin</li>
              <li>Tốt nghiệp loại: Khá</li>
            </ul>
          </div>
          <div className="resume__detail">
            <h3>Prize</h3>
            <p className="working-time">12/2022</p>
            <ul>
              <li>
                Giải nhì cuộc thi sáng tạo công nghệ <strong>We Share</strong>{" "}
                do "Early Start" tổ chức
                <ul>
                  <li>
                    Lên ý tưởng cùng team, tìm hiểu công nghệ sử dụng, trực tiếp
                    xây dựng và phát triển game nối, đoán từ, chọn đáp án đúng.
                    Dùng công nghệ real-time (WebSockets) để tạo cuộc thi cho
                    học sinh.
                  </li>
                </ul>
              </li>
            </ul>
            <p className="working-time">6/2024</p>
            <ul>
              <li>"Arabica Tech": Nhân viên xuất sắc của quý</li>
            </ul>
          </div>
          <div className="resume__detail">
            <h3>Certificate</h3>
            <h4>Udemy</h4>
            <p className="working-time">03/2021</p>
            <ul>
              <li>Chứng chỉ HTML, CSS, Javascript, Reactjs</li>
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
                Được làm quen với văn hóa, môi trường công ty chuyên nghiệp.
                Tiếp cận và học nghiệp vụ cho hệ thống ngân hàng.
              </li>
              <li>
                Công nghệ sử dụng chủ yếu: HTML, CSS, JAVASCRIP, REACTJS,
                Web-form...
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
            <h4>
              Early Start - Dự án{" "}
              <a href="https://www.hoc10.vn/" target="_blank">
                Hoc10.vn
              </a>
            </h4>
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
                Phát triển Hệ thống quản lý nội dung sách để cấu hình và tải lên
              </li>
              <li>Tạo config game, điểm chạm trong sách</li>
            </ul>
            <p>
              => Công nghệ được sử dụng chủ yếu:{" "}
              <strong>Reactjs + Angular</strong>
            </p>
          </div>
          <div className="resume__detail">
            <h4>
              Early Start - Dự án{" "}
              <a href="https://tutoring.monkey.edu.vn/" target="_blank">
                Tutoring
              </a>
            </h4>
            <p className="font-italic">Lập trình viên</p>
            <p className="working-time">01/2023 - 03/2023</p>
            <ul>
              <li>
                Phân tích và phát triển các tính năng kiểm tra và bài tập cho
                học sinh.
              </li>
              <li>
                Giáo viên có thể quản lý lớp học, tạo bộ bài tập, giao bài tập
                cho học sinh, nhận xét kết quả làm bài của học sinh.
              </li>
              <li>
                Học sinh xem lại các bài tập đã làm và câu trả lời của mình
              </li>
              <li>Tạo ra các game tương tác giữa các bài học...</li>
              <li>Website đang trong quá trình phát triển</li>
              <li>Mục tiêu: Tạo ra một môi trường giảng dạy học online</li>
            </ul>
            <p>
              => Công nghệ được sử dụng chủ yếu:{" "}
              <strong>Nextjs + Angular</strong>
            </p>
          </div>
          <div className="resume__detail">
            <h4>
              Arabica Tech + Viettel - Dự án{" "}
              <a href="https://kingbet.natcom.com.ht/" target="_blank">
                King-Of-Bet
              </a>
            </h4>
            <p className="font-italic">
              Lập trình viên ( Đối tác: <strong>Viettel</strong> )
            </p>
            <p className="working-time">04/2023 - Now</p>
            <h4>* Web</h4>
            <ul>
              <li>Tạo ra một website về bóng đá</li>
              <li>Web có tri tiết các trận đá bóng</li>
              <li>Phân tích và phát triển tính năng cá cược</li>
              <li>
                Config base cho website (config redux thunk, axios, env...)
              </li>
              <li>
                Website đảm bảo chạy trên mọi thiết bị, tốc độ truy cập nhanh,
                không giật lag, Website thân thiện với người dùng
              </li>
              <li>Tổng hợp kết quả các trận đấu bóng đá của các giải đấu</li>
              <li>Tạo phòng, lập phòng mời người chơi...</li>
              <li>Chức năng đăng ký, đăng nhập, cập nhật thông tin</li>
              <li>Cắt ghép giao diện từ Figma</li>
              <li>Website đang trong quá trình phát triển</li>
              <li>Hỗ trợ phân tích + code Back end</li>
              <div>
                => Công nghệ sử dụng chủ yếu: <strong>Reactjs + Express</strong>
              </div>
            </ul>
            <h4>* Cms</h4>
            <ul>
              <li>Báo cáo doanh thu hàng ngày, giờ, tháng</li>
              <li>Xuất báo cáo ra file Excel</li>
              <li>Tạo kèo, lập phòng cho người chơi</li>
              <li>Quản lý người chơi khi có dấu hiệu gian lận</li>
              <li>Cùng Back end phân tích và thiết kế cơ sở dữ liệu</li>
              <div>=> Công nghệ sử dụng chủ yếu: Angularjs + Express</div>
            </ul>
          </div>

          <div className="resume__detail">
            <h4>
              Arabica Tech - Dự án: <strong>Dashboard Arabica</strong>
            </h4>
            <p className="font-italic">Lập trình viên</p>
            <p className="working-time">05/2023 - 07/2023</p>
            <ul>
              <li>Báo cáo thống kê doanh thu + dự án của công ty</li>
              <li>Làm tất cả các phần front-end</li>
              <li>Config base front-end + Back-end</li>
            </ul>
            <p>
              => Công nghệ được sử dụng chủ yếu:{" "}
              <strong>Angular + Express</strong>
            </p>
          </div>

          {/* game lào */}
          <div className="resume__detail">
            <h4>
              Arabica Tech - Dự án:{" "}
              <a href="http://arabica.la/" target="_blank">
                Game Unitel
              </a>
            </h4>
            <p className="font-italic">
              Lập trình viên ( Đối tác: <strong>Unitel</strong> )
            </p>
            <p className="working-time">10/2023 - 02/2024</p>
            <ul>
              <li>Làm tất cả mảng front-end</li>
              <li>Fixbug and maintenance source code</li>
            </ul>
            <p>
              => Công nghệ được sử dụng chủ yếu:{" "}
              <strong>Reactjs + Socket + Express</strong>
            </p>
          </div>

          {/* mytel */}
          <div className="resume__detail">
            <h4>
              Arabica Tech - Dự án:{" "}
              <a href="http://reverseauction.com.mm/" target="_blank">
                Aution Mytel
              </a>
            </h4>
            <p className="font-italic">
              Lập trình viên ( Đối tác: <strong>Mytel</strong> )
            </p>
            <p className="working-time">02/2024 - 05/2024</p>
            <ul>
              <li>Làm tất cả mảng front-end</li>
              <li>Kết hợp với Back-end để xây dựng website</li>
            </ul>
            <p>
              => Công nghệ được sử dụng chủ yếu:{" "}
              <strong>Reactjs + Express</strong>
            </p>
          </div>

          {/* Mobion */}
          <div className="resume__detail">
            <h4>
              Arabica Tech - Update All Website: Mobion (
              <a href="http://esport.mobion.vn" target="_blank">
                esport
              </a>
              ,{" "}
              <a href="http://tvshow.mobion.vn" target="_blank">
                tvshow
              </a>
              ,{" "}
              <a href="http://phim.mobion.vn" target="_blank">
                phim
              </a>
              ,{" "}
              <a href="http://nhac.mobion.vn" target="_blank">
                nhac
              </a>
              ,{" "}
              <a href="http://tinnhanh.mobion.vn" target="_blank">
                tinnhanh
              </a>
              )
            </h4>
            <p className="font-italic">
              Lập trình viên ( Đối tác: <strong>Mobiphone</strong> )
            </p>
            <p className="working-time">05/2024 - 08/2024</p>
            <ul>
              <li>Fixbug, Maintain</li>
              <li>
                Cập nhật giao diện mới các trang chuyên mục theo yêu cầu của
                Mobiphone
              </li>
            </ul>
            <p>
              => Công nghệ được sử dụng chủ yếu:{" "}
              <strong>Reactjs + Socket</strong>
            </p>
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
