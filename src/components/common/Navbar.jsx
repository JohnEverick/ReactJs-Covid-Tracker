import React from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
} from "mdbreact";
import * as Constants from "../constants/constants";

class Navbar extends React.Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <>
        <MDBNavbar
          color={Constants.THEME_COLOR}
          dark
          expand="md"
          className="mb-4"
        >
          <MDBNavbarBrand>
            <strong className="white-text">{Constants.APP_TITLE}</strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
              <MDBNavItem active={this.props.active === Constants.GLOBAL_PAGE}>
                <MDBNavLink to="/">Global Monitoring</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem active={this.props.active === Constants.PH_PAGE}>
                <MDBNavLink to="/">Philippines Monitoring</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem active={this.props.active === Constants.ABOUT_PAGE}>
                <MDBNavLink to="#!">About</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </>
    );
  }
}

export default Navbar;
