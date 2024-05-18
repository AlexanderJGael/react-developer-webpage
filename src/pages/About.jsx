import React from "react"

const About = () => {
    return (
        <>
            <div id="about" className="container my-5">
                <div id="about-card" className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 shadow-lg">
                    <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                        <h1 className="text-start display-4 fw-bold lh-1">ally is a web developer & designer based in kcmo</h1>
                        <p className="lead text-start">They are passionate about what they do; whether building a new web application, or improving an existing one, Ally will get the job done!</p>
                    </div>
                    <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                        <img className="rounded" src="https://images.pexels.com/photos/6470599/pexels-photo-6470599.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" height="720"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About