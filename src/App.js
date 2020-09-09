import React from 'react';
import './App.css';
import Stopwatch from './Components/Stopwatch/Stopwatch'
import Timer from './Components/Timer/Timer'

function App() {
  return (
    <div className="app-container">
      <div className="app-stopwatch">
        <Stopwatch/>
      </div>
      <div className="app-timer">
        <Timer/>
      </div>
    </div>
  );
}

export default App;
