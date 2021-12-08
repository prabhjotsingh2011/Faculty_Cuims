import React, { useEffect } from 'react'
import './_Sidebar.scss'
import All_Items from '../../ApplicationFiles/SideBar_Files/categories.js'
import Item from './items/Item'
import { WiDirectionLeft } from 'react-icons/wi'

const Sidebar = ({
    toggleSideBar,
    setToggleSideBar
}) => {

    // ************ * constants  **************
    const logoURL = 'https://uims.cuchd.in/uims/assets/uploads/login-logo-main.png'




    //***************  functions *************

    const closeSideBar = () => {
        setToggleSideBar(!toggleSideBar)
    }

    return (
        <div className="absolute ">
            <div className={`sidebar h-screen fixed top-0 z-10  w-72 bg-gray-200 ${toggleSideBar ? 'show' : 'hide'}`}>

                <WiDirectionLeft size={30} className='mt-2 ml-2' onClick={closeSideBar} />
                <div className="sidebar_logo my-2">
                    <img src={logoURL} alt="logo" className='logo h-16 w-26 mx-auto my-auto' />
                </div>

                <div className="categories">
                    {
                        All_Items?.map((curr_item) => (
                            <Item curr_item={curr_item} />
                        ))
                    }

                    {/* <Item /> */}
                </div>
            </div>
        </div>
    )
}

export default Sidebar
