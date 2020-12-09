import React, { PureComponent } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Nav from "./common/Nav";
import Auth from "./Auth/Auth";
import Callback from "./Auth/Callback";
import lung from './assets/lung.jpg';
import UploadPage from './components/UploadPage'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFoundPage from './components/pages/NotFoundPage'



class App extends PureComponent {
  constructor(props) {
    super(props);
    this.auth = new Auth(this.props.history);
  }
  render() {
    return (
      <>

        <div className="jumbotron" style={{ backgroundImage: "url(" + lung + ")", height: '100%', position: 'absolute', width: '100%' }}   >

          <ToastContainer autoClose={3000} />
          <Nav auth={this.auth} />
          <div className="body">
            <Switch>
              <Route path="/" exact render={props => <Home auth={this.auth} {...props} />} />
              <Route path="/callback" render={props => <Callback auth={this.auth} {...props} />} />
              <Route path="/profile"
                render={props => this.auth.isAuthenticated() ? (<Profile auth={this.auth} {...props} />) : (<Redirect to="/" />)} />
              <Route path="/upload"
                render={props => this.auth.isAuthenticated() ? (<UploadPage auth={this.auth} {...props} />) : (this.auth.login())} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>

        </div>
      </>

    );
  }
}

export default App;
