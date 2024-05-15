import React from "react";

const Project = ({ image, title, description }) => {
    return (
        <div className="col-md-6 pb-3">
            <div className="h-100 p-4 text-bg-dark rounded-3">
                <img className="img-fluid rounded mb-3" src={image} alt={title}/>
                <h2 className="mx-3 text-start">{title}</h2>
                <p className="mx-3 text-start">{description}</p>
            </div>
        </div>
    )
}

export default Project