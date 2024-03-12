import React from 'react';
import Style from './Home.module.css';
import girl from '../../Assets/images/girl.png';
import Opportunities from '../Opportunities/Opportunities';
import TalentByCategory from '../TalentByCategory/TalentByCategory';
import Portfolios from '../Portfolios/Portfolios';
import Subscription from '../Subscription/Subscription';

const stats = [
  { 
    number: "30K", 
    description: "People got hired", 
    imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d484ba7cc030b681d5f8f5e193546e883c49320e0993a25855e3f5ed44004fef?apiKey=8862ed90af6641a3bff92056e25351f6&", 
    imgAlt: "People got hired icon" 
  },
];

const Home = () => {
  return <>
    <div className={`${Style.bgcolor} pt-5`}>
      <div className="pt-5 mt-5 container">
        <div className="row justify-content-between position-relative align-items-start" style={{ height: '400px' }}>
          <div className="col-md-4">
            <div className="container d-flex flex-column align-items-start text-xl text-neutral-900 mt-10">
              <div className="row">
                <div className="col d-flex gap-3 align-items-center">
                  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/883573b3a168839ca5dc8959f499d21b886122994c969d830ba850f3b6c25e7f?apiKey=8862ed90af6641a3bff92056e25351f6&" alt="Company Logo" className="w-52" loading="lazy" />
                  <p className="m-0 fs-5">Find Your Dream Job</p>
                </div>
              </div>
              <div>
                <h2 className="fw-bold">Freelance Jobs and Talents at Your Fingertips</h2>
              </div>
              <div className="row mt-4 fs-5">
                <p>Connect with top freelancers and clients on our platform! Find your perfect match for your next project.</p>
              </div>
              <div className="row d-flex gap-5 justify-content-between align-items-center  w-100  text-white">
                <div className=" d-flex gap-5 justify-content-evenly align-items-center ">
                  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b314fe8d2e42130a8405e38fdd0fc1048770edb685168967cc2cddaf95ad656?apiKey=8862ed90af6641a3bff92056e25351f6&" alt="Post Project Icon" className="mt-4 w-25" loading="lazy" />
                  <button className={`${Style.boxShadow} h-50 btn-lg rounded-4 bgLightGreen text-white btn px-4`}>Post Project</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5 ms-auto position-absolute end-0 bottom-0">
            <section className="d-flex flex-column mt-5 align-items-center ">
              <div className="position-absolute bottom-50 start-50  translate-middle-x">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c209c095726f87c1924596ae3134a99d3b6497bbc673090f5f7479f81190ab3?apiKey=8862ed90af6641a3bff92056e25351f6&" alt="" className="mt-5 mb-3" style={{ width: '400px' }} />
              </div>
              <div className="">
                <div className="d-flex align-items-end  position-absolute bottom-0 start-50  translate-middle-x">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3a7c1fd818ce2d081975d7e1eda4724d269254af44e0067fcc7895929bdc710?apiKey=8862ed90af6641a3bff92056e25351f6&" alt="" className="mt-2 " style={{ width: '46px' }} />
                  <img src={girl} className="" alt="" />
                  <div className="position-absolute top-50 end-0 ">
                    {stats.map((stat, index) => (
                      <div key={index} className="d-flex flex-column align-items-center p-3 bg-white rounded-3 shadow-lg" style={{ maxWidth: '183px' }}>
                        <div className="d-flex gap-2 align-items-center text-center">
                          <div className="flex-grow-1">{stat.number}</div>
                          <img loading="lazy" src={stat.imgSrc} alt={stat.imgAlt} className="shrink-0 my-auto" style={{ width: '25px' }} />
                        </div>
                        <div className="mt-3 text-sm text-center">{stat.description}</div>
                      </div>
                    ))}
                  </div>
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3a7c1fd818ce2d081975d7e1eda4724d269254af44e0067fcc7895929bdc710?apiKey=8862ed90af6641a3bff92056e25351f6&" alt="" className="mt-2 img-fluid" style={{ width: '46px' }} />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
 
 <div className="container">
 <div className={`${Style.boxShadow2} row justify-content-between rounded-4   align-items-center p-5`}>
  <div className="col-md-3 text-center ">
  <main className="flex grow justify-content-center align-items-center">
      <img 
        loading="lazy" 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1e4163f823f13dbd37a38d9802b55df895ce167ed8e43cd161eccb57c92cb4c?apiKey=8862ed90af6641a3bff92056e25351f6&" 
        alt="" 
        className="" 
      />
      <h2 className="mt-4 fw-bold textGray">
        Create Account
      </h2>
      <p className="textLightGray text-center fs-4 ">
        First you have to create an account here
      </p>
    </main>
  </div>

  <div className="col-md-3 text-center">
  <main className="flex justify-content-center align-items-center">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc529e17d0af99ac699259b3de851e320e0ff461fe61915c332489874ef1e86b?apiKey=8862ed90af6641a3bff92056e25351f6&"
        alt="Freelance work search illustration"
        className=""
        style={{width:'110px'}}
      />
      <h2 className="mt-4 fw-bold ">
        Search work
      </h2>
      <p className="fs-4  text-center textLightGray">
        Search the best freelance work here
      </p>
    </main>
  </div>

  <div className="col-md-3 text-center">
  <main className="flex justify-content-center align-items-center">
  <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/37128a5c699dd29f2d7b3499594f00915efc7e2ccab5fd8f9c9b604d2bfe4178?apiKey=8862ed90af6641a3bff92056e25351f6&"
        alt="Decorative"
        className="self-center max-w-full aspect-square w-[111px]"
      />
      <h2 className="mt-4 fw-bold ">
      Save and apply
      </h2>
      <p className="fs-4  text-center textLightGray">
      Apply or save and start your work
      </p>
    </main>
  </div>
 </div>
 </div>
 
    <div className="container">
    <div className="my-5">
    <Opportunities />
    </div>
    </div>
    <div className="my-5">
   <TalentByCategory /> 
   </div>
    <div className="my-5">
   <Portfolios /> 
   </div>
    <div className="my-5">
   <Subscription /> 
   </div>
    </>
};

export default Home;
