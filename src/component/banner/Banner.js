/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "../css/banner.css";
import Work from "./Work";
import Education from "./Education";
import Skills from "../skills/Skills";

function Banner() {
    return (
        <>
            <div className="banner">
                <div className="banner-head">
                    <div className="name-desc">
                        <p>Ankit Kumar</p>
                        <span>
                            A self-taught data scientist.<br/><br/>
                            I have experience of building and deploying data-intensive applications. I am proficient in working with machine learning, deep learning
algorithms and LLMs across diverse problems.<br/>
                        </span>
                        <span><a href="/AnkitKumarResume.pdf" target="__blank">Resume</a></span>
                    </div>
                    <img src="/image/profile-pic.jpeg"/>
                </div>
                <div className="edu-n-work">
                    <Work/>
                    <Education/>
                </div>
            </div>
            <Skills/>
        </>
    )
};

export default Banner;