import React, {useState} from 'react'
import s from './HW8.module.css'
import {checkAgeAC, homeWorkReducer, sortNamesAC} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

export type UserType = {
    _id: number
    name: string
    age: number
}

const initialPeople: UserType[] = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

export type sortingPayload = 'up' | 'down'

function HW8() {
    const [people, setPeople] = useState<UserType[]>(initialPeople) // need to fix any

    // need to fix any
    const finalPeople = people.map((p: UserType) => (
        <div key={p._id}>
            <div className={s.EachPerson}>
                <span className={s.name}>{p.name}</span><span className={s.age}>  {p.age}</span>
            </div>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, sortNamesAC('up')))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, sortNamesAC('down')))
    const checkAge = () => setPeople(homeWorkReducer(initialPeople, checkAgeAC(18)))

    return (
        <div>
            <hr/>
            homeworks 8

            {finalPeople}
            <div>
                <SuperButton onClick={sortUp}>sort up</SuperButton>
                <SuperButton onClick={sortDown}>sort down</SuperButton>
                <SuperButton onClick={checkAge}>check 18</SuperButton>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8
