import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from './btn.module.css';

class Home extends Component {
  render() {
    const { isAuthenticated, login } = this.props.auth;
    return (
      <div>
        <button className={styles.button} >Test CSS</button>
        <h1>Home</h1>

        {isAuthenticated() ? (
          <Link to="/profile">View profile</Link>
        ) : (
            <button className={styles.button} onClick={login}>Log In</button>
          )}
      </div>
    );
  }
}

export default Home;
