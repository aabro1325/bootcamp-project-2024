import React from "react";
import style from "./resumeContent.module.css"; // Import your CSS module
import Link from "next/link";

export default function Resumecontent() {
return (
    <div className={style.resumeContainer}>
    <h1 className={style.pageTitle}>RESUME</h1>
    <Link href="files/Adarsh's Resume(8)(1)" className={style.button}>
        Learn More
    </Link>
    </div>
);
}