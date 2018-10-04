import React, {Component} from 'react';
import { Link } from "react-router-dom";
// import Board from './Board';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boards: [],
      selectedBoard: null,
    };
  }
  render() {
    return (
      <div>
          <div className="container">
            <div className="col-sm-12">
              { /* This is where we'll render the boards */ }
              <div className="dashboard-background" id="root">
                <p>Just some Information about your Dashboard</p>
                <h1 className="dashboard-header">Dashboard</h1>
              </div>
            </div>
          </div>
      </div>
    );
  };
};

export default Dashboard;