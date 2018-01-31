import React from "react";
import { Route, Switch } from "react-router-dom";
import "normalize.css";
import { breakpoints } from '../utils_responsive/breakpoints';
import Header from '../Header/Header';
import Listing from '../Listing/Listing';
import Menu from '../Menu/Menu';
import '../../styles/main.scss';
import MediaQuery from 'react-responsive';


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

                <MediaQuery maxWidth={breakpoints.sm}>
                    <div className="wrapper">
                        <Menu className={menuClassName} />
                        <Listing menuState={menuClassName} />
                    </div>
                </MediaQuery>

                <MediaQuery minWidth={breakpoints.md_min} maxWidth={breakpoints.md_max}>
                    <div className = "wrapper">
                        <Listing />
                        <Menu />
                    </div>
                </MediaQuery>

                <MediaQuery minWidth={breakpoints.lg_min} maxWidth={breakpoints.lg_max} >
                    <div>
                        <Listing />
                    </div>
                </MediaQuery>

                <MediaQuery minWidth={breakpoints.xl} >
                    <div>
                        <Listing />
                    </div>
                </MediaQuery>




            </div>
        )
    }
};
