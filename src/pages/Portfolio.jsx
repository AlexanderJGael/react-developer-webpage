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
                    <Project title="Project 1" image="https://via.placeholder.com/500x300" description="Description of project 1" />                
                    <Project title="Project 1" image="https://via.placeholder.com/500x300" description="Description of project 1" />                
                    <Project title="Project 1" image="https://via.placeholder.com/500x300" description="Description of project 1" />                
                    <Project title="Project 1" image="https://via.placeholder.com/500x300" description="Description of project 1" />                
                    <Project title="Project 1" image="https://via.placeholder.com/500x300" description="Description of project 1" />                
                    <Project title="Project 1" image="https://via.placeholder.com/500x300" description="Description of project 1" />                
                </div>
            </div>
        </section>
    )
}

export default Portfolio