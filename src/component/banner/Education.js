import React from "react";
import EducationItems from "./Items";

function Education(props) {

    const education = [
        {
            name: "BIT Mesra",
            link: "https://bitmesra.ac.in",
            date: "2017-2021",
            desc: "B.E. Electrical And Electronics Engineering"
        },
        {
            name: "St. Xavier's School, Ranchi",
            link: "https://stxaviersschool.com",
            date: "2004-2017",
            desc: "Intermediate and Matriculation"
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