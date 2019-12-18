import React from 'react';
import './App.css';
import Csv from './components/csv';
import Button from "./components/button";

function App() {
  const onProcessHandler = () => {
 
  }

  return (
    <div className="App">
      <Csv></Csv>
      <Button onClick={onProcessHandler}>Process</Button>
    </div>
  );
}

export default App;
