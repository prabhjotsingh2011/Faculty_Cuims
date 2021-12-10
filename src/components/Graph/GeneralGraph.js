import React from 'react'
import { Pie, Doughnut,Line } from 'react-chartjs-2'

const GeneralGraph = (props) => {
    const type = props.type
    return (
        <>{
            type=='Doughnut'?
            (<Doughnut
                data={props.data}
            />)
            :(<Line
                data={props.data}
                width={"66%"}
                height={"470px"}
                options={{ maintainAspectRatio: false }}
            />)
        }
        </>


    )
}

export default GeneralGraph
