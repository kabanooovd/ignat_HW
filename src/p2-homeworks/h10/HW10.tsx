import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC, loadingReducerStateType} from "./bll/loadingReducer";
import {MySpinner} from "./bll/assets/MySpinner";

function HW10() {
    // useSelector, useDispatch
    const dispatch = useDispatch()
    const loading = useSelector<AppStoreType, loadingReducerStateType>(state => state.loading).loading

    const setLoading = () => {
        // dispatch
        // setTimeout
        dispatch(loadingAC(loading))
        setTimeout(function timer() {
            dispatch(loadingAC(!loading))
        }, 3000);
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    // <div>крутилка...</div>
                    <div><MySpinner /></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
