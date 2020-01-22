import React from 'react';
import logo from './logo.svg';
import './App.css';

const Welcome = (props) => {
  return (
      <div>
        <h2>Welcome {props.name}!</h2>
        <h3>Your balance is {props.balance} </h3>
      </div>
    );
}

function App() {
  return (
    <div>
      Hey World!
      <Welcome name='Ítalo Souza' balance = 'E24,00!'/>
    </div>
  );
}

export default App;
