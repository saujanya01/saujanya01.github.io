/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

function NavbarLinks() {

    function handleClick(e) {
        if ($(".toggle-button").css("display")!=="none"){
            $(".navbar-links").slideToggle();
        }
    }

    return (
        <div className="navbar-links">
            <ul>
                <li><Link onClick={handleClick} className="nav-link-route" to="/">About Me</Link></li>
                <li><Link onClick={handleClick} className="nav-link-route" to="/projects">Projects</Link></li>
                <li><Link onClick={handleClick} className="nav-link-route" to="/contact">Contact Me</Link></li>
            </ul>
        </div>
    )
}

export default NavbarLinks;