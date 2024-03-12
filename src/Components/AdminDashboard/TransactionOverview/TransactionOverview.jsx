import React from 'react'
import Style from './TransactionOverview.module.css'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import number from '../../Assets/images/number.svg'
import analytics from '../../Assets/images/analytics.svg'

export default function TransactionOverview() {
    const formatYAxis = (tick, index) => `${index * 20}`;
    const data = [
        {Expense:4000,Income:2400,amt:2400},
        {Expense:3000,Income:1398,amt:2210},
        {Expense:2000,Income:9800,amt:2290},
        {Expense:2000,Income:9800,amt:2290},
    ];
    return <>
    <h5>Transaction Overview</h5>
    <p className="font-sm textDarkGray">Lorem ipsum dolor sit amet consectetur.</p>
    <ResponsiveContainer width="90%" height="75%">
  <BarChart
    width={300}
    height={200}
    data={data}
    margin={{
      top: 20,
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey={"0"} />
    <YAxis tickFormatter={formatYAxis} />
    <Tooltip />
    <Legend layout="horizontal" verticalAlign="top" iconSize={15} iconType='circle'/>
    <Bar dataKey="Income" fill="#09BD72" />
    <Bar dataKey="Expense" fill="#F37F58" />
  </BarChart>
</ResponsiveContainer>

<div className="d-flex justify-content-between">
    <div className="d-flex font-sm">
    <p>Number</p>
        <img src={number} alt="" />
        
    </div>
    <div className="d-flex font-sm">
    <p>Analytics</p> 
        <img src={analytics} alt="" />
        
    </div>
</div>
    </>
}

