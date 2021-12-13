import React from 'react';
import style from './PartnerCard.module.scss'

const PartnerCard = ({partner}) => {
    console.log(partner)
    return (
        <div className={style.partnerCard}>
            <div className={style.image}>
                <img src={partner.logo} alt="type"/>
            </div>
            <div className={style.info}>
                <div className={style.company}>{partner.company}</div>
                <div className={style.address}>{partner.address}</div>
            </div>
            <div className={style.contacts}>
                <div className={style.site}>
                    <a href={partner.website}>Website</a>
                </div>
                <div className={style.phone}>{partner.phone}</div>
            </div>
            <div className={style.type}>
                {partner.status}
            </div>
        </div>
    );
};

export default PartnerCard;