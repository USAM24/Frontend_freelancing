import React from 'react';
import styles from './Footer.module.css';
import logo from '../../../Assets/images/logo.svg';
import { IoLocationOutline } from 'react-icons/io5';
import { FaPhoneVolume } from 'react-icons/fa';
import { CiMail } from 'react-icons/ci';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';

export default function Footer() {
  return <>
  <div className="container py-5">
    <div className="row justify-content-center ">
      <div className="col-md-3">
        <img src={logo} alt="" />
        <p className="textLightGreen">Powerful Freelance Marketplace System with ability to change the Users (Freelancers & Clients)</p>
        <div className="d-flex fs-4 justify-content-between w-50 mt-3">
          <FaTwitter />  
          <FaFacebookF />  
          <BsInstagram />  
        </div>
      </div>

        <div className="col-md-3 d-flex flex-column">
          <div>
            <h4>For Clients</h4>
          </div>
         <div className=" fw-light">
         <p className="m-0">About Us</p>
          <p className="m-0">Find Freelancers</p>
          <p className="m-0">Post Project</p>
          <p className="m-0">Privacy Policy</p>
         </div>
        </div>

        <div className="col-md-3 d-flex flex-column">
          <div>
            <h4>For Freelancers</h4>
          </div>
         <div className=" fw-light">
         <p className="m-0">Find Work</p>
          <p className="m-0">Create Account</p>
         </div>
        </div>

        <div className="col-md-3 d-flex flex-column">
          <div>
            <h4>Call us</h4>
          </div>
         <div className="fw-light d-flex flex-column justify-content-around">
          <div className="d-flex align-items-center ">
            <IoLocationOutline />
            <p>Egypt</p>
          </div>
          <div className="d-flex my-4">
            <FaPhoneVolume />
            <p>+025470000000</p>
          </div>
          <div className="d-flex">
            <CiMail />
            <p>USAM@gmail.com</p>
          </div>
         </div>
        </div>

        <div className="row justify-content-center my-4">
         <div className="col-md-3 textLightGray">
         <p>2024 USAM. All right reserved</p>
         </div>
        </div>
    </div>
  </div>
  </>
}
