import React, { Component } from 'react'; 
import '../styles/global/base.scss';
import Header from './Header';
import Routes from '../app/Routes';

class Template extends Component {

    constructor() {
        super()
        this.state = {
            sideBarOpen: true,
        };

        this.toggleSideBar = this.toggleSideBar.bind(this);
    }

    toggleSideBar() {
        this.setState({
            sideBarOpen: !this.state.sideBarOpen
        }); 
    }
    
    render () {
        return (
            <div className="main-wrapper">
                <Header 
                    toggleSideBar={this.toggleSideBar}
                    sideBarOpen={this.state.sideBarOpen}
                />
                
                <div id="main-wrapper" className="container">
                    <Routes />
                </div>
            </div>
        );
    }
}

export default Template;