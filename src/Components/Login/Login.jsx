import React from 'react'
import Style from './Login.module.css'
import { Link } from 'react-router-dom';
import { FaEyeSlash } from "react-icons/fa";
import loginImg from '../../Assets/images/login.png'

export default function Login() {
  const socialIcons = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7c60df61e37d9f991eb01a7c7f7acb3da219a5b6ada13e299ce6e76a779e9630?apiKey=8862ed90af6641a3bff92056e25351f6&", alt: "Connect with extended service 0" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/222740867c6596305f000e79965c9416388bd2664423f8d19039626640468d10?apiKey=8862ed90af6641a3bff92056e25351f6&", alt: "Connect with extended service 1" },
  ];
    
    return <>
    <div>
  <div className="container">
    <div className={`${Style.customRow} row py-5 rounded-5 `}>
      <div className="col-md-5 d-flex align-items-center  justify-content-center">
        <img src={loginImg} className="w-75" loading="lazy" alt="laptop"/>
      </div>
      <div className="col-md-6">
      <main className=" my-5">
      <section className="text-center mb-4">
        <h4 className="fw-bold">Welcome To USAM, If you have an account login now.</h4>
        
      </section>
      
      <section className="mb-4 row justify-content-center">
        {socialIcons.map((icon, index) => (
          <div className="col-md-1">
            <img key={index} src={icon.src} alt={icon.alt} className="" />
          </div>
        ))}
      </section>
      
      <form className="mt-4">
          
          <label htmlFor="userName" className="form-label fs-4 ms-3">User name</label>
            <input type="text" className="form-control rounded-5 p-3" id="userName" placeholder="Enter your User name" />
          
         
        <div className="position-relative my-4">
        <label htmlFor="password" className="form-label fs-4 ms-3">Password</label>
            <input type="text" className="form-control rounded-5 p-3" id="userName" placeholder="Enter your Password" />
          <FaEyeSlash className="position-absolute fs-3 top-50 end-0 translate-middle mt-4"/>
        </div>

 

        <div className="row mb-3">
          <div className="col-md-4">
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="rememberMe" />
              <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
            </div>
          </div>
          
          <div className="col-md-8 text-end">
            <div>Forgot Password?</div>
          </div>
        </div>
        
        <div className="w-100 d-flex justify-content-end">
          <Link to={'/home'} className="btn bg-black rounded-5 btn-lg text-white w-25">Login</Link>
        </div>
        
        <p className="mt-3 text-center">
          Don’t have an account? <Link to={'/sign-up'} className="text-decoration-none text-white ">Register Now</Link>
        </p>
      </form>
    </main>
      </div>

    </div>
  </div>
    </div>
    </>
}


