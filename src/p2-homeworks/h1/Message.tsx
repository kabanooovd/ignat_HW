import React from 'react'
import s from './Message.module.css'

type msgType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: msgType) {
    return (
        <div className={s.all}>
            <div className={s.message}>
                <div className={s.ava}>
                    <img src={props.avatar} alt=""/>
                </div>
            </div>
            {/*<div className={s.arrow}></div>*/}
            <div className={s.msgFrame}>
                <div className={s.userName}>
                    <b>{props.name}</b>
                </div>
                <div>
                    <span className={s.msgContent}>
                        {props.message}
                    </span>
                    <span className={s.clock}>
                        {props.time}
                    </span>
                </div>
                <div className={s.arrow}></div>
            </div>
        </div>
    )
}

export default Message
