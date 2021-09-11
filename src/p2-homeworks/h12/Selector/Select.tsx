import React, {useState} from "react";
import s from './Select.module.css'

export type SelectPropsType = {
    themes: string[]
    theme: string
    callBackToDispatch: (option: string) => void
    text: string
}

function MemoSelect(props: SelectPropsType) {


    const [choseMode, setChoseMode] = useState(true)

    const mappedOptions = props.themes.map((opt, index) => {

        const choseOptionHandler = () => {
            props.callBackToDispatch(opt)
            setChoseMode(!choseMode)
        }

        return (
            <div key={index}>
                <span onClick={choseOptionHandler}>
                    &#10004;
                    <b className={s.singleOption}>{opt}</b>
                </span>
            </div>
        )
    })

    const choseModeHandler = () => {
        setChoseMode(!choseMode)

    }

    return (
        <div className={s.SelectComponent}>
            <span className={s.description}>{props.text}</span>
            <div className={s.selector}>
                <h3 className={s.header}>
                    <span className={s.MainSign}>&raquo;</span>
                    <span className={s.currentOption} onClick={choseModeHandler}>{props.theme}</span>
                </h3>

            </div>
            <div className={s.allOptions}>
                {
                    !choseMode && <div className={s.optionsToChose}>{mappedOptions}</div>
                }
            </div>
        </div>

    )
}

export const SuperSelect = React.memo(MemoSelect)







