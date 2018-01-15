import React from "react";
import { Route, Switch } from "react-router-dom";


export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className="header">
                <div className="wrapper">
                    <div className="header__main">
                        <button className="header__searchBtn">Search</button>
                        <h1 className="header__title">Tytuł</h1>
                        <button
                            className="header__menuBtn"
                            onClick={ () => this.props.onMenuToggle() }
                        >
                            Menu
                        </button>
                    </div>
                    <div className="header__sub">
                        <h3>Podtytuł</h3>
                    </div>
                </div>
            </header>
        )
    }
};
