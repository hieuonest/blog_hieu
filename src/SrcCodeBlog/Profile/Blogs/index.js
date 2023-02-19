import React from "react";
import Title from "../components/Title";
import SliderBlogs from "./SliderBlogs";

export default function Blogs() {
  return (
    <div className="container pt-5">
      <Title content="Blogs" id="blogs" />
      <div style={{ background: "#ccc", height: "400px" }}>
        <SliderBlogs />
      </div>
    </div>
  );
}
