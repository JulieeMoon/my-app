
// @ts-ignore
import s from "./SideBar.module.scss";
import {NavLink} from "react-router-dom";


let links = [
    {
        id: 1,
        to: '/profile',
        label: 'Мой профиль'
    },
    {
        id: 2,
        to: '/courses',
        label: 'Мои курсы'
    },
    {
        id: 3,
        to: '/room',
        label: 'Вебинарная комната'
    },
];

export const SideBar = () => {
    return (
        <header className={s.header}>
            {!!links.length && (
                <div className={s.navbar}>
                    {links.map(elem => (
                        <NavLink key={elem.id} to={elem.to} className={s.text}>
                            <div className={s.text}>{elem.label}</div>
                        </NavLink>
                    ))}
                </div>
            )}
        </header>
    )
}

