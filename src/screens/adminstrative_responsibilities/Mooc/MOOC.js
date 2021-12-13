import React from 'react'
import { TheoryResult } from '../../../ApplicationFiles/ExamResult/ExamResultTableTheory'
import Form from '../../../components/Admin-responsibility/InputForm/Form'
import TableFormat from '../../../components/Exam_result_analysis/Table/TableFormat'
import Header from '../../../components/headerBar/Header'
import { HeadTitle } from '../../feedback/Feedback'
import { nav_items_admin } from '../AdminResposibilty'

const MOOC = () => {
    return (
        <div>
            <HeadTitle nav_items={nav_items_admin} />
            <div className='w-11/12 mx-auto my-14 py-8' >
                <Form />
            </div>

            <div className='w-11/12 mx-auto my-14 py-8 '>
                <div className='text-center bg-gray-800  my-4 py-4 rounded-lg ' >
                    <span className='text-white text-3xl' >All MOOC courses are listed below</span>
                </div>
                <TableFormat TheoryResult={TheoryResult} />
            </div>
        </div>

    )
}

export default MOOC
