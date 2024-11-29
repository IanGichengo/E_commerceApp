import React from "react";
import Header from '../Components/Header/Header'
import Popular from '../Components/Popular/Popular';
import Offers from "../Components/Offers/Offers";
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'

const Home = () => {
    return (
        <div>
            <Header/>
            <Popular/>
            <Offers/>
            <NewCollections/>
            <NewsLetter/>
        </div>
    )
}

export default Home
