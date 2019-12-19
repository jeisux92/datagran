import React from 'react';
import './App.css';


import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";



import LineGraphs from "./pages/LineGraphs";

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route component={LineGraphs} path="/" exact />
          <Route component={() => <h1>Posts</h1>} path="/posts" exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
