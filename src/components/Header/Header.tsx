import * as React from "react";
import s from "./Header.module.scss";
import {NavLink} from "react-router-dom";
import {MenuButton} from "../Store/MenuButton";

const Header = () => {
    return <header className={s.header}>
        <div className={s.container}>
            <div>
                <NavLink to='/' className={s.logo}>LOGO</NavLink>
            </div>
            <div className={s.navbar}>
                <MenuButton/>
            </div>
        </div>
    </header>
}

export {Header};