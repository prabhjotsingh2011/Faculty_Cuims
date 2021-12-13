import React from 'react'
import { TheoryResult } from '../../ApplicationFiles/ExamResult/ExamResultTableTheory'
import Card from '../../components/Admin-responsibility/GeneralCard/Card'
import Form from '../../components/Admin-responsibility/InputForm/Form'
import TableFormat from '../../components/Exam_result_analysis/Table/TableFormat'

const Contribution = () => {
    return (
        <div className='w-full '>
            <div className='sectionOne my-16 mx-6  flex justify-around '>
                <Card heading={'NBA Contributions'} score={'10'}    />
                <Card heading={'NAAC Contributions'} score={'18'}    />
                <Card heading={'ABET Contributions'} score={'02'}    />
                {/* <Card  heading={} score={}  />
                <Card  heading={} score={}  /> */}
            </div>
            <div className='w-11/12 mx-auto my-14 py-8' >
                <Form />
            </div>
            <div className='w-11/12 mx-auto my-14 py-8 '>
                <div className='text-center bg-gray-800  my-4 py-4 rounded-lg ' >
                    <span className='text-white text-3xl' >All contributions are listed below</span>
                </div>
                <TableFormat TheoryResult={TheoryResult} />
            </div>
        </div>
    )
}

export default Contribution
