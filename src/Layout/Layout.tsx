import * as React from "react";
import {FC} from "react";
// @ts-ignore
import s from "./Layout.module.scss";
import {Header} from "./Inside/Header";
import {SideBar} from "./Inside/SideBar";

export const Layout: FC<any> = ({children}) => {
    return (
        <div className={s.bg1}>

            <div className={s.header}>
                <div className={s.htext}><Header/></div>
            </div>

            <div className={s.bg2}>

                <div className={s.menu}>
                    <div className={s.tmenu}><SideBar/></div>
                </div>

                <div className={s.kont}>
                    <div className={s.tkont}>контент{children}</div>
                </div>

            </div>
        </div>
    )
}

