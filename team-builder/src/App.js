import React, {useState} from 'react';
import {v4 as uuid} from 'uuid';
import logo from './logo.svg';
import './App.css';

const initialTeam = [
  {id: uuid(), fname: 'John', lname: 'Smith', email: 'jsmith@gmail.com', role: 'Senior Engineer'},
  {id: uuid(), fname: 'Jane', lname: 'Doe', email: 'jdoe@gmail.com', role: 'Senior UI/UX Engineer'},
];

function App() {
  const [team, setTeam] = useState(initialTeam);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
