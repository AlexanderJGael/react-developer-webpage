import React from "react"
import Project from "../components/Projects"

const Portfolio = () => {
    return (
        <section name="portfolio">
            <div className="container my-5">
                <div id="portfolioJumbo" className="shadow p-5 mb-4 rounded">
                    <div className="container-fluid py-5">
                        <h1 className="text-start display-5 fw-bold">portfolio</h1>
                        <p className="text-start col-md-8 fs-4">Check out some of my projects and follow the link below to see my GitHub repos or get in contact with me through my contact page!
                        <br />
                        Enjoy!
                        </p>
                        <div id="buttonsDiv" className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button id="portfolioButton" href="https://github.com/AlexanderJGael?tab=repositories" className="text-emphasis btn btn-lg border rounded-pill" type="button">GitHub</button>
                            <button id="portfolioButton" href='/contact' className="btn btn-lg border rounded-pill" type="button">Contact Me</button>
                        </div>
                    </div>
                </div>
                <div className="row align-items-md-stretch">
                    <Project title="react developer website" link="https://github.com/AlexanderJGael/react-developer-webpage" image="https://via.placeholder.com/500x300" description="Developer portfolio website build using Vite, React and other technologies" />                
                    <Project title="jate: pwa text editor" deployed="https://jate-i2ev.onrender.com/" link="https://github.com/AlexanderJGael/PWA-Text-Editor" image="https://via.placeholder.com/500x300" description="This is a progressive web application (PWA) that serves as a text editor, allowing users to create and edit notes or code snippets with or without an internet connection." />                
                    <Project title="harmonyhub" link="https://github.com/AlexanderJGael/harmony_hub/tree/bugfixes" image="https://via.placeholder.com/500x300" description='"For musicians, by musicians," this website is all about connecting with people who share an interest in creating and enjoying music.' />                
                    <Project title="weather dashboard" link="https://github.com/AlexanderJGael/weather-app" image="https://github.com/AlexanderJGael/weather-app/blob/main/Assets/Screenshot%202024-01-31%20at%2017.15.07.png?raw=true" description="This project entails the creation of a weather dashboard application. The application runs in the browser and features dynamic updates to HTML and CSS." />                
                    <Project title="random password generator" link="https://github.com/AlexanderJGael/js-password-generator" image="https://via.placeholder.com/500x300" description="Description of project 4" />                
                    <Project title="project 6" image="https://via.placeholder.com/500x300" description="Description of project 6" />                
                </div>
            </div>
        </section>
    )
}

export default Portfolio