import React, {FC} from "react";
// @ts-ignore
import s from "./PostPage.module.scss"
import {Helmet} from "react-helmet-async";
import {DesignBox} from "../../../UI/DesignBox";

export const PostPage: FC<any> = ({props}) => {
    return (
        <>
            <Helmet>
                <title>Новости</title>
            </Helmet>

            <div className={s.container}>
                <div className={s.body1}>
                    <article className={s.inside}>
                        <a href={'/news'} className={s.link}>
                            <div className={s.button}>
                                Назад
                            </div>
                        </a>
                        <DesignBox>
                            {/*<div>{props.state.posts}</div>*/}
                        </DesignBox>
                    </article>
                </div>
            </div>
        </>
    )
}
