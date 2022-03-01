import * as React from "react";
import {FC} from "react";
// @ts-ignore
import s from "./MenuButton.module.scss";
import ClassNames from "classnames";

interface IProps {
    name?: string;
    className?: string;
}

export const MenuButton: FC<IProps> = ({name, children, className}) => {
    return (
        <div className={ClassNames(s.button, className)}>
            <span>{children}</span>
            {name && <b>{name}</b>}
        </div>
    )
}


