import React from "react";
import { Route, Switch } from "react-router-dom";


const Header = (props) => {
    return (
        <header className="header">
            <div className="wrapper">
                <div className="header__main">
                    <button className="header__search">Search</button>
                    <h1>Tytuł</h1>
                    <button className="header__menuB">Menu</button>
                </div>
                <div className="header_sub">
                    <h3>Podtytuł</h3>
                </div>
            </div>
        </header>
    )
};

export default Header;
