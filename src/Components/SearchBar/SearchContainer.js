import React from 'react';
import style from './SearchContainer.module.scss'
import Title from "./Title/Title";
import Search from "./Search/Search";
import {requestPartners} from "../../Redux/Reducers/partnersReducer";

const SearchContainer = ({types, requestPartners}) => {
    return (
        <div className={style.searchContainer}>
            <Title/>
            <Search types={types} requestPartners={requestPartners}/>
        </div>
    );
};

export default SearchContainer;