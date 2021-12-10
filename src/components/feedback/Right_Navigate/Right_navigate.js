import React from 'react'
import { Link } from 'react-router-dom'
import './Right_navigate.scss'

const Right_navigate = ({ nav_items }) => {
    return (
        <div className='sortFilter flex mt-10  ' >
            <div className='flex   justify-around mr-8'>

                {

                    nav_items.map((item) => (
                        <Link to={`${item.route}`}>

                            <div className=' bg-white rounded-lg h-10 py-2 mx-1 w-24 hover:bg-red-600 hover:text-white cursor-pointer justify-center flex items-center '>
                                <span className='font-semibold '>{item.text}</span>
                            </div>
                        </Link>
                    ))
                }
            </div>
            <div className='sortFilter__date'>
                <div className=' bg-white rounded-lg h-10 py-2 mx-1 w-24  cursor-pointer justify-center flex items-center '>
                    <span className='date_text '>20 Nov 2021</span>
                </div>
            </div>

        </div>
    )
}

export default Right_navigate
