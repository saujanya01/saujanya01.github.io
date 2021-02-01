import React from "react";
import ProjectsList from "./ProjectsList";
import projects from "./projects.json";

import "../css/banner.css";
import "../css/projects.css";

function Projects() {
    return (
        <div className="projects">
            <p>Projects</p>
            <hr/>
            {projects.map((project, index)=>{
                return <ProjectsList key={index} data={project}/>
            })}
        </div>
    );
}

export default Projects;