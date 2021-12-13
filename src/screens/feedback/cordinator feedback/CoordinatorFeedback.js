import React from 'react'
import GeneralGraph from '../../../components/Graph/GeneralGraph'
import { HeadTitle, nav_items } from '../Feedback'
import { data } from '../../../components/feedback/StudentFeedback/GraphData'
import Right_navigate from '../../../components/feedback/Right_Navigate/Right_navigate'
import TableFormat from '../../../components/Exam_result_analysis/Table/TableFormat'
import { TheoryResult } from '../../../ApplicationFiles/ExamResult/ExamResultTableTheory'
import { studentTable } from '../../../ApplicationFiles/feedback/StudentTable'

const CoordinatorFeedback = () => {
    return (
        <div className='studentFeedback '>
            <HeadTitle nav_items={nav_items} />
            <div className="student-second  mx-16 shadow-xl  rounded-xl  bg-white pt-4" >
                <div className='flex justify-between mx-10 my-6'>

                    <span className='text-2xl graphTitle font-bold '>Performance</span>
                    <div>
                        <label for="cars " className=''></label>

                        <select id="cars">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="opel">Opel</option>
                            <option value="audi">Audi</option>
                        </select>
                        <button className='border-2 mx-4 hover:bg-red-600 hover:text-white'>Export</button>
                    </div>
                </div>

                <div className='px-8   '>
                    <GeneralGraph data={data} type='Line' />
                </div>
            </div>

            <div className='mx-16 my-24' >
                <span className='font-bold text-2xl' >Department:</span>
                <span className='text-xl mx-4 '>ABC department</span><br />
                <span className='font-bold text-2xl' >Designation:</span>
                <span className='text-xl mx-4 '>Co-ordinator</span>
                <TableFormat TheoryResult={TheoryResult} />
            </div>
            <div className='mx-16 my-24' >
            <span className='font-bold text-2xl' >Department:</span>
                <span className='text-xl mx-4 '>XYZ department</span><br />
                <span className='font-bold text-2xl' >Designation:</span>
                <span className='text-xl mx-4 '>Sub-ordinator</span>
                <TableFormat TheoryResult={TheoryResult} />
            </div>
           
        </div>
    )
}

export default CoordinatorFeedback
