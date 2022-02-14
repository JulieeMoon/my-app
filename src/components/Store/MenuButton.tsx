import * as React from "react";
import {NavLink} from "react-router-dom";
import s from "./MenuButton.module.scss";

let links = [
    {
        id: 1,
        to: '/profile',
        label: 'Моя Страница'
    },
    {
        id: 2,
        to: '/news',
        label: 'Новости'
    },
    {
        id: 3,
        to: '/message',
        label: 'Сообщения'
    },
];

const MenuButton = () => {
    return links.map(elem => (
        <NavLink to={elem.to} key={elem.id} className={s.link}>
            <span>
                {elem.label}
            </span>
        </NavLink>
    ))
};

export {MenuButton};