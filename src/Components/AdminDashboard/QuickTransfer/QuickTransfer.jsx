import React from 'react'
import Style from './QuickTransfer.module.css'
import { HiDotsVertical } from "react-icons/hi";
import { LuCheckCircle } from "react-icons/lu";

export default function QuickTransfer() {
    return <>
   <div className="d-flex justify-content-between align-items-center">
        <div>
            <h5>Quick Transfer</h5>
            <p className="font-sm">Lorem ipsum dolor sit amet.</p>
        </div>
        <div>
            <HiDotsVertical className="fs-4" />
        </div>
    </div>

    <div className="d-flex justify-content-between my-4 align-items-center">
       <div className="d-flex">
       <div className="p-4 bgLightGray rounded-4 me-3"></div>
        <div>
            <p>Samsul</p>
            <p className="font-sm textLightGray">@sam224</p>
        </div>
       </div>
       <div>
        <LuCheckCircle className="fs-4 textLightGreen"/>
       </div>
    </div>

    <div>
    <div className="d-flex justify-content-between">
        <p className="fw-bold">Recent Friends</p>
        <p className="textLightGreen fw-light">See More</p>
    </div>

    <div className="position-sticky d-flex justify-content-center ms-5 ps-5">
        <div className="ms-5 my-3">
            {[...Array(6)].map((_, index) => (
                <div key={index} className="p-4 bgLightGray  rounded-4 position-absolute border-2 border border-white" style={{ marginLeft: `${index * -2.5}rem` }}></div>
            ))}
        </div>
    </div>
</div>


<div className="mt-5">
    <p>Insert Amount</p>
    <h3 className="text-center my-3">875</h3>
    <input type="range" min="0" max="100" class={`${ Style.slider}`}  id="mySlider"/>

</div>

<div className="d-flex justify-content-between font-sm ">
    <p>Your Balance</p>
    <p>$456,345,62</p>
</div>
<button className="btn w-100 mt-4 rounded-5 bgLightGreen text-white" >Post Now</button>
    </>
}

