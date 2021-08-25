import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import style from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)
    const [startApplication, setApplication] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)                                      // останавливает значения счетчика
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {       // запускает значения счетчика
            setDate(new Date())
        }, 1000)
        setTimerId(id)
        setApplication(true)
    }

    const onMouseEnter = () => {
        // show
        setShow(false)
    }
    const onMouseLeave = () => {
        // close
        setShow(true)
    }


    const addZero = (num: number) => {
        if (num < 10) {
            return `${0}${num}`
        } else return num
    }

    //const stringTime = timerId// fix with date
    const stringTime = `${addZero(date.getHours())} : ${addZero(date.getMinutes())} : ${addZero(date.getSeconds())}`// fix with date
    //const stringDate = 'Date' // fix with date
    const stringDate = `${addZero(date.getDate())} / ${addZero((date.getMonth() + 1))} / ${addZero(date.getFullYear())}` // fix with date


    return (

        <div className={style.ClockStyle}>
            {
                startApplication
                    ?   <div>
                            <div
                                onMouseEnter={onMouseEnter}
                                onMouseLeave={onMouseLeave}
                            >

                                {stringTime}
                            </div>

                            {!show && (
                                <div>
                                    {stringDate}
                                </div>
                            )}
                            </div>
                    : <div/>                        // При первом запуске приложения, надо будет надать старт для запуска часов
            }
                    <div className={style.ClockButtons}>
                        <SuperButton onClick={start}>start</SuperButton>
                        <SuperButton onClick={stop}>stop</SuperButton>
                    </div>

        </div>

    )
}

export default Clock
