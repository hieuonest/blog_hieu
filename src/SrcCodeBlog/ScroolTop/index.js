import styled from "styled-components";

export default function ScroolTop() {
  const HandleGoToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Scroll>
      <button onClick={HandleGoToTop} className="item-goto-top">
        <i className="fa fa-long-arrow-up" aria-hidden />
      </button>
    </Scroll>
  );
}

const Scroll = styled.div`
  position: fixed;
  bottom: 15px;
  right: 15px;
  z-index: 100;

  .item-goto-top {
    display: flex;
    justify-content: center;
    margin-top: 15px;
    width: 40px;
    height: 40px;
    background: var(--orange);
    align-items: center;
    border-radius: 50%;
    border: none;
  }

  i {
    color: white;
    font-size: 18px;
  }
`;
