import React from 'react'

const Card = ({heading,score}) => {
    return (
        <div className='w-48   bg-white rounded-xl shadow-lg'>
            <div className='text-xl my-2 mx-4 '>
                <span className='text-gray-500 '>{heading}</span>
            </div>
            <div className='text-4xl mx-6 my-2 text-red-400  text-right font-extrabold '>
                {score}
            </div>
        </div>
    )
}

export default Card
