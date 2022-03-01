import * as React from "react";
// @ts-ignore
import s from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={s.body}>
            <p className={s.text}>
                <b>@2022 </b>Тестовое задание
            </p>
        </footer>
    )
}

export {Footer};