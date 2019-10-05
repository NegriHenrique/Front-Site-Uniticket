import React, { Component } from 'react';
import { IoIosMenu } from 'react-icons/io';
import '../../css/App.css';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header className="header d-flex justify-content-between align-items-center bg-white col-12">
                <span className="d-flex click" onClick={() => this.props.toggleSideBar()}>
                    <IoIosMenu />
                </span>
                <Link to='/'>
                    <div className="logo"></div>
                </Link>
            </header>
        )
    }
};

export default Header;