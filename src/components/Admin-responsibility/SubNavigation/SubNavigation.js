import React from 'react'
import './SubNavigation.scss'

const SubNavigation = ({items}) => {
    return (
        <div>
        <hr className='bg-black text-black ' />
            <div className='shadow-md'>

            {
                items.map(item=>(
                    
                    <button className='font-serif text-black font-extrabold mx-8 my-4 border-b-4 border-red-500' >{item}</button>
                ))
            }

                
                
            </div>
            <hr className='bg-black text-black ' />
        </div>
    )
}

export default SubNavigation
