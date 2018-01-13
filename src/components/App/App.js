import React from "react";
import { Route, Switch } from "react-router-dom";
import "normalize.css";
import Header from '../Header/Header';
import Listing from '../Listing/Listing';
// import '../../sass/main.scss';
require('../../styles/main.scss');

const App = (props) => {
    return (
        <div>
            <Header />
            <Listing />
        </div>
    )
};

export default App;