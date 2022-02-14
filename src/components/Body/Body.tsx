import * as React from "react";
import {FC} from "react";
import s from "./Body.module.scss";

const Body:FC<any> = ({children}) => {
    return <div className={s.bg1}>
        <div className={s.bg2}>
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

                        </div>
                    </article>
                </div>
            </div>
        </div>
    </div>
}

export {Body};
