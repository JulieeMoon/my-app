import React, {FC} from "react";
// @ts-ignore
import s from "./Massage.module.scss"
import {Helmet} from "react-helmet-async";

const Message: FC<any> = ({children}) => {
    return (
        <>
            <Helmet>
                <title>Мессенджер</title>
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
    );
};

export {Message};