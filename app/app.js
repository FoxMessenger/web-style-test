// ==============
// Dependencies
// ==============
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link } from 'react-router-dom';

// ==============
// Main Dashboard
// ==============
import Header from './components/Header';
import Footer from "./components/Footer";
import Board from './components/Board';
import Dashboard from './components/Dashboard';

const App = () => {
    return (
      <HashRouter>
        <div>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route path="/board/:id" component={Board} />
            {/* <Route exact path="/dashboard" render={ (props) => ( 
                <Dashboard {...props} data={userData} />)} /> */}
            <Route exact path="/" component={dashboard}/>
            <Footer />
      </div>
      </HashRouter>
    )
  }
  
render(<App/>, document.getElementById('root'));

