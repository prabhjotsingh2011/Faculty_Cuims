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

                                <TableFormat TheoryResult={TheoryResult} theory={'Practical Result'} />
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

                                <TableFormat TheoryResult={TheoryResult} theory={'Theory Result'} />
                                <div className='right'>
                                    <ScoreCard />
                                </div>
                            </div>
                        </>
                    )
                    :''

                }



            </div>
        </>
    )
}

export default ResultTable
