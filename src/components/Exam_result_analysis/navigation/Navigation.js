import React, { useState,useEffect,useContext } from 'react'
import NavigationContext from '../../../contexts/Navigation/NavigationContext'
import './Navigation.scss'

const Navigation = () => {
    const [active1, setActive1] = useState(false)
    const [active2, setActive2] = useState(false)
    const [active3, setActive3] = useState(false)

    const {showPractical,setShowPractical,setShowTheory,showTheory}=useContext(NavigationContext)

    const Active=(activate)=>{
        if(activate==1){
            setActive1(!active1)
            setActive2(false)
            setActive3(false)
            setShowTheory(false)
            setShowPractical(!showPractical)
        }
        if(activate==2){
            setActive2(!active2)
            setActive1(false)
            setActive3(false)
            setShowPractical(false)
            setShowTheory(!showTheory)
        }
        if(activate==3){
            setActive3(!active3)
            setActive1(false)
            setActive2(false)
        }

    }


    

    useEffect(() => {
       
    }, [active1,active2,active3]);
    return (
        <div>
            <div class="bg-white ">
                <nav class="flex flex-col sm:flex-row">
                    <button class={`text-gray-600 py-4 px-6 block hover:bg-red-500  hover:text-white focus:outline-none font-bold rounded-3xl  ${active1?'activeTab':''} `} onClick={()=>Active(1)} >
                        Practical
                    </button>   
                    <button class={`text-gray-600 py-4 px-6 block hover:bg-red-500 hover:text-white focus:outline-none font-bold rounded-3xl   ${active2?'activeTab':''} `} onClick={()=>Active(2)}>
                        Theory
                    </button>
                    {/* <button class={`text-gray-600 py-4 px-6 block hover:bg-red-500 hover:text-white focus:outline-none font-bold  rounded-3xl   ${active3?'activeTab':''} `}  onClick={()=>Active(3)}>
                        Tab 1
                    </button> */}
                </nav>
            </div>
        </div>
    )
}

export default Navigation
