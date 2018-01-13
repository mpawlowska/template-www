import React from "react";
import { Route, Switch } from "react-router-dom";
import "normalize.css";
import Header from '../Header/Header';
import Listing from '../Listing/Listing';
import '../../styles/main.scss';


const App = (props) => {
    return (
        <div className="wrapper">
            <Header />
            <Listing />
        </div>
    )
};

export default App;