import React, { useState } from 'react'
import Style from './FindFreelancers.module.css'
import { RiArrowRightDoubleFill } from "react-icons/ri";
import { ImRadioChecked } from "react-icons/im";
import wade from '../../Assets/images/wade.svg'
import floyed from '../../Assets/images/floyed.svg'
import devon from '../../Assets/images/devon.svg'
import ralph from '../../Assets/images/ralph.svg'
import darlene from '../../Assets/images/wade.svg'
import brooklyn from '../../Assets/images/brooklyne.svg'

export default function FindWork() {

    const typeOfWork = [
        {title:"All"},
        {title:"Development & IT"},
        {title:"Design & Creative"},
        {title:"Finance & Accounting"},
        {title:"Admin & Customer Support"},
        {title:"All"},
        {title:"Sales & Marketing"},
        {title:"Engineering"},
        {title:"Writing & Translation"},
    ]

    const advertisingData =[
        {title:'Creative Person For Advertiising'},
        {personImg : [
            {image:wade}, 
            {image:floyed}, 
            {image:ralph},
            {image:darlene},
            {image:brooklyn},
            {image:devon},
        ]},
        {personName : [
            {name:"Wade Warren"},
            {name:"Floyed Miles"},
            {name:"Devon Lane"},
            {name:"Ralph Edward"},
            {name:"Darlene Robertson"},
            {name:"Brooklyn Simmons"} 
        ]},
        {description : 'Our company is looking for someone who is an expert in Web Development, SEO Development, Creating Landing Pages, and Ad Creation.'},
        {jobType: [
            {type:"Full Time"},
            {type:"Half Time"},
            {type:"Hybrid"},
        ]},
        {meeting:'Schedule Meeting'},
        {message:'Send Message'},
        

    ]

    const [selectedType, setSelectedType] = useState('');

    const handleRadioChange = (event) => {
      setSelectedType(event.target.value);
    };

    return <>
    <div className="container py-5">
        <div className="my-4">
            <h5>Find Freelancers <span className="textLightGreen"><RiArrowRightDoubleFill /> Find by your needed skills</span></h5>
        </div>
        <div className="row">
            <div className="col-md-3 py-3 rounded-4 d-flex flex-column bgGreen50" style={{height:'900px'}}>
                <h6 className="textDarkGray">Type of Work</h6>
      {typeOfWork.map((type, index) => (
        <div key={index} className="mx-3">
         <input
            className="my-3"
            type="radio"
            id={`radioButton${index}`}
            name="typeOfWork"
            value={type.title}
            checked={selectedType === type.title}
            onChange={handleRadioChange}
          />
          <label htmlFor={`radioButton${index}`} style={{fontSize:'13px'}} className="fs-6 ms-2">{type.title}</label>
        </div>
      ))}
            </div>

         <div className="col-md-9">
         <div className="row gy-4">
    {Array.from({ length: 6 }).map((_, index) => (
        <div className="col-md-6" key={index}>
            <div className="card shadow p-4 border-0 rounded-0">
                <h4>{advertisingData[0].title}</h4>
                <div className="d-flex textGray  my-3">
               <img src={advertisingData[1].personImg[index].image} alt="" />
               <p className="mx-2 ">{advertisingData[2].personName[index].name}</p>
                </div>


                <p className="font-sm">{advertisingData[3].description}</p>
                <div className="my-3 d-flex">
                {advertisingData[4].jobType.map((type , i) => (
                        <button key={i} className="btn btn-sm px-4 bgLightGray textDarkGray font-sm rounded-5 mx-2">{type.type}</button>
                    ))}
                </div>
                <div className="d-flex w-100 justify-content-evenly">
                    <button className="btn bgLightGreen text-white rounded-5 btn-sm px-4">{advertisingData[5].meeting}</button>
                    <button className="btn bgLightGreen textLightGreen borderLightGreen bg-white rounded-5 btn-sm px-4">{advertisingData[6].message}</button>
                </div>
            </div>
        </div>
    ))}
</div>

         </div>
          
        </div>
    </div>
    </>
}

