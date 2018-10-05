// =============
// Dependencies
// =============
// import main from './main.js'
import React from 'react';
import {render} from 'react-dom';


console.log("Congrats, your app is running!");

const App = () => {
  return <div>
    <h2>THis should not work</h2>
    
  </div>
}

render(<App/>, document.getElementById('root'))