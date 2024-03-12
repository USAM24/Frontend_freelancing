import React from 'react';
import Style from './Spendings.module.css';
import { SimpleGauge } from "react-gauges";

export default function Spendings() {
    const spendings = [
        { gradient: "linear-gradient(227deg, #AC39D4 0%, #D439C5 100%)", label: "Investment", amount: "$1,415", remaining: "/$2,000" },
        { gradient: "linear-gradient(227deg, #40D4A8 0%, #40BAD4 100%)", label: "Installment", amount: "$1,567", remaining: "/$5,000" },
        { gradient: "linear-gradient(227deg, #FF827A 0%, #FFA825 100%)", label: "Restaurant", amount: "$487", remaining: "/$10,000" },
        { gradient: "linear-gradient(227deg, #461EE7 0%, #1EB6E7 100%)", label: "Property", amount: "$3,890", remaining: "/$4,000" }
    ];

    const percentages = [
        { label: "Spendings 1", amount: 76, remaining: "Remaining 1", gradient: "linear-gradient(227deg, #AC39D4 0%, #D439C5 100%)" },
        { label: "Spendings 2", amount: 30, remaining: "Remaining 2", gradient: "linear-gradient(227deg, #40D4A8 0%, #40BAD4 100%)" },
        { label: "Spendings 3", amount: 5, remaining: "Remaining 3", gradient: "linear-gradient(227deg, #FF827A 0%, #FFA825 100%)" },
        { label: "Spendings 4", amount: 96, remaining: "Remaining 4", gradient: "linear-gradient(227deg, #461EE7 0%, #1EB6E7 100%)" }
    ];

    const GaugeComponent = ({ amount, gradient }) => (
        <div className="rounded-4 mb-3" style={{ background: gradient, width: "150px", height: "150px" }}>
            <SimpleGauge value={amount} indicatorVisible={false} barColor="#ffffff" barBaseColor="#d9d9d9d9" labelColor="#ffffff" isTotal={true} barWidth={15} />
        </div>
    );
    

    const SpendingComponent = ({ label, amount, remaining, gradient }) => (
        <div key={label} className="d-flex justify-content-between">
            <div className="px-1 py-4 rounded-4" style={{ background: gradient }}></div>
            <div>
                <p>{label}</p>
                <p className="text-dark font-sm">{amount} <span className="textLightGray">{remaining}</span></p>
            </div>
        </div>
    );

    return (
        <div>
            <h5>Spendings</h5>
            <div className="row justify-content-between">
                <div className="col-md-3 mx-auto p-0 ps-2 d-flex flex-column justify-content-between">
                    {spendings.map((item) => (
                        <SpendingComponent key={item.amount} {...item} />
                    ))}
                </div>
                <div className="col-md-8  justify-content-around d-flex flex-wrap">
                    {percentages.map((item) => (
                        <GaugeComponent key={item.label} {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
}
