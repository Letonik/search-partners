import React, {useState} from 'react';
import style from './Search.module.scss';
import {FormikTemp, Input, SelectFormik} from "../../Formik/FormikTemp";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {customStyles, stylesCountry, stylesState} from "./StylesSelect";

const Search = ({types, requestPartners}) => {

    const [companyState, setCompanyState] = useState('');

    const findCompany = (val) => {
        setCompanyState(val.company)
        requestPartners(val.company)
    }
    const options = types.map(t => t = {value: t, label: t})

    const findPartners = (val) => {
        requestPartners(companyState, val)
    }
    const valCompany = {company: ''}
    const valType = {type: ''}

    ///////////// Fake Data ///////////////////
    const optionsFake = [
        {value: 'russia', label: 'Russia'},
        {value: 'usa', label: 'USA'},
        {value: 'england', label: 'England'}
    ]
    ///////////////////////////////////////////
    return (
        <div className={style.search}>
            <div className={style.inputWrapper}>
                <FormikTemp funcSubmit={findCompany} val={valCompany}>
                    <Input name="company" type="text"
                           placeholder="Search by company name or address.."/>
                    <button type='submit'>
                        <FontAwesomeIcon icon={faSearch}/>
                    </button>
                </FormikTemp>
            </div>
            <div className={style.selectWrapper}>
                <div className={style.typeWrapper}>
                    <FormikTemp val={valType}>
                        <SelectFormik name='type' options={options} fnForChange={findPartners}
                                      placeholder={'Type'} customStyles={customStyles}/>
                    </FormikTemp>
                </div>
                <div className={style.countryWrapper}>
                    <FormikTemp val={{country: ''}}>
                        <SelectFormik name='country' options={optionsFake} placeholder={'Country'}
                                      customStyles={{...customStyles, ...stylesCountry}}/>
                    </FormikTemp>
                </div>
                <div className={style.stateWrapper}>
                    <FormikTemp val={{state: ''}}>
                        <SelectFormik name='state' options={optionsFake} placeholder={'State'}
                                      customStyles={{...customStyles, ...stylesState}}/>
                    </FormikTemp>
                </div>
            </div>
        </div>
    );
};

export default Search;