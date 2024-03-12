import React, { useState } from 'react';
import './Navbar.module.css'; // Importing our custom styles
import logo from '../../../Assets/images/logo.svg';
import { Link, useLocation } from 'react-router-dom';
import profile from '../../../Assets/images/profile.png'
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className={`navbar navbar-expand-lg sticky-top ${location.pathname === "/" || location.pathname === "/sign-up" || location.pathname === "/find-freelancers" || location.pathname === "/find-work" ? "bg-transparent" : "bgGreen50"}`}>
  <div className="container d-flex justify-content-between align-items-center">
    <Link>
    <img src={logo} className="w-100" alt="" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 mb-lg-0 d-flex justify-content-center fs-5">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname === '/home' ? 'textLightGreen' : 'textGray'}`} aria-current="page" to={'/home'}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname === '/market-place' ? 'textLightGreen' : 'textGray'}  `} to={'/market-place'}>MarketPlace</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname === '/find-freelancers' ? 'textLightGreen' : 'textGray'}`} to={'/find-freelancers'} >Find Freelancers</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname === '/contact-us' ? 'textLightGreen' : 'textGray'}`}>Contact Us</Link>
        </li>
      </ul>
    </div>
    <div className="d-flex">
      {["/sign-up" , "/" , "/home"].includes(location.pathname) ? <>
      <Link to={'/sign-up'} className="btn btn-lg bgLightGreen text-white rounded-5 mx-2">Sign Up</Link>
      <Link to={'/'} className="btn btn-lg textLightGreen borderLightGreen rounded-5 mx-2">Login</Link>
      </> 
      : 
      <>
        <Link className="text-decoration-none" to={'/profile'}>
      <div className="d-flex align-items-center text-dark">
      <img src={profile} className="mx-2" alt="profileImg" />
      <p>Profile</p>
      <IoIosArrowDown />
      </div>
      </Link>
      </>
      }
    </div>
  </div>
</nav>

  );
};

export default Navbar;
