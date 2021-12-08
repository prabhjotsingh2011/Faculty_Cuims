import React, { useState,useEffect,useContext } from 'react'
import Details from '../../components/Exam_result_analysis/Details/Details'
import ResultTable from '../../components/Exam_result_analysis/ResultTable/ResultTable'
import Stats from '../../components/Exam_result_analysis/Stats/Stats'
import NavigationContext from '../../contexts/Navigation/NavigationContext'
import './Exam_Result_anaysis.scss'



const Exam_Result_anaysis = () => {

 
  return (
    <div className='z-0'>
      <Details/>
      <Stats/>
      <ResultTable/>

    </div>
  )
}

export default Exam_Result_anaysis
