import React from "react";
import style from "./navbar.module.css"; // Import your CSS module
import Link from "next/link";

export default function Navbar() {
  return (
    <header className={style.nav}>
      <nav className={style.navbar}>
        <ul className={style["nav-list"]}>
          <li className={style["nav-item"]}>
            <Link href="/" className={style["nav-link"]}>
              <span className={style["link-text"]}></span>
            </Link>
          </li>
          <li className={style["nav-item"]}>
            <Link href="/" className={style["nav-link"]}>
              <span className={style["link-text"]}>HOME</span>
            </Link>
          </li>
          <li className={style["nav-item"]}>
            <Link href="/portfolio" className={style["nav-link"]}>
              <span className={style["link-text"]}>PORTFOLIO</span>
            </Link>
          </li>
          <li className={style["nav-item"]}>
            <Link href="/blog" className={style["nav-link"]}>
              <span className={style["link-text"]}>BLOG</span>
            </Link>
          </li>
          <li className={style["nav-item"]}>
            <Link href="/resume" className={style["nav-link"]}>
              <span className={style["link-text"]}>RESUME</span>
            </Link>
          </li>
          <li className={style["nav-item"]}>
            <Link href="contact.html" className={style["nav-link"]}>
              <span className={style["link-text"]}>CONTACT</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
