import React, {useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}
// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (event: React.FormEvent<HTMLInputElement>) => { // need to fix any
        const inputValue = event.currentTarget.value
        setName(inputValue) // need to fix
        setError('')
    }
    const addUser = () => {
        if (name !== '') {
            addUserCallback(name)
            alert(`Hello ${name} !`) // need to fix
            setName('')
            setTotalUsers(totalUsers + 1)
            setError('')
        } else {
            setError('Error: insert your name please')
        }
    }


    //const totalUsers = 0 // need to fix
    const [totalUsers, setTotalUsers] = useState(0)

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
