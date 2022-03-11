import React from "react";
// @ts-ignore
import s from "./PageNotFound.module.scss"
import {Helmet} from "react-helmet-async";
import {NavLink} from "react-router-dom";

export const PageNotFound = () => {
    return (
        <>
            <Helmet>
                <title>Страница не найдена</title>
            </Helmet>
            <div className={s.container}>
                <div className={s.body1}>
                    <h1>404</h1>
                    <h2>Страница не найдена</h2>
                    <NavLink to="/" style={{textDecoration: "none"}}>
                        <button>На главную</button>
                    </NavLink>
                </div>
            </div>
        </>
    )
}
