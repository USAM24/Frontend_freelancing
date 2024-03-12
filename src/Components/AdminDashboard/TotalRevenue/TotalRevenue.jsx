import React , { PureComponent } from 'react'
import Style from './TotalRevenue.module.css'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaCircleNotch } from "react-icons/fa6";
import { HiDotsVertical } from "react-icons/hi";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import {  XAxis, YAxis, CartesianGrid, LineChart, Line, Legend, Tooltip } from "recharts";

export default function TotalRevenue() {
    const data = [
        {name: 'S',uv: 4000,pv: 2400,amt: 2},
        {name: 'M',uv: 3000,pv: 1398,amt: 2290},
        {name: 'T',uv: 2000,pv: 9800,amt: 2290,},
        {name: 'W',uv: 2780,pv: 3908,amt: 2000,},
        {name: 'T',uv: 1890,pv: 4800,amt: 2181,},
        {name: 'F',uv: 2390,pv: 3800,amt: 2500,},
        {name: 'S',uv: 3490,pv: 4300,amt: 2100,},
      ];


    return <>
    <div className="d-flex justify-content-between">
        <p className="fw-bold">Total Revenue</p>

        <div className="d-flex w-50 justify-content-evenly align-items-center">
            <div className="d-flex align-items-center">
                <FaCircleNotch  className="me-1"/>
                <p>Monthly</p>
            </div>
            <div className="d-flex align-items-center">
                <IoMdCheckmarkCircleOutline className="textLightGreen me-1" />
                <p>Weekly</p>
            </div>
            <HiDotsVertical className="fs-4"/>
        </div>
    </div>

    <div className="d-flex justify-content-between my-4 ">
        <div className="d-flex">
        <BsFillArrowUpRightCircleFill className="fs-2 text-success mx-2" />
        <h3 className="fw-bold">$563,982.74</h3>
        </div>
        <div className="font-sm">
            <p className="text-success">+0.6%</p>
            <p className="textLightGray">than last week</p>
        </div>
    </div>

    <div>
    <LineChart width={500} height={200} className="w-100" data={data} margin={{ top: 20, right: 10, left: 20, bottom: 5 }}>
    <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="pv" stroke="#6DAD04"  activeDot={{ r: 8 }} />
       
                </LineChart>
    </div>

    </>
}

