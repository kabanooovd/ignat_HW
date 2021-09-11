import React from "react";
import s from "./HW12.module.css";
import {SuperSelect} from "./Selector/Select";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeFontC, changeThemeC, ThemeStateType} from "./bll/themeReducer";

const themes = ['some', 'dark', 'red'];

function HW12() {

    const dispatch = useDispatch()

    const backgroundTheme: string = useSelector<AppStoreType, ThemeStateType>(state => state.appMode).backgroundTheme
    const fontColor: string = useSelector<AppStoreType, ThemeStateType>(state => state.appMode).fontColor

    const switchBackGround = (option: string) => {
        dispatch(changeThemeC(option))
    }

    const switchFont = (option: string) => {
        dispatch(changeFontC(option))
    }

    return (
        <div className={s[backgroundTheme]}>
            <hr/>
            <span className={s[fontColor + '-text']}>
                homeworks 12
            </span>
            <hr/>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <div className={s.SuperSelectPos}>

                <span className={s[fontColor + '-text']}>
                        You are kindly welcomed to chose theme in accordance with your preference
                </span>


                <SuperSelect themes={themes}
                             theme={backgroundTheme}
                             callBackToDispatch={switchBackGround}
                             text={'Background color :'}
                />



                <SuperSelect themes={themes}
                             theme={fontColor}
                             callBackToDispatch={switchFont}
                             text={'Font color :'}
                />

            </div>
            <hr/>
        </div>
    );
}

export default HW12;
