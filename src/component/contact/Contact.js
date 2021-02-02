/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "../css/contact.css";

function Contact() {
    return(
        <div className="contact">
            <p>Contact</p>
            <hr/>
            <div className="contact-icon">
                <a href="mailto:saujanyatiwari455@gmail.com" target="__blank">Email</a>
                <a href="https://github.com/saujanya01" target="__blank">GitHub</a>
                <a href="https://www.linkedin.com/in/saujanya01/" target="__blank">Linkedin</a>
            </div>
        </div>
    )
}

export default Contact;