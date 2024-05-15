import React from 'react'
import { Link } from 'react-router-dom'
import A from '../assets/A.svg'

function Navigation() {
  return (
    <ul className="nav nav-pills">
        <li className='nav-item'>
            <Link className='nav-link text-light' to="/">About Me</Link>
        </li>
        <li className='nav-item'>
            <Link className='nav-link text-light' to="/portfolio">Portfolio</Link>
        </li>
        <li className='nav-item'>
            <Link className='nav-link text-light' to="/contact">Contact Me</Link>
        </li>
    </ul>
  )
}

function Header() {
  return (
      <header className="d-flex flex-wrap just-content-center py-3 mb-4">
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <a id="logo"  href='/' className='mx-2 bi rounded-circle' overflow='hidden' height='64'><img className='rounded-circle' height='64' src={A}></img></a>
          <span className="fs-4 fw-bold text-light">Ally G. Designs</span>
        </a>
        <Navigation />
      </header>
  )
}

export default Header