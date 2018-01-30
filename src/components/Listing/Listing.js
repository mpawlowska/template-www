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
        menuState === 'show' ? this.setState({listClass: 'slide-out'}) : this.setState({listClass: 'slide-in'})
    }

    render() {
        let className;
        const {listClass} = this.state;
        console.log(listClass);
        { listClass ? className = `${listClass} list` : className = 'list'}
        console.log('klasa', className);

        return (
            <main className={className}>
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
            </main>
        )
    }
}
