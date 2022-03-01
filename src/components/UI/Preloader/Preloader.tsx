import React from 'react';
// @ts-ignore
import preloader from '../../../assets/images/preloader.svg'
// @ts-ignore
import s from './Preloader.module.scss';

let Preloader = () => {
    return <div className={s.preloader}>
        <img src={preloader}  alt={'Загрузка'}/>
    </div>
}

export {Preloader};