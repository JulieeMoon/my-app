import * as React from "react";
import {NavLink} from "react-router-dom";
import s from "./MenuButton.module.scss";

let links = [
    {
        to: '/profile',
        label: 'Моя Страница'
    },
    {
        to: '/news',
        label: 'Новости'
    },
    {
        to: '/message',
        label: 'Сообщения'
    },
];

const MenuButton = () => {
    return links.map(elem => (
        <NavLink to={elem.to} className={s.link}>
            <span>
                {elem.label}
            </span>
        </NavLink>
    ))
};

export {MenuButton};