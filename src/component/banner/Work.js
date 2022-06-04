import React from "react";
import WorkItems from "./Items";

function Work() {

    const work = [
        {
            name: "SDE @ HyperVue AI",
            link: "https://hypervue.ai",
            date: "February 2022 - Present",
            desc: "Working as a fullstack engineer."
        },
        {
            name: "Analyst @ Deloitte USI",
            link: "https://www2.deloitte.com/ui/en.html",
            date: "September 2021 - February 2022",
            desc: "Worked in testing of mainframe applications."
        },
        {
            name: "Summer Analyst @ Axis Bank (BIU)",
            link: "https://www.axisbank.com/",
            date: "May 2020 - June 2020",
            desc: "Interned with Outbound Call Centre Team on a Call Centre Analytics project to identify the best practices that are being followed in call Centres across the globe."
        },
        {
            name: "Mentor/TA @ CodeAsylums",
            link: "https://codeasylums.com/",
            date: "Dec 2019 - October 2020",
            desc: "Taught Python, Machine Learning and Digital Image Processing to bootcamp students."
        }
    ]

    return(
        <div className="banner-details-card">
            <p className="banner-title">Work Experience</p>
            <hr/>
            {work.map((item, index)=> {
                return <WorkItems key={index} details={item}/>
            })}
        </div>
    );
}

export default Work;