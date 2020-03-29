import React, { Component } from "react";
import LandingPage from "./components/LandingPage";
import { auth } from "./services/firebase";
import { signin } from "./helpers/auth";
import { readUserData } from "./helpers/db";

import "./App.css";

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
    return (
      <div className="App">
        <LandingPage />
      </div>
    );
  }
}

export default App;
