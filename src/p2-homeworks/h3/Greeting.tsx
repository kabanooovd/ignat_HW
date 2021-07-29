import React from 'react'
import s from './Greeting.module.css'
import {log} from "util";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (event: React.FormEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {

    //const inputClass = s.error // need to fix with (?:)
    const inputClass = error? s.error: s.someClass


    return (
        <div>
            <input value={name}
                   onChange={setNameCallback}
                   className={inputClass}
                   placeholder={'Insert your name'}/>
            <button onClick={addUser} className={s.btn}>add</button>
            <span> People in Array - {totalUsers}</span>
            <div><b><span className={s.errNotification}>{error}</span></b></div>
        </div>
    )
}

export default Greeting
