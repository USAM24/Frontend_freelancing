import React from 'react';
import Style from './AdminDashboard.module.css';
import logo from '../../Assets/images/logo.svg';
import { PiSquaresFourBold } from 'react-icons/pi';
import { IoMdArrowDropright } from 'react-icons/io';
import { CiWallet, CiUser } from 'react-icons/ci';
import { TbActivityHeartbeat, TbMessage2 } from 'react-icons/tb';
import { PiNewspaperClipping } from 'react-icons/pi';
import { CiCreditCard1 } from 'react-icons/ci';
import { GiSettingsKnobs } from 'react-icons/gi';
import DashboardNavbar from './DashboardNavbar/DashboardNavbar';
import DashboardInvoices from './DashboardInvoices/DashboardInvoices';
import TotalRevenue from './TotalRevenue/TotalRevenue';
import Withdraw from './Withdraw/Withdraw';
import QuickTransfer from './QuickTransfer/QuickTransfer';
import BarSpendings from './BarSpendings/BarSpendings';
import WalletUsage from './WalletUsage/WalletUsage';
import Spendings from './Spendings/Spendings';
import PreviousTransactions from './PreviousTransactions/PreviousTransactions';
import TransactionOverview from './TransactionOverview/TransactionOverview';

function MainMenuItem({ icon, title, addings }) {
  return (
    <div className={`my-3 d-flex align-items-center ${title === 'Dashboard' ? 'bgLightGreen text-white rounded-end-4' : ''}`}>
      <div className="d-flex align-items-center">
        <p className="ms-5 fs-4">{icon}</p>
        <p>{title}</p>
      </div>
      {addings && <div className={`ms-auto ${addings === 75 ? 'bgLightGreen rounded-pill p-1 text-white' : ''}`}>{addings}</div>}
    </div>
  );
}

function OtherMenuItem({ icon, title, addings }) {
  return (
    <div className="my-3 d-flex align-items-center">
      <div className="d-flex align-items-center">
        <p className="ms-5 fs-4">{icon}</p>
        <p>{title}</p>
      </div>
      {addings && <div className={`ms-auto ${addings === 'New' ? 'bg-danger rounded-pill px-2 text-white' : ''}`}>{addings}</div>}
    </div>
  );
}

export default function AdminDashboard() {
  const sideNav = [
    { type: 'mainMenu', icon: <PiSquaresFourBold />, title: 'Dashboard' },
    { type: 'mainMenu', icon: <CiWallet />, title: 'My Wallet', addings: <IoMdArrowDropright /> },
    { type: 'mainMenu', icon: <TbActivityHeartbeat />, title: 'Transactions', addings: 75 },
    { type: 'mainMenu', icon: <PiNewspaperClipping />, title: 'Invoices' },
    { type: 'mainMenu', icon: <CiCreditCard1 />, title: 'Cards' },
    { type: 'others', icon: <CiUser />, title: 'Leads', addings: <IoMdArrowDropright /> },
    { type: 'others', icon: <TbMessage2 />, title: 'Messages', addings: 'New' },
    { type: 'others', icon: <GiSettingsKnobs />, title: 'Settings' },
  ];

  return (
    <div className="row">
      <div className="col-md-2 border-end p-0">
        <div className="d-flex align-items-center">
          <div className="w-25">
          <img src={logo} className="w-100" alt="" />
          </div>
          <div>
            <p>USAM</p>
            <p className="font-sm">Invoicing Admin Dashboard</p>
          </div>
        </div>
        <div className="me-4">
          {sideNav.map((item, i) => (
            item.type === 'mainMenu' ? <MainMenuItem key={i} {...item} /> : <OtherMenuItem key={i} {...item} />
          ))}
        </div>
      </div>
      <div className="col-md-10">
        <DashboardNavbar />
        <div className="row justify-content-evenly ">
            <div className="col-md-6 d-flex ">
              <DashboardInvoices />
            </div>
            <div className="col-md-5 rounded-4 shadow-sm p-4">
              <TotalRevenue />
            </div>
        </div>
        <div className="row mt-3 justify-content-evenly ">
          <div className="col-md-3 p-4 mb-5 rounded-4 shadow" style={{height:"450px"}}>
            <Withdraw />
          </div>
          <div className="col-md-5 mb-5 p-4 rounded-4 shadow">
            <Spendings />
          </div>
          <div className="col-md-3 p-4 rounded-4 shadow">
            <QuickTransfer />
          </div>

        </div>
        <div className="row justify-content-evenly my-4">
          <div className="col-md-5 p-0  mb-5 rounded-4 shadow" style={{height:"200px"}}>
            <WalletUsage />
            <div className="shadow mt-4 p-4 rounded-4">
            <PreviousTransactions />
            </div>
          </div>
          <div className="col-md-3 p-4 shadow rounded-4">
          <BarSpendings />
          </div>
          <div className="col-md-3 p-4 shadow rounded-4">
          <TransactionOverview />
          </div>
        </div>
      </div>
    </div>
  );
}
