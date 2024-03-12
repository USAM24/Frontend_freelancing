import React from 'react'
import Style from './PreviousTransactions.module.css'
import { PiArrowCircleUpBold } from "react-icons/pi";
import { PiArrowCircleDownBold } from "react-icons/pi";

export default function PreviousTransactions() {
    const transactions = [
        {icon:<PiArrowCircleDownBold /> , title:"XYZ Store ID" , type:"Cashback" , date:"June 4, 2020" , time:"05:34:45 AM" , amount:"+$5,553" , status:"Completed"},
        {icon:<PiArrowCircleUpBold /> , title:"Chef Renata" , type:"Transfer" , date:"June 4, 2020" , time:"05:34:45 AM" , amount:"-$167" , status:"Pending"},
        {icon:<PiArrowCircleDownBold /> , title:"Cindy Alexandro" , type:"Transfer" , date:"June 4, 2020" , time:"05:34:45 AM" , amount:"+$5,553" , status:"Canceled"},
        {icon:<PiArrowCircleDownBold /> , title:"Paipal" , type:"Transfer" , date:"June 4, 2020" , time:"05:34:45 AM" , amount:"+$5,553" , status:"Completed"},
        {icon:<PiArrowCircleUpBold /> , title:"Hawkins Jr." , type:"Transfer" , date:"June 4, 2020" , time:"05:34:45 AM" , amount:"-$167" , status:"Completed"},
    ]

    return <>
    <div className="d-flex justify-content-between">
        <div>
        <h5>Previous Transaction</h5>
        <p className="font-sm textGray">Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="d-flex">
            <button className="btn-sm btn rounded-5 bgLightGray textDarkGray font-sm my-3">Monthly</button>
            <button className="btn-sm btn rounded-5 bgLightGray textDarkGray font-sm my-3">Weekly</button>
            <button className="btn-sm btn rounded-5 bgLightGreen text-white font-sm my-3">Today</button>
        </div>
    </div>

    <table className="table table-hover">

  <tbody>
    {transactions.map((item, i) => (
      <tr key={i}>
        <td className={`fs-3  ${item.icon.type.displayName === "PiArrowCircleDownBold" ? "text-success" : "text-danger"}`}>
          {item.icon}
        </td>
        <td className="text-center font-sm fw-medium">
          <p>{item.title}</p>
          <p className="textGray">{item.type}</p>
        </td>
        <td className="text-center font-sm fw-medium">{item.date}</td>
        <td className="text-center font-sm fw-medium">{item.time}</td>
        <td className="text-center font-sm fw-medium">{item.amount}</td>
        <td className={`text-center font-sm fw-medium ${item.status === "Completed" ? "text-success" : (item.status === "Pending" ? "text-danger" : "textGray")}`}>
          {item.status}
        </td>
      </tr>
    ))}
  </tbody>
</table>


    </>
}

