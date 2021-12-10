import React from 'react'
import './RoundedGraph.scss'

import GeneralGraph from '../../Graph/GeneralGraph'

// defaults.global.tooltips.enabled = false
// defaults.global.legend.position = 'bottom'



const RoundedGraph = () => {

    const data={
        labels: [
            'Effective',
            'Non Effective',
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [300, 50],
            backgroundColor: [
                'rgb(255, 51, 51)',
                'rgb(71, 81, 255)',
            ],
            hoverOffset: 4
        }]
    }

    return (

        <div className='graph my-8 '>
            <div className="main_graph">

                <GeneralGraph data={data} type={'Doughnut'}/>
                
            </div>
            <div className='flex justify-center mt-8'>
                <div className=''>Condition</div> 
            </div>
        </div>
    )
}

export default RoundedGraph
