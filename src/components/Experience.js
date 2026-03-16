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
            title: "job title",
            company: "company name",
            dates: "when I worked",
            description: "whatever"
        },
        {
            title: "job title",
            company: "company name",
            dates: "when I worked",
            description: "whatever"
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