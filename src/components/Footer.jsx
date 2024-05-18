import React from "react";
import './css/footer.css'
import githubLogoWhite from '../assets/github-mark-white.svg'
import allyLogo from '../assets/logo.svg'

export default function Footer() {
    return (
        <>
            <div className="footer container">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
                    <div className="col-md-4 d-flex align-items-center">
                    <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                        <img src={allyLogo} className="bi img-fluid  rounded-circle" width="30" height="24" />
                    </a>
                    <span className="mb-3 mb-md-0 text-body-light">© ally</span>
                    </div>

                    <ul className="nav col-md-4 align-items-center justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><a className="text-body-secondary" href="http://github.com/AlexanderJGael"><img className="bi img-fluid" width="33" height="33" src={githubLogoWhite} alt='GitHub Logo'/></a></li>
                    </ul>
                </footer>
            </div>
        </>
    )
}