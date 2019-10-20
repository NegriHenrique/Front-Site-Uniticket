import React, { Component } from 'react'; 
import '../styles/global/base.scss';
import Header from './Header';
import Sidebar from './Sidebar';
import Routes from '../app/Routes';

class Template extends Component {
    render () {
        return (
            <div className="main-wrapper">
                <Header />
                <div id="main-container" className="position-relative">
                    <Sidebar/>
                    <Routes />
                </div>
            </div>
        );
    }
}

export default Template;