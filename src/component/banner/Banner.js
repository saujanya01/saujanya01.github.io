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
                        <p>Saujanya Tiwari</p>
                        <span>
                            I am an engineer.<br/>
                            I love Machine Learning, Deep Learning and Image Processing.<br/>
                            I also like making websites.
                        </span>
                        <span><a href="https://docs.google.com/document/d/1m7dW9UeUiEfvz0A8JxzGwSw7Ov5zJ4pomGSYTdRXV78/edit?usp=sharing" target="__blank">Resume</a></span>
                    </div>
                    <img src="./image/profile-pic.jpg"/>
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