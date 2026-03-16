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
            name: "Blogging System",
            description: "Designed a system to post, edit, and/or delete posts for a blog in SENG265",
            tech: "Python, CSS",
            link: "https://github.com/graceuvic/Blogging-System-SENG265"
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