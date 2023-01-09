import * as React from "react";
import {FC} from "react";
// @ts-ignore
import s from "./Layout.module.scss";
import {Header} from "./Inside/Header";

export const Layout: FC<any> = ({children}) => {
    return (
        <div className={s.bg1}>
        <div className={s.bgIn}>
            <div className={s.header}>header</div>
            <div className={s.bg2}>
                <div className={s.menu}>меню{children}</div>
                <div className={s.kont}>контент{children}</div>
            </div>
        </div>
        </div>
    )
}

