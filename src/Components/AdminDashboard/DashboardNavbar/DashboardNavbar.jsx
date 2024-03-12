import React from 'react'
import Style from './DashboardNavbar.module.css'
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { FiFilePlus } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import profile from '../../../Assets/images/adminprofile.png'

export default function DashboardNavbar() {
    return <>
   <div className="container my-2">
        <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
            <HiOutlineBars3BottomLeft className="textDarkGray fs-4 mx-2"/>
            <h4>Dashboard</h4>
        </div>

        <div>
            <div className="position-relative">
            <input type="text" className="p-0 px-3 form-control form-control-sm rounded-4" placeholder="Search here..." />
            <CiSearch className="position-absolute top-50 end-0 translate-middle fs-4" />
            </div>
        </div>

        <div className="d-flex">
            <div className="position-relative">
            <IoIosNotificationsOutline className="fs-1" />
            <div className="position-absolute bg-warning rounded-pill text-white border border-white border-2 font-sm top-0 end-0 px-1">12</div>
            </div>
            <div className="position-relative">
            <CiMail className="fs-1" />
            <div className="position-absolute bg-danger text-white rounded-pill border border-white border-2 font-sm top-0 end-0 px-1">85</div>
            </div>
            <div className="position-relative">
            <HiOutlineCalendarDays className="fs-1" />
            <div className="position-absolute bg-info rounded-pill text-white border border-white border-2 font-sm top-0 end-0 px-1">25</div>
            </div>

        </div>

        <div>
            <button className="btn d-flex align-items-center textLightGreen borderLightGreen border-2 rounded-3">
                <FiFilePlus className="fs-4"/>
                New Invoices
            </button>
        </div>

        <div className="d-flex align-items-center">
            <div className="font-sm fs-6">
                <p className="fw-bold">James Blunt</p>
                <p>Super Admin</p>
            </div>
            <div>
                <img src={profile} className="mx-2" alt="" />
            </div>
            <div>
                <IoMdArrowDropdown />
            </div>
        </div>
    </div>
   </div>
    </>
}

