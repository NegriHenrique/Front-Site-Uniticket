import React, { Component } from 'react'; 
import '../css/App.css';
import Header from './header/Header';

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
                />
                
            </div>
        );
    }
}

export default Template;