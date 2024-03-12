import React from 'react'
import Style from './TalentByCategory.module.css'

const TalentByCategory = () => {


    const jobCategoriesData = [
        { image: {src:"https://cdn.builder.io/api/v1/image/assets/TEMP/926cf43ae1f542c16e0aeb60946084359cb295081c6eea9e6b1e5dafe5fe3d1c?apiKey=8862ed90af6641a3bff92056e25351f6&" , alt:"development"} , title: "Develpment & IT" , ratingStar:"https://cdn.builder.io/api/v1/image/assets/TEMP/b1144e0f5d37076d7a1769bf2c938b3dc9b8c9c2ff29f4d699d64b7461f999a1?apiKey=8862ed90af6641a3bff92056e25351f6&" , rating:"4.85/5" , skills:"349 Skills" },
        { image: {src:"https://cdn.builder.io/api/v1/image/assets/TEMP/f3e2c8c2d722a8bf60f41032a7b64544cae654ab1cd412b4b84aca8dce4fa059?apiKey=8862ed90af6641a3bff92056e25351f6&" , alt:"Design" } ,title:"Design & Creative" , ratingStar:"https://cdn.builder.io/api/v1/image/assets/TEMP/b1144e0f5d37076d7a1769bf2c938b3dc9b8c9c2ff29f4d699d64b7461f999a1?apiKey=8862ed90af6641a3bff92056e25351f6&" , rating:"4.85/5" , skills:"349 Skills" },
        { image: {src:"https://cdn.builder.io/api/v1/image/assets/TEMP/8c4310f5c23e36c74268b59b4fc749f6c81151806d11db44fc622bbbffc2f462?apiKey=8862ed90af6641a3bff92056e25351f6&" , alt:"development"} , title: "Sales & Marketing" , ratingStar:"https://cdn.builder.io/api/v1/image/assets/TEMP/b1144e0f5d37076d7a1769bf2c938b3dc9b8c9c2ff29f4d699d64b7461f999a1?apiKey=8862ed90af6641a3bff92056e25351f6&" , rating:"4.85/5" , skills:"349 Skills" },
        { image: {src:"https://cdn.builder.io/api/v1/image/assets/TEMP/3d535627e3c9815706482bef02ff414fccd59e5d41a4d9340635f8fce734a1d3?apiKey=8862ed90af6641a3bff92056e25351f6&" , alt:"development"} , title: "Customer Support" , ratingStar:"https://cdn.builder.io/api/v1/image/assets/TEMP/b1144e0f5d37076d7a1769bf2c938b3dc9b8c9c2ff29f4d699d64b7461f999a1?apiKey=8862ed90af6641a3bff92056e25351f6&" , rating:"4.85/5" , skills:"349 Skills" },
        { image: {src:"https://cdn.builder.io/api/v1/image/assets/TEMP/d85a04d3bb31fadb90c74e8e146a139c691e34388c6a0d92d5e88cbcd55e80c7?apiKey=8862ed90af6641a3bff92056e25351f6&" , alt:"development"} , title: "Finance" , ratingStar:"https://cdn.builder.io/api/v1/image/assets/TEMP/b1144e0f5d37076d7a1769bf2c938b3dc9b8c9c2ff29f4d699d64b7461f999a1?apiKey=8862ed90af6641a3bff92056e25351f6&" , rating:"4.85/5" , skills:"349 Skills" },
        { image: {src:"https://cdn.builder.io/api/v1/image/assets/TEMP/e195d259be570879e08c8aee6eafdc3b82070af329646ec750ffa5fd2d339ec4?apiKey=8862ed90af6641a3bff92056e25351f6&" , alt:"development"} , title: "Engineering" , ratingStar:"https://cdn.builder.io/api/v1/image/assets/TEMP/b1144e0f5d37076d7a1769bf2c938b3dc9b8c9c2ff29f4d699d64b7461f999a1?apiKey=8862ed90af6641a3bff92056e25351f6&" , rating:"4.85/5" , skills:"349 Skills" },
        { image: {src:"https://cdn.builder.io/api/v1/image/assets/TEMP/74f357abe2d6440434793561def4f36be432fc3ae16dabbefa426705f0a8d0f4?apiKey=8862ed90af6641a3bff92056e25351f6&" , alt:"development"} , title: "Writing" , ratingStar:"https://cdn.builder.io/api/v1/image/assets/TEMP/b1144e0f5d37076d7a1769bf2c938b3dc9b8c9c2ff29f4d699d64b7461f999a1?apiKey=8862ed90af6641a3bff92056e25351f6&" , rating:"4.85/5" , skills:"349 Skills" },
        { image: {src:"https://cdn.builder.io/api/v1/image/assets/TEMP/2e64d483393439fe0ac6a2ffd5aa5b50645ad589416a4709d7e4d6980310d311?apiKey=8862ed90af6641a3bff92056e25351f6&" , alt:"development"} , title: "Legal" , ratingStar:"https://cdn.builder.io/api/v1/image/assets/TEMP/b1144e0f5d37076d7a1769bf2c938b3dc9b8c9c2ff29f4d699d64b7461f999a1?apiKey=8862ed90af6641a3bff92056e25351f6&" , rating:"4.85/5" , skills:"349 Skills" },
        { image: {src:"https://cdn.builder.io/api/v1/image/assets/TEMP/484bf88d37b2dface8c9c8618e44481cf0fc129dc390887c704c12b8fd5227bb?apiKey=8862ed90af6641a3bff92056e25351f6&" , alt:"development"} , title: "Photography" , ratingStar:"https://cdn.builder.io/api/v1/image/assets/TEMP/b1144e0f5d37076d7a1769bf2c938b3dc9b8c9c2ff29f4d699d64b7461f999a1?apiKey=8862ed90af6641a3bff92056e25351f6&" , rating:"4.85/5" , skills:"349 Skills" },
      ];

      const JobCategoryCard = ({ image, title, ratingStar, rating, skills }) => (
        <div className="px-1 py-5 bg-white rounded-4 mx-auto "> 
          <div className="d-flex justify-content-evenly align-items-center"> 
            <img src={image.src} alt={image.alt} className="w-25 h-25" /> 
            <div className=""> 
              <h3 className="">{title}</h3> 
                <div className="d-flex justify-content-between align-items-center textLightGray">
                    <div className="d-flex align-items-center">
                    <img className="w-75 mx-1" src={ratingStar} /> 
                    <h5 className="m-0 ">{rating}</h5>
                    </div>
                    <h5 className="m-0">{skills}</h5>
                </div>
             
            </div>
          </div>
        </div>
      );

    return <>
   <div className="bgGreen50">
    <div className="container py-5">
    <h2 className="fw-bold "><span className="textLightGreen ">Browse </span>Talent by Categort</h2>
      <div className="row gy-5 my-4 ">
      {jobCategoriesData.map((jobCategory) => (
        <div className="col-md-4" key={jobCategory.title}>
               <JobCategoryCard {...jobCategory} />
        
        </div>
       ))}
      </div>
      <div className="row justify-content-center ">
        <div className="col-md-3 d-flex justify-content-center ">
            <button className="btn text-white bgLightGreen btn-lg fs-4 fw-bold py-3">More Categories</button>
        </div>
      </div>
    </div>
   </div>
    </>
}

export default TalentByCategory;
