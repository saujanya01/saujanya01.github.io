import React from "react";
import SkillsCard  from "./SkillsCard";
import "../css/banner.css"
import "../css/skills.css"

function Skills () {
    return (
        <div className="skills">
            <p>Skills</p>
            <hr/>
            <div className="skills-card-parent">
                <SkillsCard/>
            </div>
        </div>
    );
}

export default Skills;