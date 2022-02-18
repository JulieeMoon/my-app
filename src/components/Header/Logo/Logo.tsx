import * as React from "react";
import {FC} from "react";
// @ts-ignore
import s from './Logo.module.scss';
import {NavLink} from "react-router-dom";

interface IProps {
    name?: string
    age?: number
}

export const Logo: FC<IProps> = (props) => {
    const {name, age, children} = props

    return (
        <NavLink to={'/'} className={s.logo}>
            <span>LOGO</span>
            {name && <b>{name}</b>}
            {children && children}
        </NavLink>
    )
}