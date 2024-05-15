import React from "react"

const Portfolio = () => {
    return (
        <section name="portfolio">
            <div className="container py-4">
                <div id="portfolioJumbo" className="p-5 mb-4 body-teritary rounded-3">
                    <div className="container-fluid py-5">
                        <h1 className="text-start display-5 fw-bold">portfolio</h1>
                        <p className="text-start col-md-8 fs-4">Check out some of my projects!</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button id="portfolioButton" className="btn btn-lg border rounded-pill text-light" type="button">GitHub</button>
                            <button id="portfolioButton" className="btn btn-lg border rounded-pill text-light" type="button">Contact Me</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio