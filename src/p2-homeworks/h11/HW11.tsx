import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from './HW11.module.css'

function HW11() {
    const [value1, setValue1] = useState<number>(0)
    const [value2, setValue2] = useState<number>(100)

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div className={s.SuperDoubleRangeContainer}>
                <span className={s.valueStyle}>{value1}</span>
                <SuperRange
                    // сделать так чтоб value1 изменялось
                    onChangeRange={setValue1}
                    initialVal={value1}
                />
            </div>

            <div className={s.SuperDoubleRangeContainer}>
                <span className={s.valueStyle}>{value1}</span>
                <SuperDoubleRange
                    min={0}
                    max={100}
                    value1={value1}
                    value2={value2}
                    setValue1={setValue1}
                    setValue2={setValue2}
                />
                <span className={s.valueStyle}>{value2}</span>
            </div>



            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
