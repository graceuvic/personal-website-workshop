import React from "react";
import "./Experience.css";

const Experience = () => {

    const experiences = [

        {
            title: "job title",
            company: "company name",
            dates: "when I worked",
            description: "whatever"
        },
        {
            title: "Sales Associate",
            company: "Mark's",
            dates: "Jun 2022 - Aug 2025",
            description: "Delivered friendly, efficient customer service in a fast-paced environment. Resolved customer issues using clear communication, critical thinking, and solution-oriented decision-making."
        },
        {
            title: "Volunteer",
            company: "Railway Museum of British Columbia",
            dates: "Nov 2021 - Dec 2024",
            description: "Supervised visitor activities and ensured a safe, engaging experience for diverse audiences. Assisted guests by answering questions and troubleshooting issues in a public-facing environment."
        }

    ];

    return (

        <div className="experience-container">

            <div className="experience-content">

                {experiences.map((exp, index) => (

                    <div key={index} className="experience-item">
                        <h2>
                            <strong>{exp.title}</strong> - {exp.company}
                        </h2>
                        <h2 className="dates">
                            <em>{exp.dates}</em>
                        </h2>
                        <p>{exp.description}</p>

                    </div>

                ))}

            </div>

        </div>

    );

};

export default Experience;