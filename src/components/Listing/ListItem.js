import React from "react";
import { Route, Switch } from "react-router-dom";

export default class ListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="listItem">
                <div className="listItem__imgContainer">
                    <img src="https://www.menshealth.com/sites/menshealth.com/files/beer-main_0.jpg" className="listItem__img" alt="Beer image"/>
                </div>
                <h3 className="listItem__name">Nazwa</h3>
                <p className="listItem__tagline">Tagline</p>
            </div>
        )
    }
}

