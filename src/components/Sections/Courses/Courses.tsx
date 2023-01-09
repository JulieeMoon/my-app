// @ts-ignore
import React, {FC} from "react";
// @ts-ignore
import s from "./Courses.module.scss"
import {Helmet} from "react-helmet-async";

export const Courses: FC<any> = ({children}) => {
    return (
        <>
            <Helmet>
                <title>Мои курсы</title>
            </Helmet>
            <div className={s.container}>
                <div className={s.body1}>
                    <article className={s.inside}>
                        <div>
                            {children}
                        </div>
                    </article>
                </div>
                <div className={s.body2}>
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
