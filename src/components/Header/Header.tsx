import * as React from "react";
import s from "./Header.module.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
    return <header className={s.header}>
        <div className={s.container}>
            <div className={s.logo}>
                <NavLink to='/'>LOGO</NavLink>
            </div>
            <nav className={s.navbar}>
                <NavLink to='/profile' className={s.link}>
                    <span>
                        Моя Страница
                    </span>
                </NavLink>
                <NavLink to='/news' className={s.link}>
                    <span>
                        Новости
                    </span>
                </NavLink>
                <NavLink to='/message' className={s.link}>
                    <span>
                        Сообщения
                    </span>
                </NavLink>
            </nav>
        </div>
    </header>
}

export {Header};