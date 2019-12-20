import React from 'react';
import './App.css';

import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import LineGraphs from "./pages/LineGraphs";
import UserPosts from "./pages/UserPosts";
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route component={UserPosts} path="/posts" exact />
          <Route component={LineGraphs} path="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
