import React from 'react';
import {useSelector} from "react-redux";
import {getPartnerSelector} from "../../Redux/Selectors/Selectors";
import style from './PartnersBoard.module.scss'
import PartnerCard from "./PartnerCard";
import EmptyComponent from "./EmptyComponent";

const PartnersBoard = () => {
    const partners = useSelector(getPartnerSelector)
    console.log(partners)
    return (
        <div className={style.partnersBoard}>
            {
                !partners.length && <EmptyComponent/>
            }
            {
                partners.map(partner => <PartnerCard partner={partner}/>)
            }
        </div>
    );
};

export default PartnersBoard;