import React, {useState} from "react";
import st from './Request.module.css'
import {UniqueButton} from "./UniqueButton";
import {UniqueCheckBox} from "./UniqueChechBox";
import {requestAPI} from "./RequestAPI";


export const Request = () => {

    const [ResponseData, setResponseData] = useState<string>('')
    const [btnDisabledMode, setBtnDisabledMode] = useState<boolean>(false)
    const [checkedMode, setCheckedMode] = useState<boolean>(false)
    const onChangeCheckBox = () => {
        setCheckedMode(!checkedMode)
    }

    const sendRequestHandler = () => {
        setBtnDisabledMode(true)
        // alert('lalala')
        requestAPI.getData(checkedMode)
            .then(res => {
                setResponseData(res.data.info)
                setBtnDisabledMode(false)
            })
            .catch(() => {
                setResponseData('Some error has occurred')
                setBtnDisabledMode(false)
            })
    }

    const clearBlockHandler = () => {
        setResponseData('')
    }

    return <>
        <hr/>
        <span className={st.hwHeaderStyle}>homeworks 13</span>
        <div className={st.RequestContainer}>
            <div className={st.requestRemoteWrapper}>
                <UniqueCheckBox checkedMode={checkedMode} onChangeCheckBox={onChangeCheckBox}/>

                <UniqueButton uniqueOnClick={sendRequestHandler}
                              disabled={btnDisabledMode}
                              buttonTitle={btnDisabledMode ? 'Loading...' : 'Send Request'}/>

                <UniqueButton uniqueOnClick={clearBlockHandler}
                              disabled={btnDisabledMode}
                              buttonTitle={btnDisabledMode ? 'Loading...' : 'Clear block'}/>
            </div>
            <div className={st.responseWrapper}>
                Response block
                <span style={ {fontSize: '16px', color: 'gold'} }>{ResponseData}</span>
            </div>
        </div>
        <hr/>
    </>
}







