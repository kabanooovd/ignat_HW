import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'

export type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: string) => void

}
type propsAffair = {
    _id: string
    name: string
    priority: FilterType

}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: propsAffair) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}

        />
    ))

    const setAll = () => {props.setFilter('all')} // need to fix
    const setHigh = () => {props.setFilter('high')}
    const setMiddle = () => {props.setFilter('middle')}
    const setLow = () => {props.setFilter('low')}

    return (
        <div className={s.affairPriorityList}>

            <div className={s.mappedAffairs}>{mappedAffairs}</div>
            <div className={s.priorityBtnStack}>
                <button onClick={setAll}
                        className={s.priorityBtn}>ALL</button>
                <button onClick={setHigh}
                        className={s.priorityBtn}>HIGH</button>
                <button onClick={setMiddle}
                        className={s.priorityBtn}>MIDDLE</button>
                <button onClick={setLow}
                        className={s.priorityBtn}>LOW</button>
            </div>
        </div>
    )
}

export default Affairs
