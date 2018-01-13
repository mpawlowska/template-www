import React from "react";
import { Route, Switch } from "react-router-dom";


const Header = (props) => {
    return (
        <header>
            <div className="wrapper">
                <div className="mainHeader">
                    <button className="mainHeader__searchButton">Search</button>

                    <h1>Tytuł</h1>

                    <button className="mainHeader__menuButton">Menu</button>
                </div>

                <div className="subHeader">
                    Podtytuł
                </div>
            </div>
        </header>
    )
};

export default Header;
