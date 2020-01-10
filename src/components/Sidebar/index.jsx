import React from "react";
import "../../styles/sidebar/index.scss";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import {
  FaHome,
  FaChartArea,
  FaCreditCard,
  FaUtensils,
  FaHamburger
} from "react-icons/fa";

export default function Sidebar(props) {
  const defaultSelected = window.location.pathname.split("/").pop();
  return (
    <SideNav
      onToggle={open => {
        props.sideNavOpen(open);
      }}
      expanded={props.expanded}
      className="bg-primary"
    >
      <SideNav.Toggle className="sidebar-icons" />
      <SideNav.Nav defaultSelected={defaultSelected}>
        <NavItem
          onSelect={() => {
            window.location = "/home";
          }}
          eventKey="home"
        >
          <NavIcon>
            <FaHome className="sidebar-icons text-white" />
          </NavIcon>
          <NavText>Home</NavText>
        </NavItem>
        <NavItem
          onSelect={() => {
            window.location = "/cardapio";
          }}
          eventKey="cardapio"
        >
          <NavIcon>
            <FaUtensils className="sidebar-icons text-white" />
          </NavIcon>
          <NavText>Cardápio</NavText>
        </NavItem>
        <NavItem
          onSelect={() => {
            window.location = "/ingredientes";
          }}
          eventKey="ingredientes"
        >
          <NavIcon>
            <FaHamburger className="sidebar-icons text-white" />
          </NavIcon>
          <NavText>Ingredientes</NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
}
