import React from 'react'

export default function Contact() {
    return (
        <section name="contact">
            <div className='container my-5'>
                <div className='container py-5 mb-4'>
                    <div id='contactCard' className="rounded shadow row just align-items-center g-lg-5 px-5 py-5">
                        <div className="col-lg-7 text-center text-lg-start">
                            <h1 id='contactHeader' className="display-4 fw-bold lh-1 mb-3">contact me</h1>
                            <p className="col-lg-10 fs-4">Want me to work on your next project? Get in touch with me through the form and let's talk about how I can bring your idea to life!</p>
                        </div>
                        <div className="col-md-10 mx-auto col-lg-5">
                            <form className="rounded shadow p-lg-4">
                                <div className="form mb-3">
                                    <input type="email" className="form-control bg-light text-dark" id="floatingInput" placeholder="Email address"/>
                                </div>
                                <div className="form mb-3">
                                    <input type="text" className="form-control bg-light text-dark" id="inputName" placeholder='Name'/>
                                </div>
                                <div className="form mb-3">
                                    <textarea type="message" className="form-control bg-light text-dark" id="inputMessage" placeholder="Message" rows="5"></textarea>
                                </div>
                                <button id='contactButton' className="w-100 btn btn-lg border rounded-pill" type="submit">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}