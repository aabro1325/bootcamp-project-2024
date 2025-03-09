import React from "react";
import style from "./about.module.css"; // Import your CSS module

export default function About() {
  return (
    <div className={style.resumeContainer}>
      {/* Left Content */}
      <div className={style.textContent}>
        <span className={style.greetingEmoji}>👋</span>
        <h1 className={style.pageTitle}>Hello, I am Adarsh Murugesan</h1>
        <p className={style.subtitle}>
          I am a first-year Computer Science student at Cal Poly San Luis
          Obispo with a passion for software development, design, and
          problem-solving. I enjoy building meaningful software, exploring new
          technologies, and am a proud enthusiast of outdoor adventures.
        </p>
      </div>

      {/* Right Image */}
      <div className={style.profileImage}>
        <img
          src="images/IMG_4514.jpg"
          alt="Adarsh at Yosemite Valley"
          className={style.profileImage}
        />
      </div>
    </div>
  );
}
