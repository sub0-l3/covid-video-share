import React, { Component } from "react";
import NavigationBar from '../NavigationBar'
import { auth } from "../../services/firebase";
import { signin } from "../../helpers/auth";
import { readUserData } from "../../helpers/db";

import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false
    };
  }
  async componentDidMount() {
    await signin("tech@hopscotch.health", "111111");

    auth().onAuthStateChanged(user => {
      if (user) {
        readUserData(user.uid);

        this.setState({
          authenticated: true
        });
      } else {
        this.setState({
          authenticated: false
        });
        window.setTimeout(function(){
          // Move to a new location or you can do something else
          window.location.href = process.env.REACT_APP_LINK_REDIRECT_UNAUTHORIZED;
    
      }, 5000);
      }
    });
  }

  render() {
    const baseClassName = "psa-app"
    return (
      <div className={`${baseClassName}`}>
            <NavigationBar />
          <div className={`${baseClassName}__app-div`}>
            {this.props.children}
          </div>
      </div>
    );
  }
}

export default App;
