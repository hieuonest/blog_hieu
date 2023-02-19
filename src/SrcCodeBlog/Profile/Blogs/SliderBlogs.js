import React from "react";
import styled from "styled-components";
import Slider from "react-slick";

const dataSliderBlog = [
  {
    id: 1,
    srcImage:
      "https://images.pexels.com/photos/585752/pexels-photo-585752.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Download all images trên website sử dụng javascript",
  },
  {
    id: 2,
    srcImage: "https://wallpaperaccess.com/full/279643.jpg",
    title: "Tìm hiểu về React V18",
  },
  {
    id: 3,
    srcImage: "https://wallpaperaccess.com/full/279643.jpg",
    title: "Cách đơn giản để SEO trong Reactjs",
  },
  {
    id: 4,
    srcImage:
      "https://images.pexels.com/photos/585752/pexels-photo-585752.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Các cách truyền dữ liệu giữa React Components",
  },
];
export default function SliderBlogs({ handDetailBlog = () => {} }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <SliderContainer className="position-relative">
      <Slider {...settings}>
        {dataSliderBlog.map((item, index) => (
          <div key={index} className="position-relative">
            <img
              src={item.srcImage}
              alt={`slider-img-${index}`}
              width="100%"
              height="400px"
            />
            <div
              className="position-absolute"
              style={{ zIndex: "9", top: "0", color: "white" }}
            >
              <p className="blog__title">{item.title}</p>
              <button
                className="custom-btn btn-blog"
                onClick={() => handDetailBlog(item.id)}
              >
                Xem thêm
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </SliderContainer>
  );
}

const SliderContainer = styled.div`
  .slick-prev {
    left: 0;
    z-index: 9;
    &::before {
      font-size: 40px;
      color: #243e56;
    }
    &:hover {
      transition: 0.3s ease-in-out;
      color: #fff;
    }
  }
  .slick-next {
    right: 20px;
    z-index: 9;
    &::before {
      font-size: 40px;
      color: #243e56;
    }
  }
  .slick-dots .slick-active {
    border: 1px solid #243e56;
    border-radius: 50%;
  }
  .slick-dots li {
    top: 30px;
  }
  .blog__title {
    padding-left: 20px;
    padding-top: 10px;
    color: #fff;
    font-size: 2rem;
    font-weight: bolder;
    text-shadow: 2px 2px #000000;
    cursor: grab;
  }
  button {
    margin: 20px;
  }
  .custom-btn {
    width: 130px;
    height: 40px;
    color: #fff;
    border-radius: 5px;
    padding: 10px 25px;
    font-weight: 500;
    background: transparent;
    cursor: pointer;
    transition: 0.5s ease-in-out;
    position: relative;
    display: inline-block;
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
      7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
    outline: none;
  }
  .btn-blog {
    border: none;
    transition: all 0.3s ease;
    overflow: hidden;
  }
  .btn-blog:after {
    position: absolute;
    content: "";
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #1fd1f9;
    background-image: linear-gradient(315deg, #1fd1f9 0%, #243e56 74%);
    transition: all 0.3s ease;
  }
  .btn-blog:hover {
    background: transparent;
    box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.5),
      -4px -4px 6px 0 rgba(116, 125, 136, 0.2),
      inset -4px -4px 6px 0 rgba(255, 255, 255, 0.5),
      inset 4px 4px 6px 0 rgba(116, 125, 136, 0.3);
    color: #fff;
    transition: 1s ease-in-out;
  }
  .btn-blog:hover:after {
    -webkit-transform: scale(2) rotate(180deg);
    transform: scale(2) rotate(180deg);
    box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.5),
      -4px -4px 6px 0 rgba(116, 125, 136, 0.2),
      inset -4px -4px 6px 0 rgba(255, 255, 255, 0.5),
      inset 4px 4px 6px 0 rgba(116, 125, 136, 0.3);
  }
`;
