import React from "react";
import Contact from "./Contact";

const About = ({title}) => {
  return (
    <>
      <div>About</div>
      <div>{title}</div>
      <Contact title={title} />
    </>
  );
};

export default About;
