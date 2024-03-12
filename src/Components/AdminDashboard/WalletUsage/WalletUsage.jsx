import React from 'react'
import Style from './WalletUsage.module.css'
import { IoMdArrowDropup } from "react-icons/io";
import { MdOutlineShowChart } from "react-icons/md";

export default function WalletUsage() {
    return <>
    
    <div className="p-4 pb-0">
    <p>Weekly Wallet Usage</p>
    <div className="d-flex justify-content-between ">
        <div className="d-flex align-items-center">
        <IoMdArrowDropup />
        <h3 className="mx-2">43% </h3>
        <p className="font-sm textLightGray">than last week</p>
        </div>
        <div className="font-sm d-flex align-items-center">
            <MdOutlineShowChart className="textLightGreen"/>
            <p>4% (30 days)</p>
        </div>
    </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <defs>
        <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="0%" stop-color="#5A45AA"/>
            <stop offset="100%" stop-color="#0CB7CE"/>
        </linearGradient>
    </defs>
    <path fill="url(#gradient)" fill-opacity="1" d="M0,160L13.3,160C26.7,160,53,160,80,181.3C106.7,203,133,245,160,224C186.7,203,213,117,240,96C266.7,75,293,117,320,149.3C346.7,181,373,203,400,186.7C426.7,171,453,117,480,101.3C506.7,85,533,107,560,112C586.7,117,613,107,640,117.3C666.7,128,693,160,720,160C746.7,160,773,128,800,128C826.7,128,853,160,880,192C906.7,224,933,256,960,256C986.7,256,1013,224,1040,208C1066.7,192,1093,192,1120,197.3C1146.7,203,1173,213,1200,186.7C1226.7,160,1253,96,1280,85.3C1306.7,75,1333,117,1360,112C1386.7,107,1413,53,1427,26.7L1440,0L1440,320L1426.7,320C1413.3,320,1387,320,1360,320C1333.3,320,1307,320,1280,320C1253.3,320,1227,320,1200,320C1173.3,320,1147,320,1120,320C1093.3,320,1067,320,1040,320C1013.3,320,987,320,960,320C933.3,320,907,320,880,320C853.3,320,827,320,800,320C773.3,320,747,320,720,320C693.3,320,667,320,640,320C613.3,320,587,320,560,320C533.3,320,507,320,480,320C453.3,320,427,320,400,320C373.3,320,347,320,320,320C293.3,320,267,320,240,320C213.3,320,187,320,160,320C133.3,320,107,320,80,320C53.3,320,27,320,13,320L0,320Z"/>
</svg>

    </>
}

