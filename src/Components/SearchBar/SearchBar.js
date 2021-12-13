import React, {useEffect} from 'react';
import style from './SearchBar.module.scss'
import SearchContainer from "./SearchContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {requestPartners, requestType} from "../../Redux/Reducers/partnersReducer";
import {getTypesSelector} from "../../Redux/Selectors/Selectors";

const SearchBar = (props) => {
    useEffect(() => {
        props.requestType();
        props.requestPartners();
    }, [])
    return (
        <div className={style.searchBar}>
            <SearchContainer types={props.types} requestPartners={props.requestPartners}/>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        types: getTypesSelector(state)
    }
}

export default compose(
    connect(mapStateToProps, {requestType, requestPartners}),
)(SearchBar);
