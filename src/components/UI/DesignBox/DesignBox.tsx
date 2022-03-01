import * as React from "react";
import {FC} from "react";
// @ts-ignore
import s from './DesignBox.module.scss';

const DesignBox: FC<any> = ({children, props}) => {
    return (
        <div className={s.box}>
            <main className={s.container}>
                <section className={s.text}>{children}</section>
            </main>
        </div>
    )
}

export {DesignBox};