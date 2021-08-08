import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps, useState} from 'react'
import s from './SuperRadio.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: string[] | undefined
    onChangeOption: (option: string) => void | undefined
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        // onChange, onChangeOption
        const onChange = e.currentTarget.value
        console.log(onChange)
        onChangeOption(onChange)

    }

    const mappedOptions: JSX.Element[] | undefined  = options ? options.map((o, i) => (
        <label key={i} className={s.singleItem}>
            <input
                type={name}
                checked={value === o}
                value={o}
                onChange={onChangeCallback}
                className={s.radioInput}
                // name, checked, value, onChange
            />
            {o}
        </label>
    )) : []

    return (
        <div className={s.radio}>
            {mappedOptions}
        </div>
    )
}

export default SuperRadio
