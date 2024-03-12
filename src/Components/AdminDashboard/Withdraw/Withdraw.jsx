import React ,{ PureComponent } from 'react'
import Style from './Withdraw.module.css'
import { BsArrowDownLeftCircleFill } from "react-icons/bs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


export default function Withdraw() {
    const formatYAxis = (tick, index) => `${index * 20}`;
    const data = [
        {name:'Sunday',uv:4000,pv:2400,amt:2400},
        {name:'Monday',uv:3000,pv:1398,amt:2210},
        {name:'Tuesday',uv:2000,pv:9800,amt:2290}
    ];

    return <>
    <div className="row justify-content-eenly my-4">
        <div className="">
            <div className="d-flex justify-content-between align-items-center">
            <div>
            <h5>Withdraw</h5>
            <h3>$ 45,673</h3>
            <p className="font-sm"><span className="text-danger">-1.6% </span>than last week</p>
            </div>
            <div>
                <BsArrowDownLeftCircleFill className="text-danger fs-1" />  
            </div>
            </div>
            <ResponsiveContainer width="90%" height="75%">
        <BarChart
          width={300}
          height={200}
          data={data}
          margin={{
            top: 40,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis tickFormatter={formatYAxis} />
          <Tooltip />
          <Bar dataKey="pv" fill="#625288"  />
          <Bar dataKey="uv" fill="#F37F58" />
        </BarChart>
            </ResponsiveContainer>
        </div>
    </div>
    </>
}

