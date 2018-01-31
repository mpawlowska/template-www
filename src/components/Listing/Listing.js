import React from "react";
import { Route, Switch } from "react-router-dom";
import ListItem from './ListItem';

export default class Listing extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            listClass: ''
        }
    }

    componentWillReceiveProps(nextProps) {
        const {menuState} = nextProps;
        menuState === 'show' ? this.setState({listClass: 'main--slide-out'}) : this.setState({listClass: 'main--slide-in'})
    }

    render() {
        let className;
        const {listClass} = this.state;
        { listClass ? className = `${listClass} main` : className = 'main'}

        return (
            <main className={className}>
                <ul className="list">
                    <li className="item">
                        <ListItem />
                    </li>
                    <li className="item">
                        <ListItem />
                    </li>
                    <li className="item">
                        <ListItem />
                    </li>
                    <li className="item">
                        <ListItem />
                    </li>
                    <li className="item">
                        <ListItem />
                    </li>
                    <li className="item">
                        <ListItem />
                    </li>
                    <li className="item">
                        <ListItem />
                    </li>
                    <li className="item">
                        <ListItem />
                    </li>
                </ul>
            </main>
        )
    }
}
