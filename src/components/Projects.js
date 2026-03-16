import React from "react";
import "./Projects.css";

const Projects = () => {

    const projects = [

        {
            name: "Weather App",
            description: "A weather app built in a WECS workshop.",
            tech: "Javascript, CSS, HTML, React",
            link: "https://github.com/graceuvic/wecs-weather-app"
        },
        {
            name: "Blogging System",
            description: "Designed a system to post, edit, and/or delete posts for a blog in SENG265.",
            tech: "Python, CSS",
            link: "https://github.com/graceuvic/Blogging-System-SENG265"
        },
        {
            name: "Kiosk Concept Design",
            description: "With me as team lead, my group successfully designed a functional, weather-resistant kiosk concept to meet the needs of the Ocean Networks Canada Project.",
            tech: "what tech I used, aka python"
        }
    ];

    return (

        <div className="projects-container">

            <div className="projects-content">

                {projects.map((project, index) => (

                    <div key={index} className="project-card">
                        <h2><strong>{project.name}</strong></h2>
                        <p>{project.description}</p>
                        <p className="tech"><em>{project.tech}</em></p>
                        {project.link && (

                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="github-link"
                            >
                                View on GitHub
                            </a>
                        )}
                
                    </div>
                ))}
            </div>
        </div>

    );

};

export default Projects;