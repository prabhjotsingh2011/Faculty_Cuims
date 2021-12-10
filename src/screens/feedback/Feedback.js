import React from 'react'
import ScoreCard from '../../components/Exam_result_analysis/ScoreCard/ScoreCard'
import NamePlate from '../../components/feedback/Nameplate/NamePlate'
import Right_navigate from '../../components/feedback/Right_Navigate/Right_navigate'
import './Feedback.scss'

export const HeadTitle = ({ nav_items }) => {
    return (
        <>
            <div className='feedback_first flex justify-between mb-16 ' >
                <NamePlate />
                <Right_navigate nav_items={nav_items} />
            </div>
        </>
    )

}

export const nav_items = [{ text: 'Head', route: '/feedback/head' },
{ text: 'Cordinators', route: '/feedback/cordinators' },
{ text: 'Students', route: '/feedback/students' },
]

const Feedback = () => {

    return (
        <div className=' mx-auto justify-center h-screen '>
            {/* <div className='feedback_first flex justify-between mb-16 '>
                <NamePlate/>
                <Right_navigate nav_items={nav_items} />
            </div> */}
            <HeadTitle nav_items={nav_items} />
            <div className='feedback__second flex  justify-evenly w-full'>
                <ScoreCard />
                <ScoreCard />
                <ScoreCard />
                <ScoreCard />
            </div>
        </div>
    )
}

export default Feedback
