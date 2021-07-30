import React, {useState} from 'react'
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <div>
            <div className={s.HW5}>HW 5</div>
            <div className={s.mainHeaders}>
                <nav className={s.navLinks}>
                    <NavLink to='/pre-junior'
                             className={s.eachSingleLink}
                             activeClassName={s.active}>

                        Pre-Junior
                    </NavLink>

                    <NavLink to='/junior'
                             className={s.eachSingleLink}
                             activeClassName={s.active}>

                        Junior
                    </NavLink>

                    <NavLink to='/junior-plus'
                             className={s.eachSingleLink}
                             activeClassName={s.active}>

                        Junior-plus
                    </NavLink>
                    {/*<button onClick={props.headerMenuRemoteHandler} className={s.headerRemote}/>*/}
                    <button className={s.headerRemote}/>
                </nav>
            </div>
        </div>
    )
}

export default Header
