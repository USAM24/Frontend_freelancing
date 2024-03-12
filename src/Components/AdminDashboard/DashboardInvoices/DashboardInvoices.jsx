import React from 'react';
import Style from './DashboardInvoices.module.css';
import { PiNewspaperClipping } from 'react-icons/pi';

function Invoices({ num, icon, title, img }) {
  return (
    <div className="mb-4">
      <div className="d-flex align-items-center mb-2">
        <div>
          <h4 className="fw-bold">{num}</h4>
          <p>{title}</p>
        </div>
        <div className="ms-auto fs-1 textDarkGray">{icon}</div>
      </div>
      <img src={img} alt="" className="img-fluid" />
    </div>
  );
}

export default function DashboardInvoices() {
  const invoices = [
    { num: "2,478", icon: <PiNewspaperClipping />, title: "Total Invoices", img: "https://cdn.builder.io/api/v1/image/assets/TEMP/a3bb9bba824a76b8185f1517fa227570ef6dfbbc780919d9b17bb5778ac6738f?apiKey=8862ed90af6641a3bff92056e25351f6&" },
    { num: "983", icon: <PiNewspaperClipping />, title: "Paid Invoices", img: "https://cdn.builder.io/api/v1/image/assets/TEMP/9c0f91037a6c1ca7e31eb122aa36d9a414c3f07dee38074d35409a849eec0fab?apiKey=8862ed90af6641a3bff92056e25351f6&" },
    { num: "1,256", icon: <PiNewspaperClipping />, title: "Unpaid Invoices", img: "https://cdn.builder.io/api/v1/image/assets/TEMP/24a9f90955399a7725b65ef3b3314cfb8ad83941a7fce0dee44f9b148423a6aa?apiKey=8862ed90af6641a3bff92056e25351f6&" },
    { num: "652", icon: <PiNewspaperClipping />, title: "Total Invoices", img: "https://cdn.builder.io/api/v1/image/assets/TEMP/bba49f5ea269f9a0bf40686b544dede8d3a665d0fea798a6a59d6d9c72bb98c1?apiKey=8862ed90af6641a3bff92056e25351f6&" },
  ];

  return (
    <div className="row gy-4 justify-content-">
      {invoices.map((item, i) => (
        <div className="col-md-6  shadow-sm rounded-3" key={i}>
          <Invoices {...item} />
        </div>
      ))}
    </div>
  );
}


