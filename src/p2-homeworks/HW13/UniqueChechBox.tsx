import React, {useState} from "react";
import st from './UniqueChechBox.module.css'

export const UniqueCheckBox = React.memo(( {
    checkedMode,
    onChangeCheckBox,
} : {
    checkedMode: boolean
    onChangeCheckBox: () => void
}) => {


    return <div>
            {
                checkedMode
                    ? <div className={st.checkboxFalse} onClick={onChangeCheckBox}> &#10004; </div>
                    : <div className={st.checkboxTrue} onClick={onChangeCheckBox}/>
            }
        </div>
})
