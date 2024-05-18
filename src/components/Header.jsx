import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'

function Navigation() {
  return (
    <ul className="nav nav-pills">
        <li className='nav-item'>
            <Link className='nav-link text-light' to="/">about me</Link>
        </li>
        <li className='nav-item'>
            <Link className='nav-link text-light' to="/portfolio">portfolio</Link>
        </li>
        <li className='nav-item'>
            <Link className='nav-link text-light' to="/contact">contact me</Link>
        </li>
    </ul>
  )
}

function Header() {
  return (
      <header className="shadow d-flex flex-wrap just-content-center expand py-3 mb-4">
        <a href="/" id='headerBrand' className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <span><img id='logo' className='mx-2 bi rounded-circle' height='32' src={logo}></img></span>
          <span id='logoText' className="fs-4 fw-bold">ally</span>
        </a>
        <Navigation />
      </header>
  )
}

export default Header