import React from "react";
import githubSVG from "../assets/github-mark-white.svg"
import externalSVG from "../assets/externalLink.svg"

const Project = ({ image, title, description, deployedLink, repoLink }) => {
    return (
        <div className="col-md-6 pb-3">
            <div id="projectCard" className="shadow-lg h-100 p-4 rounded-3">
                <div id="imageContainer" className="flex justify-content-center align-items-center">
                    <img id="projectImage" className="img-fluid rounded mb-3" src={image} alt={title}/>
                    <div id="linksDiv" className="overlay flex gap-4 align-items-center justify-content-center container-fluid">
                        <a href={repoLink}><img className="bi svg-image" height="64px" src={githubSVG} alt='GitHub Logo'/></a>
                        <a href={deployedLink}><img id="externalLink" height="80px" className="bi svg-image" src={externalSVG} alt='External Link'/></a>
                    </div>
                </div>
                <h2 id="projectTitle" className="fw-bold text-start">{title}</h2>
                <p className="text-start">{description}</p>
            </div>
        </div>
    )
}

export default Project