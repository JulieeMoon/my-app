import * as React from "react";
// @ts-ignore
import s from "./Header.module.scss";
import {Logo} from "./Logo";
import {NavLink} from "react-router-dom";
import {MenuButton} from "./Button";

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

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.container}>
                <div>
                    <Logo name={""}>
                        <b> ❤</b>
                    </Logo>
                </div>
                {!!links.length && (
                    <div className={s.navbar}>
                        {links.map(elem => (
                            <NavLink key={elem.id} to={elem.to} className={s.text}>
                                <MenuButton>{elem.label}</MenuButton>
                            </NavLink>
                        ))}
                    </div>
                )}
            </div>
        </header>
    )
}

export {Header};