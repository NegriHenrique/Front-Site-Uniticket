import React, { Component } from 'react';
import '../../styles/sidebar/index.scss';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { FaHome, FaChartArea } from 'react-icons/fa';

// link for component https://reactjsexample.com/react-side-nav-component/

export default class Sidebar extends Component {

  render() {
    const defaultSelected = window.location.pathname.split('/').pop();
    return (
      <SideNav
        onToggle={open => {
          this.props.sideNavOpen(open);
        }}
        expanded={this.props.expanded}
        className="bg-primary"
      >
        <SideNav.Toggle 
          className='sidebar-icons'
        />
        <SideNav.Nav 
          
          defaultSelected={defaultSelected}
        >
          <NavItem  onSelect={() => {window.location='/home'}} eventKey="home">
            <NavIcon>
              <FaHome 
                className='sidebar-icons'
              />
            </NavIcon>
            <NavText>
              Home
              </NavText>
          </NavItem>
          <NavItem eventKey="charts">
            <NavIcon>
              <FaChartArea 
                className='sidebar-icons'
              />
            </NavIcon>
            <NavText>
              Charts
              </NavText>
            <NavItem onSelect={() => {window.location='/exemplo'}} eventKey="exemplo">
              <NavText>
                Line Chart
              </NavText>
            </NavItem>
            <NavItem onSelect={() => {window.location='/exemplo'}} eventKey="charts/barchart">
              <NavText>
                Bar Chart
              </NavText>
            </NavItem>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    )
  }
}
