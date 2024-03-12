import React, { useState } from 'react'
import Style from './FindWork.module.css'
import { RiArrowRightDoubleFill } from "react-icons/ri";
import { ImRadioChecked } from "react-icons/im";

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
        {hours:'Hourly'},
        {posted:'Posted 2 days ago'},
        {hoursNeeded:'30 + hrs / week'},
        {hoursNeededTitle:'Hours Needed'},
        {experiencedLevel:'Intermediate'},
        {experiencedLevelTitle:'Experience Level'},
        {description : 'Our company is looking for someone who is an expert in Web Development, SEO Development, Creating Landing Pages, and Ad Creation.'},
        {adCreative:'Ad Creative'},
        {editing:'Editing'},
        {shopify:'Shopify'},
        {seeMore:'See More'},

    ]

    const [selectedType, setSelectedType] = useState('');

    const handleRadioChange = (event) => {
      setSelectedType(event.target.value);
    };

    return <>
    <div className="container py-5">
        <div className="my-4">
            <h5>Find Work <span className="textLightGreen"><RiArrowRightDoubleFill /> Find by your skills</span></h5>
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
                <div className="d-flex textLightGray">
                <p>{advertisingData[1].hours}</p>
                <p>-</p>
                <p>{advertisingData[2].posted}</p>
                </div>
              <div className="my-3">
              <div className="d-flex justify-content-between m">
                <p>{advertisingData[3].hoursNeeded}</p>
                <p>{advertisingData[5].experiencedLevel}</p>
                </div>
                <div className="d-flex justify-content-between textLightGray font-sm">
                <p>{advertisingData[4].hoursNeededTitle}</p>
                <p>{advertisingData[6].experiencedLevelTitle}</p>
                </div>
              </div>
                <p className="font-sm">{advertisingData[7].description}</p>
                <div className="my-3">
                    <button className="btn px-4 bgLightGray textDarkGray btn-sm rounded-5">{advertisingData[8].adCreative}</button>
                    <button className="btn px-4 bgLightGray textDarkGray btn-sm rounded-5 mx-3">{advertisingData[9].editing}</button>
                    <button className="btn px-4 bgLightGray textDarkGray btn-sm rounded-5">{advertisingData[10].shopify}</button>
                </div>
                <div className="d-flex w-100 justify-content-center">
                    <button className="btn bgLightGreen text-white">{advertisingData[11].seeMore}</button>
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

