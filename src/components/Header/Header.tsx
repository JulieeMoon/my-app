import React from "react";
import s from "./Header.module.scss";

const Header = () => {
    return <header className={s.header}>
        <div className={s.container}>
            <div>
                <a href='company' className={s.logo}>LOGO</a>
            </div>
            <nav className={s.navbar}>
                <a href='home' className={s.textSt}>
                    <div className={s.body}>
                        Главная
                    </div>
                </a>
                <a href='news' className={s.textSt}>
                    <div className={s.body}>
                        Новости
                    </div>
                </a>
                <a href='page' className={s.textSt}>
                    <div className={s.body}>
                        Еще одна страница
                    </div>
                </a>
            </nav>
        </div>
    </header>
}

export {Header};