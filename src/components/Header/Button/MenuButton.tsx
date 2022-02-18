import * as React from "react";
import {FC} from "react";
// @ts-ignore
import s from "./MenuButton.module.scss";

interface IProps {
    name?: string;
}

export const MenuButton: FC<IProps> = ({name, children}) => {
    return (
        <div className={s.button}>
            <span>{children}</span>
            {name && <b>{name}</b>}
        </div>
    )
}


