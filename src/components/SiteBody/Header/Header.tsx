import * as React from "react";
// @ts-ignore
import s from "./Header.module.scss";
import {NavLink} from "react-router-dom";

export const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.container}>
                <div className={s.navbar}></div>
            </div>
        </header>
    )
}

