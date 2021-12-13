import React from 'react'
import Card from '../../../components/Admin-responsibility/GeneralCard/Card'
import SubNavigation from '../../../components/Admin-responsibility/SubNavigation/SubNavigation'
import { HeadTitle } from '../../feedback/Feedback'
import { nav_items_admin } from '../AdminResposibilty'
import './Mentoring.scss'
import RoundedGraph from '../../../components/Exam_result_analysis/RoundedGraph/RoundedGraph'
import GeneralGraph from '../../../components/Graph/GeneralGraph'
import { data } from '../../../components/feedback/StudentFeedback/GraphData'
import Form from '../../../components/Admin-responsibility/InputForm/Form'
import TableFormat from '../../../components/Exam_result_analysis/Table/TableFormat'
import { TheoryResult } from '../../../ApplicationFiles/ExamResult/ExamResultTableTheory'




const Mentoring = () => {
  return (
    <div className='' >
      <HeadTitle nav_items={nav_items_admin} />
      <div className='w-3/4 justify-start mx-10'>
        <SubNavigation items={['Achievements']}/>
      </div>
      <div className='my-16 mx-6 flex justify-around'>
        <Card heading={'Total Sessions'} score={'60'}  />
        <Card heading={'Session Attended'} score={'03'}  />
        <Card heading={'Session Present'} score={'57'}  />
        <Card heading={'Overall Rating '} score={'09'}  />
      </div>

      <div className='w-11/12  mx-auto flex justify-between gap-x-8 my-8 shadow-sm'>
        <div className='w-5/6 bg-white rounded-md shadow-2xl my-4'>
          <GeneralGraph data={data} type='Line' />
        </div>
        <div className=' bg-white rounded-lg shadow-xl flex flex-col my-4'>
          <RoundedGraph />
          <RoundedGraph />
        </div>
      </div>

      <div className='w-11/12 mx-auto my-14 py-8' >
        <Form />
      </div>

      <div className='w-11/12 mx-auto my-14 py-8 '>
        <div className='text-center bg-gray-800  my-4 py-4 rounded-lg ' >
          <span className='text-white text-3xl' >All Achievements are listed below</span>
        </div>
        <TableFormat TheoryResult={TheoryResult} />
      </div>
    </div>
  )
}

export default Mentoring
