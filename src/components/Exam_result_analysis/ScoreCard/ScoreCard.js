import React from 'react'

const ScoreCard = () => {
    return (
        <div className=' flex flex-col justify-between bg-white h-56 w-56  border-l-4 border-r-4 border-red-600 rounded-3xl shadow-2xl '>
            <div className='card__title text-3xl mt-4 ml-10 font-bold inline-block '>
                Scores
            </div>
            <div className='flex justify-end relative'>
                <span className='text-8xl mr-14'>10</span>
                <span className='text-2xl absolute bottom-2 right-4 '>/10</span>
            </div>
            <div className=' text-right mx-8 text-xl mb-4'>
                <span>Remark:Good</span>
            </div>
        </div>
    )
}

export default ScoreCard
