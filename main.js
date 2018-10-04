// =============
// Dependencies
// =============
import React, { Component } from 'react';
import { HashRouter, Route, Switch, Link } from 'react-router-dom';

// =============
// Dependencies
// =============

class Main extends Component {
  constructor(props) {
  super(props);
  }
  render() {
    return (
      <div className="container">
          <div className="row">
            <div className="col-sm-12">
              { /* This is what actually generates the images */ }
              <p>This is the Dashboard Page</p>
            </div>
          </div>
      </div>
    );
  };
};

export default Main;