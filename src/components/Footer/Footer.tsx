import React from "react";
import s from './Footer.module.scss';

const Footer = () => {
    return (
        <div className={s.body}>
            <p className={s.text}>
                <b>@2022 </b>Тестовое задание
            </p>
        </div>
    )
}

export {Footer};