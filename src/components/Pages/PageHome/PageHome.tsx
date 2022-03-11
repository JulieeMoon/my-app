import React, {FC} from "react";
// @ts-ignore
import s from "./PageHome.module.scss"
import {Helmet} from "react-helmet-async";

export const PageHome: FC<any> = ({children}) => {
    return (
        <>
            <Helmet>
                <title>Главная</title>
            </Helmet>
            <div className={s.container}>
                <div className={s.body1}>
                    <article className={s.inside}>
                        <div>
                            {children}
                        </div>
                    </article>
                </div>
            </div>
        </>
    )
}