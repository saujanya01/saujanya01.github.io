import React from "react";
import EducationItems from "./Items";

function Education(props) {

    const education = [
        {
            name: "Christ University, Bengaluru",
            link: "https://christuniversity.in/",
            date: "2020-2022",
            desc: "Master of Arts in Applied Economics"
        },
        {
            name: "St. Xavier's College, Ranchi",
            link: "https://www.sxcran.org/",
            date: "2017-2020",
            desc: "Bachelor of Arts in Economics"
        }
    ];

    return(
        <div className="banner-details-card">
            <p className="banner-title">Education</p>
            <hr/>
            {education.map((item, index)=> {
                return <EducationItems key={index} details={item}/>
            })}
        </div>
    );
}

export default Education;