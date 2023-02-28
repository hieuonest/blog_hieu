import React from "react";
import styled from "styled-components";
import { QRCodeSVG } from "qrcode.react";

export default function Footer() {
  return (
    <ContainerFooter className="footer">
      <section>
        <div className="ware ware-1" />
        <div className="ware ware-2" />
        <div className="ware ware-3" />
        <div className="ware ware-4" />
        <div className="contact">
          <p>Liên Hệ cho tôi</p>
          <div className="qr-code">
            <QRCodeSVG
              value="https://www.facebook.com/han.hieu.980"
              size="200"
            />
          </div>
          <a href="https://www.facebook.com/han.hieu.980" target="_blank">
            <i className="fa fa-facebook-square" aria-hidden />
          </a>
          <a href="https://www.instagram.com/hanhieu17/" target="_blank">
            <i className="fa fa-instagram" aria-hidden />
          </a>
          <a href="mailto:hanviethieu1999@gmail.com">
            <i class="fa fa-envelope-o" aria-hidden />
          </a>
        </div>
      </section>
    </ContainerFooter>
  );
}

const ContainerFooter = styled.div`
  margin-top: 3rem;
  margin-right: 0;

  .qr-code {
    text-align: center;
    padding-top: 1rem;
  }

  a {
    margin: 2rem;
    font-size: 3rem;
  }

  .contact {
    text-align: center;
    bottom: 0;
    p {
      color: var(--gray);
      font-size: 3rem;
      padding-top: 1rem;
    }

    i {
      color: var(--gray);
      cursor: pointer;
      &:hover {
        color: var(--gray);
        transition: 0.3s ease-in-out;
      }
    }
  }

  svg {
    border: 5px solid white;
  }

  section {
    position: relative;
    width: 100%;
    height: 500px;
    /* background: black; */

    .ware {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 100px;
      background-size: 1000px 100px;
      background: url("/img/wave.png");
      z-index: 9;
    }
    .ware-1 {
      animation: animate 30s linear infinite;
      z-index: 1;
      opacity: 1;
      animation-delay: 0s;
    }
    .ware-2 {
      animation: animate2 15s linear infinite;
      z-index: 4;
      opacity: 0.5;
      animation-delay: -5s;
      bottom: 10px;
    }

    .ware-3 {
      animation: animate 30s linear infinite;
      z-index: 3;
      opacity: 0.2;
      animation-delay: -2s;
      bottom: 15px;
    }

    .ware-4 {
      animation: animate2 15s linear infinite;
      z-index: 2;
      opacity: 0.7;
      animation-delay: -3s;
      bottom: 20px;
    }

    @keyframes animate {
      0% {
        background-position-x: 0;
      }
      100% {
        background-position-x: 1000px;
      }
    }
    @keyframes animate2 {
      0% {
        background-position-x: 0;
      }
      100% {
        background-position-x: 1000px;
      }
    }
  }
`;
