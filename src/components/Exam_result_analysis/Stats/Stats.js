import React from 'react'
import RoundedGraph from '../RoundedGraph/RoundedGraph'
import './Stats.scss'

const Stats = () => {
    return (
        <>
        <div className=' my-40   rounded-3xl w-5/6 mx-auto relative   py-4 flex flex-col gap-y-2 shadow-2xl border-l-8 border-t-8 border-red-500'>
            <div className='stats_header  absolute  '>OverAll Stats</div>
            <div className="stats flex justify-evenly">
                <RoundedGraph />
                <RoundedGraph />
                <RoundedGraph />
                <RoundedGraph />
            </div>
        </div>
        </>
    )
}

export default Stats
