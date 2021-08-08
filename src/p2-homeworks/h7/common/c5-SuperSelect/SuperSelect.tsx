import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import s from './SuperSelect.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: string[] | undefined
    onChangeOption: (option: string) => void | undefined
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: JSX.Element[] | undefined = options?.map((el, i) =>
        <option key={i}>{el}</option>)

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        const onChange = e.currentTarget.value
        //console.log(onChange)
        onChangeOption(onChange)
    }

    return (
        <h4>
            <select onChange={onChangeCallback} {...restProps} className={s.select}>
                {mappedOptions}
            </select>
        </h4>
    )
}

export default SuperSelect
