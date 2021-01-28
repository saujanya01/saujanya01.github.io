/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "../css/banner.css";
import Work from "./Work";
import Education from "./Education"

function Banner() {

    return (
        <div className="banner">
            <div className="banner-head">
                <p>Saujanya Tiwari</p>
                <img src="./image/profile-pic.jpg"/>
            </div>
            <div className="edu-n-work">
                <Work/>
                <Education/>
            </div>
        </div>
    )
};

export default Banner;