import React from "react";
import { Route, Switch } from "react-router-dom";


export default class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {className} = this.props;

        return (
            <div className={`nav__overlay--${className}`}>
                <nav className={`nav__box nav__box--${className}`}>
                    <ul>
                        <li className="nav__item">
                            <button className="nav__btn">Log in /<br/>Register</button>
                        </li>
                        <li className="nav__item">
                            <button className="nav__btn">Favorites</button>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}
