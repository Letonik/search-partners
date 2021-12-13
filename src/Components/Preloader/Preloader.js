import React from 'react';
import style from './Preloader.module.scss'
import preloader from '../Images/preloader.svg';

const Preloader = () => {
    return (
        <div className={style.preloader}>
                <img src={preloader} alt="preloader"/>
        </div>
    );
};

export default Preloader;