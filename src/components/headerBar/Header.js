import React, { useEffect,useState } from 'react'
import './_Header.scss'
import { MdSegment } from 'react-icons/md'
import { BsSearch, BsFillBellFill } from 'react-icons/bs'
import { GiNotebook } from 'react-icons/gi'
import { IoHome } from 'react-icons/io5'
import { IoMdSettings } from 'react-icons/io'



const Header = ({toggleSideBar,setToggleSideBar}) => {
    const logoURL = 'https://uims.cuchd.in/uims/assets/uploads/login-logo-main.png'
    const profileImage = "https://randomuser.me/api/portraits/women/81.jpg"

    

    const showSidebar=()=>{
        setToggleSideBar(!toggleSideBar)
        console.log('====================================');
        console.log(toggleSideBar);
        console.log('====================================');
    }
    
    // useEffect(() => {

    // }, [toggleSideBar]);

    return (
        <div className="header px-3 my-2 flex justify-between shadow-md ">
            <div className="left_header flex item-center  ">

                <MdSegment size={26} className='m-4 cursor-pointer' onClick={showSidebar}/>
                <img src={logoURL} alt="logo" className='logo h-16 w-26' />
            </div>

            <div class="center_header pt-2 relative  text-gray-600 w-1/2 ">
                <input class="border-2 w-9/12  border-gray-300 bg-white h-10 px-5 pr-16 rounded-3xl text-sm focus:outline-none"
                    type="search" name="search" placeholder="Search" />
                <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
                    <BsSearch size={16} className='absolute right-40' />
                </button>
            </div>
            <div className="right_header flex ">
                <div className="all_icons flex my-3 mx-4 space-x-3">
                    <BsFillBellFill size={18} />
                    <GiNotebook size={18} />
                    <IoHome size={18} />
                    <IoMdSettings size={18} />
                </div>
                <div className="details flex">
                    <span className='my-3 mx-2'  >Prabhjot Singh</span>
                    <div class="relative w-12 h-12 ">
                        <img class="rounded-full border border-gray-100 shadow-sm" src={profileImage} alt="user image" />
                    </div>
                </div>
            </div>
        </div>
        


    )
}

export default Header
