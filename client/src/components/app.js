import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Dashboard from './Dashboard';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        {/* By adding a route path here, we can access the Dashboard configuration within the same folder*/}
        <Route exact path="/" component={Dashboard} />
      </div>
    </BrowserRouter>
  );
};

export default App;