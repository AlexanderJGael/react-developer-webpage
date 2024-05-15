import React from 'react'

export default function Contact() {
    return (
        <contact className="container col-xl-10 col-xxl-8 px-4 py-5">
            <div id='contactCard' className="rounded shadow row align-items-center g-lg-5 py-5">
                <div className="col-lg-7 text-center text-lg-start">
                    <h1 className="display-4 fw-bold lh-1 text-light mb-3">Vertically centered hero sign-up form</h1>
                    <p className="col-lg-10 fs-4">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
                </div>
                <div className="col-md-10 mx-auto col-lg-5">
                    <form className="rounded p-4 p-md-5">
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control bg-light text-dark" id="floatingInput" placeholder="name@example.com"/>
                            <label className="text-dark" htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control bg-light text-dark" id="inputName" placeholder='Jane Doe'/>
                            <label className="text-dark" htmlFor="floatingName">Name</label>
                        </div>
                        <div className="mb-3">
                            <textarea type="text" className="form-control bg-light text-dark" id="exampleFormControlTextarea1" placeholder="Message..." rows="5"></textarea>
                        </div>
                        <button id='contactButton' className="w-100 btn btn-lg border rounded-pill" type="submit">Send</button>
                    </form>
                </div>
            </div>
        </contact>
    )
}