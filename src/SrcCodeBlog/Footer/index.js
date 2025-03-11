import { useEffect } from "react";
import styled from "styled-components";
import { QRCodeSVG } from "qrcode.react";

export default function Footer() {
  useEffect(() => {
    var p = document.querySelector("p");
    p.addEventListener("input", function () {
      this.setAttribute("data-heading", this.innerText);
    });
  }, []);

  return (
    <ContainerFooter className="footer">
      <section>
        <div className="ware ware-1" />
        <div className="ware ware-2" />
        <div className="ware ware-3" />
        <div className="ware ware-4" />
        <div className="contact">
          <p data-heading="Liên Hệ cho tôi"></p>
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
    i {
      &:hover {
        scale: 1.5;
        transition: 0.3s ease-in-out;
        &::before {
          color: var(--orange);
        }
      }
    }
  }

  .contact {
    text-align: center;
    bottom: 0;
    p {
      color: var(--gray);
      font-size: 3rem;
      padding-top: 3rem;
      text-align: center;
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

  p {
    text-align: center;
    font-size: 14vw;
    position: relative;
    font-weight: 900;
    text-transform: uppercase;
    line-height: 1;
    margin-left: 3rem;

    // This is important, we need the p to be invisible.
    color: transparent;

    &:focus {
      outline: none;
    }
  }

  p::before,
  p::after {
    content: attr(data-heading);
    position: absolute;
    top: 0;
    left: 0;
  }

  // Clip path to slice the text.
  p::before {
    color: var(--darkBlue);
    clip-path: polygon(0% 100%, 100% 100%, 100% 40%, 0 60%);
  }

  p::after {
    color: var(--orange);
    clip-path: polygon(0 0, 100% 0%, 100% 36%, 0 56%);
    animation: slide 5s infinite;
  }

  // Move it.
  @keyframes slide {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translate(-20px, 2%);
    }
  }

  @media screen and (max-width: 576px) {
    .contact {
      display: none;
    }

    section {
      height: 0px;
    }
  }
`;
