import React from "react";
import WorkItems from "./Items";

function Work() {

    const work = [
        {
            name: "Business Journalist @ Thomson Reuters ",
            link: "https://www.thomsonreuters.com/en.html",
            date: "July 2022 - July 2023",
            desc: "Monitored and wrote accurate business stories about North American resources (oil, gold, other metals) companies in a fast-paced environment."
        },
        {
            name: "Data Analyst (Intern) @ J-PAL South Asia",
            link: "https://www.povertyactionlab.org/south-asia",
            date: "June 2022 - July 2022",
            desc: "Led the data analysis team of a research project about impact of behavioural nudges. Analyzed raw primary survey data and constructed a class wise Nutritional Deficiency Index."
        },
        {
            name: "Application Developer (Intern) @ Annapoorna Trust",
            link: "Sri Satya Sai Annapoorna Trust",
            date: "May 2021 - June 2021",
            desc: "Developed the premature version of Employee Attendance application on Zoho Creator. I proposed, built and embedded a Leave Tracker application within the Employee Attendance application."
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