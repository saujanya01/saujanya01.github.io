import React from "react";
import ToggleButton from "./ToggleButton";
import NavbarLinks from "./NavbarLinks";

function Navbar() {
    return (
        <nav className="navbar">
            <h1 className="nav-title">Saujanya Tiwari</h1>
            <ToggleButton/>
            <NavbarLinks/>
        </nav>
    )
}

export default Navbar;