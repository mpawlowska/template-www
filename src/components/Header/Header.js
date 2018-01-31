import React from "react";
import { Route, Switch } from "react-router-dom";


export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className="header">
                <div className="header__main">
                    <button
                        className="header__menuBtn"
                        onClick={ () => this.props.onMenuToggle() }
                    >
                        Menu
                    </button>
                    <h1 className="header__title">Tytuł</h1>
                    <button className="header__searchBtn">Search</button>
                    <h2 className="header__subtitle">Podtytuł</h2>
                </div>
            </header>
        )
    }
};
