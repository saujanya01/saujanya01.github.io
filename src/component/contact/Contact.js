/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "../css/contact.css";

function Contact() {
    return(
        <div className="contact">
            <p>Connect with me on:</p>
            <hr/>
            <div className="contact-icon">
                <a href="mailto:ank.ak2635@gmail.com" target="__blank">Email</a>
                <a href="https://github.com/ankak2635" target="__blank">GitHub</a>
                <a href="https://www.linkedin.com/in/ankit2635/" target="__blank">Linkedin</a>
                <a href="https://www.kaggle.com/ankitkumar2635/" target="__blank">Kaggle</a>

            </div>
        </div>
    )
}

export default Contact;