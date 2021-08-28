import React from "react";
import greatSpinner from "./greatSpinner.gif";

export const MySpinner = (props: any) => {

    const SpinnerStyle = {
        maxWidth: '40px'
    }

    return <>
        <img src={greatSpinner} style={SpinnerStyle}/>
        </>

}