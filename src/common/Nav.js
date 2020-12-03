import React, { Component } from "react";
import { NavLink } from "react-router-dom";


class Nav extends Component {

  render() {
    const { isAuthenticated, login, logout } = this.props.auth;
    const cssStyle = { color: 'orange' }
    return (
      <nav className="navbar navbar-lignt" style={{ backgroundColor: '#ed5c6e', fontSize: '22px' }}>
        <NavLink activeStyle={cssStyle} exact to="/">Home</NavLink>
        <NavLink activeStyle={cssStyle} to="/profile">Profile</NavLink>
        { isAuthenticated() && (<NavLink activeStyle={cssStyle} to="/upload">Detect Pneumonia</NavLink>)}
        <button className="btn btn-primary" onClick={isAuthenticated() ? logout : login}>
          {isAuthenticated() ? "Log Out" : "Log In"}</button>
      </nav >
    );
  }
}

export default Nav;
