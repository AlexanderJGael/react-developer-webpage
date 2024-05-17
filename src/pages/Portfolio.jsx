import React from "react"
import Project from "../components/Projects"
import githubLogoWhite from "../assets/github-mark-white.svg"
import externalLink from "../assets/externalLink.svg"

const Portfolio = () => {
    return (
        <section name="portfolio">
            <div className="container my-5">
                <div id="portfolioJumbo" className="shadow p-5 mb-4 rounded">
                    <div className="container-fluid py-5">
                        <h1 className="text-start display-5 fw-bold">portfolio</h1>
                        <p className="text-start col-md-8 fs-4">Check out some of my projects and follow the link below to see my GitHub repositories!
                        </p>
                        <div id="buttonsDiv" className="d-grid pt-1 gap-2 d-md-flex justify-content-md-start">
                            <a href="https://github.com/AlexanderJGael?tab=repositories" role="button" aria-pressed="true">
                                <img id="portfolioButton"  src={githubLogoWhite} className="bi image-fluid" height="56" alt="Github" />
                            </a>
                        </div>
                    </div>
                </div>
                <div id="projectsDiv" className="row align-items-md-stretch">
                    <Project title="jate: pwa text editor" deployed="https://jate-i2ev.onrender.com/" repoLink="https://github.com/AlexanderJGael/PWA-Text-Editor" deployedLink='#' image="https://via.placeholder.com/500x300" description="This is a progressive web application (PWA) that serves as a text editor, allowing users to create and edit notes or code snippets with or without an internet connection." />                
                    <Project title="harmonyhub" repoLink="https://github.com/AlexanderJGael/harmony_hub/tree/bugfixes" deployedLink="#" image="https://via.placeholder.com/500x300" description='"For musicians, by musicians," this website is all about connecting with people who share an interest in creating and enjoying music.' />                
                    <Project title="weather dashboard" repoLink="https://github.com/AlexanderJGael/weather-app" deployedLink="https://alexanderjgael.github.io/weather-app/" image="https://github.com/AlexanderJGael/weather-app/blob/main/Assets/Screenshot%202024-01-31%20at%2017.15.07.png?raw=true" description="This project entails the creation of a weather dashboard application. The application runs in the browser and features dynamic updates to HTML and CSS." />                
                    <Project title="random password generator" repoLink="https://github.com/AlexanderJGael/js-password-generator" deployedLink="#" image="https://via.placeholder.com/500x300" description="Description of project 4" />                
                </div>
            </div>
        </section>
    )
}

export default Portfolio