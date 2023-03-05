import React from "react";
import Location from "./Location";
import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import Resume from "./Resume";
import Blogs from "./Blogs";

export default function index() {
  return (
    <>
      <Location />
      <About />
      <Experience />
      <Skills />
      <Resume />
      <Blogs />
    </>
  );
}
