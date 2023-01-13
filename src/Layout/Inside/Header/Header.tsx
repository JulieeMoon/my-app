import * as React from "react";
// @ts-ignore
import s from "./Header.module.scss";

let name = [
    {
        id: 1,
        label: 'Мой профиль'
    },
    {
        id: 2,
        label: 'Мои курсы'
    },
    {
        id: 3,
        label: 'Вебинарная комната'
    },
];

export const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.container}>
                <div className={s.navbar}>
                    <div>Logo</div>
                </div>
            </div>
        </header>
    )
}

