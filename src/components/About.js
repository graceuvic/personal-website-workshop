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
                            href="https://ca.linkedin.com/school/university-of-victoria/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn
                        </a>

                        <a
                            href="https://github.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Github
                        </a>

                        <a
                            href="https://www.instagram.com/campuspeacock/?h1=en"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Instagram
                        </a>

                    </div>

                </div>

            </div>

        </div>

    )

}