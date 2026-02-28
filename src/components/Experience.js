import React from "react";

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

        <div>

            <div>

                {experiences.map((exp, index) => (

                    <div key={index}>
                        <h2>
                            <strong>{exp.title}</strong> - {exp.company}
                        </h2>
                        <h2>
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