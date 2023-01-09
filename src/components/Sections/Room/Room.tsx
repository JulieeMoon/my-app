// @ts-ignore
import React, {FC} from "react";
// @ts-ignore
import s from "./Room.module.scss"
import {Helmet} from "react-helmet-async";

export const Room: FC<any> = ({children}) => {
    return (
        <>
            <Helmet>
                <title>Вебинарная комната</title>
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

