import React, {useState} from 'react'
import s from './Header.module.css'
import {Menu} from "./munu/Menu";

function Header() {

    const [menu, setMenu] = useState<boolean>(false)
    const headerMenuRemoteHandler = () => {
        setMenu(!menu)
    }

    if (menu) {
        return <Menu headerMenuRemoteHandler={headerMenuRemoteHandler}/>
    } else {
        return <div className={s.mainHeaders}>
                <div className={s.HW5}>HW 5</div>
                <span className={s.eachSingleLink}></span>
                <button onClick={headerMenuRemoteHandler} className={s.headerRemote}/>
            </div>
    }
}

export default Header
