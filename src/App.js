import React from 'react';
import style from './App.module.scss'
import Header from "./Components/Header/Header";
import SearchBar from "./Components/SearchBar/SearchBar";
import PartnersBoard from "./Components/PartnersBoard/PartnersBoard";
import Preloader from "./Components/Preloader/Preloader";
import {useSelector} from "react-redux";
import {getIsLoading} from "./Redux/Selectors/Selectors";

function App() {
    const isLoading = useSelector(getIsLoading)
  return (
    <div className={style.app}>
        {isLoading && <Preloader/>}
        <Header/>
        <SearchBar/>
        <PartnersBoard/>
    </div>
  );
}

export default App;
