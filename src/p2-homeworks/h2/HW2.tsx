import React, {useState} from 'react'
import Affairs from './Affairs'
import s from './Affairs.module.css'
import {v1} from "uuid";

// types
export type AffairPriorityType = 'low' | 'middle' | 'high' // need to fix any
export type AffairType = {
    _id: string
    name: string
    priority: AffairPriorityType
}
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: Array<AffairType> = [ // need to fix any
    {_id: v1(), name: 'React', priority: 'high'},
    {_id: v1(), name: 'anime', priority: 'low'},
    {_id: v1(), name: 'games', priority: 'low'},
    {_id: v1(), name: 'work', priority: 'high'},
    {_id: v1(), name: 'travel', priority: 'middle'}
]



// pure helper functions
const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => { // need to fix any
    if (filter === 'all') return affairs
    if (filter === 'high') return affairs.filter(arrElement => arrElement.priority === 'high')
    if (filter === 'middle') return affairs.filter(arrElement => arrElement.priority === 'middle')
    if (filter === 'low') return affairs.filter(arrElement => arrElement.priority === 'low')
    return affairs
}

const deleteAffair = (affairs: Array<AffairType>, _id: string) => { // need to fix any
    return affairs.filter(arrElement => arrElement._id !== _id)
}

function HW2() {

    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')
    const changeFilter = (nextFilter: FilterType) => {
        setFilter(nextFilter)
    }


    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: string) => {
        setAffairs(deleteAffair(affairs, _id))
    } // need to fix any


    return (
        <div className={s.commonAffair}>
            <hr/>
            homeworks 2

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2
