import React from "react";
import Style from '../Opportunities/Opportunities.module.css'
import gitlab from '../../Assets/images/gitlab.svg'



const Opportunities = () => {

  const JobCategory = ({ category, jobs }) => {
    const colorClass = jobs.color.startsWith("#");
    const colorValue = colorClass ? jobs.color : "";
  
    return (
      <div className="d-flex mt-4">
        <div className={`mb-1 fs-5 fw-bold mx-3 `}>{category}</div>
        <div className="justify-content-center py-1 text-lg fw-bold rounded-2 p-2" style={{ backgroundColor: colorValue }}>{jobs.count}</div>
      </div>
    );
  };
  
  const jobCategoriesData = [
    { category: "Product Management", jobs: { count: "34", color: "#E2EFCD" } },
    { category: "Design", jobs: { count: "92", color: "#FDC0AE" } },
    { category: "Development", jobs: { count: "104", color: "#5AFEF4" } },
    { category: "Marketing", jobs: { count: "89", color: "#FEA7D5" } },
    { category: "Customer Service", jobs: { count: "54", color: "#00A79D" },  },
  ];



  const JobCard = ({ title, type, category, salary, timeAgo, companyImg, companySize, jobsAvailable, company }) => (
    <div className="">
      <div className={`${Style.bgcolor} d-flex flex-column py-4 px-3 rounded-2 text-white`}>
        <h4 className="fw-bold text-dark">{title}</h4>
        <div className="d-flex gap-3 mt-4">
          <div className="justify-content-center px-3 py-2 text-dark rounded-5" style={{backgroundColor:'#BFDC91'}}>{type}</div>
          <div className="justify-content-center px-3 py-2 text-dark rounded-5" style={{backgroundColor:'#BFDC91'}}>{category}</div>
        </div>
        <div className="text-dark my-4">{salary}</div>
        <div className="d-flex justify-content-end align-items-end text-xs textLightGreen">{timeAgo}</div>
        <div className="d-flex mt-2 justify-content-between align-items-center">
          <div className="d-flex gap-2 text-dark">
            <img src={companyImg} alt={`${company} logo`} className="me-auto bg-dark rounded-3" style={{ width: "44px", height: "44px" }} />
            <div className="d-flex flex-column">
              <div>{company}</div>
              <div className="fw-bold">{companySize}</div>
            </div>
          </div>
          <div>
          <p className="m-0 text-dark rounded-3 px-1" style={{backgroundColor:'#FDC0AE'}}>{jobsAvailable} Jobs</p>
          </div>
        </div>
      </div>
    </div>
  );

  const jobCardsData = [
    { title: "Senior Designer", type: "Full Time", category: "Design", salary: "25K$ - 45K$", timeAgo: "4hour ago", company: "Hotjar", companyImg: "https://cdn.builder.io/api/v1/image/assets/TEMP/798d5591fba11af289ccc88457252cabb2038dae4c0b60b059fb5b00bcf0cf0b?apiKey=8862ed90af6641a3bff92056e25351f6&", companySize: "140-300", jobsAvailable: "40" },
    { title: "Creative Director", type: "Full Time", category: "Design", salary: "25K$ - 45K$", timeAgo: "8hour ago", company: "Github", companyImg: "https://cdn.builder.io/api/v1/image/assets/TEMP/f5ee3db7aaf887cbe73a571326c94ca4602f1720d259e36daf3d4cf4de1f3d99?apiKey=8862ed90af6641a3bff92056e25351f6&", companySize: "6200-4000", jobsAvailable: "75" },
  ];
  



  return (
    <div className="container">
      <header className="my-5">
        <h1 className="fw-bold"><span className="textLightGreen">Latest</span> Job Opportunities</h1>
      </header>
      <main className="">
        <section className="row">

        <div className="col-md-3">
           {jobCategoriesData.map((categoryData) => (
              <JobCategory key={categoryData.category} {...categoryData} />
            ))}
           </div>

                  <div className={`${Style.customRow} col-md-3 flex-column py-4 px-3 rounded-2 text-white`}>
                <h4 className="fw-bold text-white">Product Designer</h4>
                <div className="d-flex gap-3 mt-4">
                  <div className="justify-content-center px-3 py-2 text-white bg-dark rounded-5">Full Time</div>
                  <div className="justify-content-center px-3 py-2 text-white bg-dark rounded-5">Product</div>
                </div>
                <div className="my-4" style={{color:'#5AFEF4'}}>34K$ - 45K$</div>
                <div className="d-flex justify-content-end align-items-end text-xs text-white">1hour ago</div>
                <div className="d-flex mt-2 justify-content-between align-items-center">
              <div className="d-flex gap-2 text-white">
                <img src={gitlab} alt={`Gitlab logo`} className="me-auto bg-white rounded-3" style={{ width: "44px", height: "44px" }} />
                <div className="d-flex flex-column">
              <div>GitLab</div>
              <div className="fw-bold">1200-3000</div>
            </div>
          </div>
          <div>
          <p className="m-0 text-dark rounded-3 px-1" style={{backgroundColor:'#5AFEF4'}}>20 Jobs</p>
          </div>
        </div>
      </div>
    

        {jobCardsData.map((jobData, index) => (
          <div className="col-md-3" key={index}>
            <JobCard {...jobData} />
          </div>
        ))}
        </section>
      </main>
    </div>
  );
};

export default Opportunities;
