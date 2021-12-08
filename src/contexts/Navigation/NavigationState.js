import React, { useState } from "react";
import Navigation from "../../components/Exam_result_analysis/navigation/Navigation";
import NavigationContext from "./NavigationContext";

const NavigationState = (props) => {
    
    const [showPractical, setShowPractical] = useState(false);
    const [showTheory, setShowTheory] = useState(false)
    return (
        <NavigationContext.Provider value={{
            showPractical,
            setShowPractical,
            showTheory,
            setShowTheory
        }}>
            {props.children}
        </NavigationContext.Provider>
    )
}

export default NavigationState;