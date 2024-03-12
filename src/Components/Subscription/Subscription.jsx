import React from 'react'
import Style from './Subscription.module.css'

export default function Subscription() {
    return <>
    <div className="bgGreen50 py-5">
    <div className="container py-5">
        <div className="row text-center">
            <h1 className="display-4 fw-normal">Newsletter Subscription</h1>
            <h4 className="textLightGray">Subscribe to our newsletter to get new freelance work and projects </h4>
        </div>
        <div className="row justify-content-center ">
            <div className="col-md-5 d-flex flex-column align-items-center my-5">
            <input className="w-100 border-0 rounded-3 shadow py-3" type="text" placeholder="Enter Your E-mail Address" />
            <button className="btn btn-lg bgLightGreen text-white my-4 px-5 py-3">Subscribe</button>
            </div>
        </div>
    </div>
    </div>
    </>
}

