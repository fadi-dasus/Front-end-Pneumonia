import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Nav from "./common/Nav";
import Auth from "./Auth/Auth";
import Callback from "./Auth/Callback";
import Public from "./components/Public";
import Private from "./components/Private";
import brain from './assets/brain.jpeg';
import UploadPage from './components/UploadPage'

class App extends Component {
  constructor(props) {
    super(props);
    this.auth = new Auth(this.props.history);
  }
  render() {
    return (
      <>
        <div className="jumbotron" style={{ backgroundImage: "url(" + brain + ")", height: '100%', position: 'absolute', width: '100%' }}   >

          <Nav auth={this.auth} />
          <div className="body">
            <Route
              path="/"
              exact
              render={props => <Home auth={this.auth} {...props} />}
            />
            <Route
              path="/callback"
              render={props => <Callback auth={this.auth} {...props} />}
            />
            <Route
              path="/profile"
              render={props =>
                this.auth.isAuthenticated() ? (
                  <Profile auth={this.auth} {...props} />
                ) : (
                    <Redirect to="/" />
                  )
              }
            />
            <Route path="/public" component={Public} />
            <Route
              path="/private"
              render={props =>
                this.auth.isAuthenticated() ? (
                  <Private auth={this.auth} {...props} />
                ) : (
                    this.auth.login()
                  )
              }
            />
            <Route path="/upload" component={UploadPage} />

          </div>
        </div>
      </>

    );
  }
}

export default App;
