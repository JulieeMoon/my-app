import * as React from "react";
import {FC} from "react";
// @ts-ignore
import s from "./Layout.module.scss";

export const Layout: FC<any> = ({children}) => {
    return (
        <div className={s.bg1}>
            <div className={s.bg2}>
                {children}
            </div>
        </div>
    )
}

