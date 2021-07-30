import React from "react";
import s from "../Header.module.css";
import {NavLink} from "react-router-dom";

type MenuPropsType = {
    headerMenuRemoteHandler: () => void
}

export const Menu = (props: MenuPropsType) => {

    return(
        <div>
            <div className={s.mainHeaders}>
                <div className={s.HW5}>HW 5</div>
                <nav className={s.navLinks}>
                    <NavLink to='/pre-junior'
                             className={s.eachSingleLink}>

                        Pre-Junior
                    </NavLink>

                    <NavLink to='/junior'
                             className={s.eachSingleLink}>

                        Junior
                    </NavLink>

                    <NavLink to='/junior-plus'
                             className={s.eachSingleLink}>

                        Junior-plus
                    </NavLink>
                    <button onClick={props.headerMenuRemoteHandler} className={s.headerRemote}/>
                </nav>
            </div>
        </div>
    )
}



