import React from 'react';
import style from './EmptyComponent.module.scss'

const EmptyComponent = () => {
    return (
        <div className={style.emptyComponent}>
            Your search parameters did not match any partners. Please try different search.
        </div>
    );
};

export default EmptyComponent;