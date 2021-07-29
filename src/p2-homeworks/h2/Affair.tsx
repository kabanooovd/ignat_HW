import React from 'react'
import {FilterType} from "./HW2";
import s from './Affairs.module.css'

type propsAffair = {
    _id: string
    name: string
    priority: FilterType

}

type AffairPropsType = {
    // key не нужно типизировать
    affair: propsAffair // need to fix any
    deleteAffairCallback: (_id: string) => void // need to fix any

}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div>
            <div>
                <div className={s.affair}>

                    {props.affair.name}
                </div>
                <div className={s.delBtn}>
                    <button onClick={deleteCallback}>DEL</button>
                </div>
            </div>
        </div>
    )
}

export default Affair

