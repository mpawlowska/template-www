import React from "react";
import { Route, Switch } from "react-router-dom";


export default class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {className} = this.props;

        return (
            <div className={`${className} nav`}>
                <nav className="nav__box">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <button>Link one</button>
                        </li>
                        <li className="nav__item">
                            <button>Link two</button>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}