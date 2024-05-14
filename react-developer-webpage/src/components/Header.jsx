import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div id='header' className='container'>
      <header className="d-flex flex-wrap just-content-center py-3 mb-4 border-bottom">
        <a href='/' className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <span className='fs-4 text-light fw-bold'>Alex Gael - Developer Portfolio</span>
        </a>
        <ul className="nav nav-pills">
          <li className='nav-item text'>
            <Link className='nav-link text-light' to="/">About Me</Link>
          </li>
          <li>
            <Link className='nav-link text-light' to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link className='nav-link text-light' to="/contact">Contact</Link>
          </li>
          <li>
            <Link className='nav-link text-light' to="/resume">Resumé</Link>
          </li>
        </ul>
      </header>
    </div>
  )
}

export default Header
