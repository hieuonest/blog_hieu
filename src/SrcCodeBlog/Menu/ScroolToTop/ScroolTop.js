import ScrollToTop from "react-scroll-to-top";
import styled from "styled-components";

export default function ScroolTop({ refScreen }) {
  // console.log("refScreen", refScreen);
  const nana = () => {
    window.scroll(0, 100);
  };
  const HandleGoToTop = () => {
    console.log(9);
    window.scrollTo(0, 0);
  };
  return (
    <Scroll>
      <button onClick={HandleGoToTop} className="item-goto-top">
        <i className="fa fa-long-arrow-up" aria-hidden="true"></i>
      </button>
    </Scroll>
  );
}

const Scroll = styled.div`
  position: fixed;
  bottom: 3%;
  right: 3%;
  z-index: 100;
  .item-goto-top {
    display: flex;
    justify-content: center;
    margin-top: 15px;
    width: 45px;
    height: 45px;
    background: rgb(255, 119, 7);
    align-items: center;
    border-radius: 50%;
    border: none;
  }
`;
