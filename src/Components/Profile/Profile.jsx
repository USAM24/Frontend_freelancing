import React from 'react';
import Style from './Profile.module.css';
import profile from '../../Assets/images/profile2.png';
import facebook from '../../Assets/images/facebook.svg';
import twitter from '../../Assets/images/twitter.svg';
import github from '../../Assets/images/github.svg';
import dribble from '../../Assets/images/dribble.svg';
import linkedin from '../../Assets/images/linkedin.svg';
import { Link } from 'react-router-dom';

function ExperienceItem({ year, role, company }) {
  return (
    <div className="my-3 font-sm">
      <p className="textGray">{year}</p>
      <p>{role}</p>
      <p className="textLightGreen">{company}</p>
    </div>
  );
}

export default function Profile() {
  const experiences = [
    { type: 'employment', year: '2010 - 2015', role: 'Product Designer', company: '@Google' },
    { type: 'employment', year: '2015 - 2017', role: 'UI/UX Designer', company: '@Amazon' },
    { type: 'employment', year: '2017 - 2020', role: 'UI/UX Designer', company: '@Value' },
    { type: 'employment', year: '2020 - Now', role: 'UI/UX Designer', company: '@Fawry' },
    { type: 'education', year: '1996 - 2010', role: 'Student', company: '@Azhar School' },
    { type: 'education', year: '2010 - 2014', role: 'Student', company: '@Cairo University' }
  ];

  return (
    <div className="bgGreen50 py-5">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4 rounded-3 shadow py-5 bg-white d-flex flex-column justify-content-center">
            <div className="d-flex flex-column align-items-center mt-5 py-4">
              <img src={profile} alt="" />
              <h4>Leslie Alexander</h4>
              <h5 className="fw-light textGray">UI/UX Designer</h5>
              <div className="d-flex w-50 justify-content-evenly ">
                <img src={facebook} alt="" />
                <img src={twitter} alt="" />
                <img src={dribble} alt="" />
                <img src={linkedin} alt="" />
                <img src={github} alt="" />
              </div>
              <div>
                <Link to={'/cart'} className="btn btn-lg bgLightGreen text-white px-5 my-5 rounded-5">Hire Now</Link>
              </div>
              <div className="d-flex justify-content-between w-75">
                <div className="d-flex flex-column">
                  <p>Weekly Salary</p>
                  <p className="textGray">500$ per week</p>
                </div>
                <div className="d-flex flex-column">
                  <p>Availability</p>
                  <p className="textGray">10 hrs per day</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-7 px-5 offset-1 rounded-3 shadow py-5 bg-white d-flex flex-column">
            <h3>Overview</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
            <div className="d-flex justify-content-between my-5">
              <div className="d-flex flex-column">
                <h4>Employment History</h4>
                {experiences.filter(item => item.type === 'employment').map((item, i) => <ExperienceItem key={i} {...item} />)}
              </div>
              <div className="d-flex flex-column">
                <h4>Education</h4>
                {experiences.filter(item => item.type === 'education').map((item, i) => <ExperienceItem key={i} {...item} />)}
                <div className="my-lg-3">
                  <h4>Projects</h4>
                  <p className="textGray"><span className="textLightGreen">50 </span>Project related to product design</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
