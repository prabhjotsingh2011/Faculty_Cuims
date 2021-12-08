import React from 'react'
import Navigation from '../navigation/Navigation'
import './Details.scss'

const Details = () => {
    const Image='https://media.istockphoto.com/photos/portrait-of-school-boy-in-library-holding-book-with-negative-space-picture-id1329365307?k=20&m=1329365307&s=612x612&w=0&h=XOy3saKR91ZZGZlKJEDuwKR_YB07URPVsAukKnHEI4w='
    return (
        <div className='flex justify-between w-screen my-10'>
            <div className="details flex border-red-600 border-t-4 border-l-4 shadow-2xl w-1/2 rounded-2xl ml-14 ">
                <div >
                    <img src={Image} alt="Profile" srcset="" className='h-72 w-72 rounded-xl mb-3  ' />
                </div>
                <div className="faculty-details">
                    <ul className='ml-8'>
                        <li className='relative mb-14'>
                            <span className='name text-5xl text-black font-extrabold '>Prabhjot Singh</span>
                        </li>

                        <li className='font-mono'>
                            <span className='Id '>Detail 1: </span>
                            <span className='Id font-extrabold'>value </span>
                        </li>
                        <li className='font-mono'>
                            <span className='Id '>Detail 2: </span>
                            <span className='Id font-extrabold'>value </span>
                        </li>
                        <li className='font-mono'>
                            <span className='Id '>Detail 3: </span>
                            <span className='Id font-extrabold'>value </span>
                        </li>
                        <li className='font-mono'>
                            <span className='Id '>Detail 4: </span>
                            <span className='Id font-extrabold'>value </span>
                        </li>
                        <li className='font-mono'>
                            <span className='Id '>Detail 5: </span>
                            <span className='Id font-extrabold'>value </span>
                        </li>
                        <li className='font-mono'>
                            <span className='Id '>Detail 6: </span>
                            <span className='Id font-extrabold'>value </span>
                        </li>
                        <li className='font-mono'>
                            <span className='Id '>Detail 7: </span>
                            <span className='Id font-extrabold'>value </span>
                        </li>
                        
                    </ul>
                </div>

            </div>
            <div className="right_switches mr-16">
                <Navigation/>
            </div>
        </div>
    )
}

export default Details
