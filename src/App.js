import React from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './timer.js';
import Counter from './counter.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <div className="count">
            <Counter
            />
          </div>
          {/* <div className="timer">
            <Timer
              hours={'00'}
              minnutes={'00'}
              seconds={'00'}
            />
          </div> */}
        </div>
      </header>
    </div>
  );
}

export default App;
