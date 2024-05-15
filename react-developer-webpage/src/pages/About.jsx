import React from "react"

const About = () => {
    return (
        <div className="container my-5">
            <div id="about-card" className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
            <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                <h1 className="display-4 fw-bold lh-1">Border hero with cropped image and shadows</h1>
                <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
            </div>
            <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                <img class="rounded-lg-3" src="bootstrap-docs.png" alt="" width="720"/>
            </div>
            </div>
        </div>
    )
}

export default About