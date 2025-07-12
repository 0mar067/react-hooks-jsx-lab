import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="About">
    <h2>About Me</h2>
    <p>My name is Omar and I am a software engineer.</p>
    <img src={image} alt="i made this" />
  </div>;
}

export default About;
