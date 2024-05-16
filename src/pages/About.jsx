import React from "react"

const About = () => {
    return (
        <section name="about" className="container my-5">
            <div id="about-card" className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border border-primary shadow-lg">
                <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                    <h1 className="text-start display-4 fw-bold lh-1">Alex Gael is a Web Developer and Designer, based in KCMO</h1>
                    <p className="lead text-start">They are passionate about what they do. Whether it is building a new web application, or improving an existing one, they will get the job done. <br />Browse around the site and use the 'Contact Me' page to get in touch!</p>
                </div>
                <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                    <img className="rounded" src="http://placeholder.com/720x400" alt="" width="720"/>
                </div>
            </div>
        </section>
    )
}

export default About