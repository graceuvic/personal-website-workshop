import React from "react";
import "./About.css";

const About = () => {

    return (
        <div className="about-container">
            <div className="about-content">
                <div className="about-image">

                    <img
                        src={'${process.env.PUBLIC_URL}/George.png'}
                        alt="Profile"
                        width="200"
                    />
                </div>

                <div className="about-info">

                    <h2>Grace</h2>
                    <p>

                        describe me
                        
                    </p>

                    <div className="social-links">
                        <a
                            href="www.linkedin.com/in/grace-mcdougall-9bb3022a8"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn
                        </a>

                        <a
                            href="https://github.com/graceuvic"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Github
                        </a>

                    </div>

                </div>

            </div>

        </div>

    );

};

export default About;