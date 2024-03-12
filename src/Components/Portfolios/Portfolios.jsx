import React from 'react'
import Style from './Portfolios.module.css'
import { FaArrowRightLong } from "react-icons/fa6";

const Portfolios = () =>  {

    const portfoliosData = [
        {id:1 , image:"https://cdn.builder.io/api/v1/image/assets/TEMP/eeebf92c8de6d135abd7e20686a95c068f224ad221dc589ec8fde3cde7701afd?apiKey=8862ed90af6641a3bff92056e25351f6&" , name:"Jenny Wilson" , job:"UI/UX Designer" , icon:<><FaArrowRightLong /></>},
        {id:2 , image:"https://cdn.builder.io/api/v1/image/assets/TEMP/051e3c41ed64796e67bdb441d86d2ecc4c604617efa144383463bffb65c86a73?apiKey=8862ed90af6641a3bff92056e25351f6&" , name:"Dianne Russel" , job:"Graphic Designer" , icon:<><FaArrowRightLong /></>},
        {id:3 , image:"https://cdn.builder.io/api/v1/image/assets/TEMP/5e9d4fc34369224eebb8a9a308235dd48bbaf39edb4729bc5c2cfb3b6114a713?apiKey=8862ed90af6641a3bff92056e25351f6&" , name:"Albert Flores" , job:"Developer" , icon:<><FaArrowRightLong /></>},
    ]


    const PortfolioData = ({image , name , job , icon}) => (
        <div className="card rounded-4 shadow">
        <img src={image} className="card-img-top" alt="..."/>
        <div className="card-body">
            <div className="d-flex justify-content-between ">
                <div>
                <h3 className="card-title fw-normal">{name}</h3>
                <h5 className="card-text textLightGray fw-light">{job}</h5>
                </div>
               <div className="textLightGreen fs-4">{icon}</div>
            </div>
        </div>
        </div>
    )


    return<>
        <div className="container py-5">
            <div className="text-center">
                <h3 className="textLightGray">Logos, websites, book covers & more!</h3>
                <h1>Checkout The Best <span className="textLightGreen">Portfolios</span> Here</h1>
            </div>

            <div className="row justify-content-center my-5">
                {portfoliosData.map((card) => (
                    <div className="col-md-4" key={card.id}>
                        <PortfolioData {...card} />
                    </div> 
                ))}
            </div>
            <div className="row">
            <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active bgLightGreen" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" className="bgGreen50"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3" className="bgGreen50"></button>
            </div>
            </div>

               
            </div>
        </div>
    </>
}

export default Portfolios;