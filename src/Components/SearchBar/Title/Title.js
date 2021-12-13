import React from 'react';
import style from './Title.module.scss'

const Title = () => {
    return (
        <div className={style.titleContainer}>
            <div className={style.title}>
                Netwrix Partner Locator
            </div>
            <div className={style.subtitle}>
                Hundreds of Netwrix partners around the world are standing by to help you. With our Partner Locator you can easily find the list of authorized partners in your area.
            </div>
        </div>
    );
};

export default Title;