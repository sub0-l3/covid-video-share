import React, { Component } from "react";

import "./NavigationBar.scss";

class NavigationBar extends Component {
  static defaultProps = {
    shouldDisplayMenu: true
  };

  constructor(props) {
    super(props);
    this.state = {
      
    };
  }


  render() {
    const baseClassName = "psa-navigation-bar";

    
    return (
      <div className={`${baseClassName}`}>
        <ul className={`${baseClassName}__nav-ul`}>
            <li><a className="active" href={process.env.REACT_APP_LINK_HOME}>Back</a></li>
            <li><a href={process.env.REACT_APP_LINK_VIDEO_LIB}>Video library</a></li>
            <li><a href={process.env.REACT_APP_LINK_REDIRECT_UNAUTHORIZED}>Logout</a></li>
        </ul>
      </div>
    );
  }
}

NavigationBar.propTypes = {};

export default NavigationBar;
