import React from "react";
import { Route, Switch } from "react-router-dom";
import "normalize.css";
import Header from '../Header/Header';
import Listing from '../Listing/Listing';
import Menu from '../Menu/Menu';
import '../../styles/main.scss';


export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            menuClassName: 'hidden'
        }
    }

    handleMenuToggle = () => {
        this.setState(prevState => {
            let newClass;
            prevState.menuClassName === 'hide' || prevState.menuClassName === 'hidden' ? newClass = 'show' : newClass = 'hide';
            return { menuClassName: newClass }
        })
    };

    render() {
        const {menuClassName} = this.state;

        return (
            <div>
                <Header onMenuToggle={this.handleMenuToggle}/>
                <Listing />
                <Menu className={menuClassName} />
            </div>
        )
    }
};
