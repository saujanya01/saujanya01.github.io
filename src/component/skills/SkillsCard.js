/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import skills from "./skills.json";
import SkillImage from "./SkillImage";

function SkillsCard () {
    return (
        <>
        {skills.map((skill, index)=> {
            return (
                <div key={index} className="skills-card">
                    <p className="skills-title">{skill.title}</p>
                    <hr/>
                    <div className="skill-items">
                        <SkillImage key={index} images={skill.data}/>
                    </div>
                </div>
            )
        })}
        </>
    )
}

export default SkillsCard;