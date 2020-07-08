import React, { Component } from "react";
import { BrowserRouter, Link } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link to="/" className="active navbar-brand">
                Scotch Cars
              </Link>
            </div>
            <div
              className="collapse navbar-collapse"
              id="bs-example-navbar-collapse-1"
            >
              <ul className="nav navbar-nav">
                {/* Change from a to Link */}
                <li>
                  <Link to="/" className="active">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/cars" className="active">
                    Cars
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="active">
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* <div className="container">{this.props.children}</div> */}
      </div>
    );
  }
}

export default Main;
