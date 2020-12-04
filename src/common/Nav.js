import React, { Component } from "react";
import { NavLink } from "react-router-dom";

// #2c4687
//#007bff
class Nav extends Component {

  render() {
    const { isAuthenticated, login, logout } = this.props.auth;
    const cssStyle = { color: '#ff1900', fontFamily: 'sansSerif', fontSize: '28px' }
    return (
      <nav className="navbar navbar-lignt" style={{ backgroundColor: '#1021a3', fontSize: '28px', width: '100%' }}>
        <NavLink style={{ color: 'white' }} activeStyle={cssStyle} exact to="/">Home</NavLink>
        <NavLink style={{ color: 'white' }} activeStyle={cssStyle} to="/profile">Profile</NavLink>
        { isAuthenticated() && (<NavLink style={{ color: 'white' }} activeStyle={cssStyle} to="/upload">Detect Pneumonia</NavLink>)}
        <button className="btn btn-primary" onClick={isAuthenticated() ? logout : login}>
          {isAuthenticated() ? "Log Out" : "Log In"}</button>
      </nav >
    );
  }
}

export default Nav;
