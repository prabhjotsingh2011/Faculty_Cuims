import React from 'react'
import './RoundedGraph.scss'
import { Pie, Doughnut } from 'react-chartjs-2'

// defaults.global.tooltips.enabled = false
// defaults.global.legend.position = 'bottom'



const RoundedGraph = () => {
    return (

        <div className='graph my-8 '>
            <div className="main_graph">


                <Doughnut
                    data={{
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
                    }}
                />
            </div>
            <div className='flex justify-center mt-8'>
                <div className=''>Condition</div> 
            </div>
        </div>
    )
}

export default RoundedGraph
