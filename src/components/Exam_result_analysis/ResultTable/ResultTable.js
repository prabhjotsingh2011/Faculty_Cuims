import React, { useContext } from 'react'
import { TheoryResult } from '../../../ApplicationFiles/ExamResult/ExamResultTableTheory'
import NavigationContext from '../../../contexts/Navigation/NavigationContext'
import ScoreCard from '../ScoreCard/ScoreCard'
import TableFormat from '../Table/TableFormat'


const ResultTable = () => {

    const { showPractical, showTheory } = useContext(NavigationContext)
    return (
        <>
            <div className='flex justify-around '>
                {
                    showPractical ? (
                        <>
                            <div className="flex justify-around">
                                <div class=" flex  flex-rol w-full">
                                    <div class=" h-screen  mx-24  shadow-inner relative ">
                                        <span className='absolute text-5xl -top-24 -left-28'>Practical Result </span>
                                        <div class=" shadow-xl "></div>

                                        <TableFormat TheoryResult={TheoryResult} theory={'Practical Result'} />

                                    </div>
                                </div>
                                <div className='right'>
                                    <ScoreCard />
                                </div>
                            </div>
                        </>
                    )
                        : ''
                }
                {
                    showTheory
                        ?

                        (
                            <>
                                <div className="flex justify-around">
                                    <div class=" flex  flex-rol w-full">
                                        <div class=" h-screen  mx-24  shadow-inner relative ">
                                            <span className='absolute text-5xl -top-24 -left-28'>Theory Result </span>

                                            <TableFormat TheoryResult={TheoryResult} theory={'Theory Result'} />
                                        </div>
                                    </div>
                                            <div className='right'>
                                                <ScoreCard />
                                            </div>
                                </div>
                            </>
                        )
                        : ''

                }



            </div>
        </>
    )
}

export default ResultTable
