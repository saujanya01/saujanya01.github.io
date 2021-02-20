/* eslint-disable jsx-a11y/alt-text */
import React from "react";

function ProjectsList(props) {
    return (
        <div className="project-box">
            <h1>{props.data.title}</h1>
            <hr/>
            <p>{props.data.techStack}</p>
            <p>{props.data.desc}</p>
            <div className="projects-link">
                {props.data.demo && <p><a href={props.data.demo} target="__blank">Demo</a></p>}
                {props.data.github && <a href={props.data.github} target="__blank"><img src="./image/gitlogo.svg"></img></a>}
            </div>
        </div>
    )
}

export default ProjectsList;