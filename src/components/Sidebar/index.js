import React, { Component } from 'react';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { FaHome, FaChartArea } from 'react-icons/fa';

// link for component https://reactjsexample.com/react-side-nav-component/

export default class Sidebar extends Component {
  render() {
    return (
      <SideNav
        onSelect={(selected) => {
          // Add your code here
        }}
        className="bg-primary"
      >
        <SideNav.Toggle />
        <SideNav.Nav 
          
          defaultSelected="home"
        >
          <NavItem eventKey="home">
            <NavIcon>
              <FaHome 
                style={{ fontSize: '1.75em' }}
              />
            </NavIcon>
            <NavText>
              Home
              </NavText>
          </NavItem>
          <NavItem eventKey="charts">
            <NavIcon>
              <FaChartArea 
                style={{ fontSize: '1.75em' }}
              />
            </NavIcon>
            <NavText>
              Charts
              </NavText>
            <NavItem eventKey="charts/linechart">
              <NavText>
                Line Chart
                  </NavText>
            </NavItem>
            <NavItem eventKey="charts/barchart">
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
