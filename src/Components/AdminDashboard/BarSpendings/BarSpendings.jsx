import React from 'react';
import Style from './BarSpendings.module.css';
import { HiDotsVertical } from "react-icons/hi";

export default function BarSpendings() {
    const spendings = [
        { category: "Investments", gradient: "linear-gradient(90deg, #AC39D4, #F04CF3)", progress: 50, amount: "$1,415", remaining: "/$2,000" },
        { category: "Installments", gradient: "linear-gradient(90deg, #58BF8E, #32CA65)", progress: 70, amount: "$1,415", remaining: "/$2,000" },
        { category: "Restaurant", gradient: "linear-gradient(90deg, #461EE7, #1EB6E7)", progress: 25, amount: "$1,415", remaining: "/$2,000" },
        { category: "Property", gradient: "linear-gradient(90deg, #FF8744, #FF4C25)", progress: 90, amount: "$1,415", remaining: "/$2,000" }
    ];

    return (
        <>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h5>Bar Spendings</h5>
                    <p className="font-sm">Lorem ipsum dolor sit.</p>
                </div>
                <div>
                    <HiDotsVertical className="fs-4" />
                </div>
            </div>

            {spendings.map((item, index) => (
                <div key={index} className="mb-4">
                    <div className="progress rounded-0" role="progressbar" aria-label="Success example" aria-valuenow={item.progress} aria-valuemin={0} aria-valuemax={100}>
                        <div className="progress-bar" style={{ background: item.gradient, width: `${item.progress}%` }}></div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p className="font-sm textDarkGray">{item.category}</p>
                        <p>{item.amount} <span className="textLightGray">{item.remaining}</span></p>
                    </div>
                </div>
            ))}
            <div className="d-flex justify-content-center">
            <button className="btn borderLightGreen textLightGreen w-75 rounded-5 ">VIEW MORE</button>
        
            </div>
        </>
    );
}
