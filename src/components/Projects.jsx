import React from "react";

const Project = ({ image, title, description, link }) => {
    return (
        <div className="col-md-6 pb-3">
            <div id="projectCard" className="shadow-lg h-100 p-4 rounded-3">
                <a href={link}><img className="img-fluid rounded mb-3" src={image} alt={title}/></a>
                <h2 id="projectTitle" className="fw-bold mx-3 text-start">{title}</h2>
                <p className="mx-3 text-start">{description}</p>
            </div>
        </div>
    )
}

export default Project