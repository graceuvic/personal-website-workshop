import React from "react";
import "./Projects.css";

const Projects = () => {

    const projects = [

        {
            name: "project name",
            description: "whatever",
            tech: "what tech I used, aka python",
            link: "link it to github project"
        },
        {
            name: "project name",
            description: "whatever",
            tech: "what tech I used, aka python",
            link: "link it to github project"
        },
        {
            name: "project name",
            description: "whatever",
            tech: "what tech I used, aka python",
            link: "link it to github project"
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