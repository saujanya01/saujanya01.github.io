/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import $ from "jquery";

function ToggleButton() {

    function handleClick(e) {
        $(".navbar-links").slideToggle();
    }

    return(
        <a onClick={handleClick} className="toggle-button">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </a>
    )
}

export default ToggleButton;