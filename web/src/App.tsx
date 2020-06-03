import React, {useState} from 'react';
import './App.css';
import Header from './Header'

// JSX: Sintaxe de XML dentro do JavaScript

function App() {
  const [counter, setCounter] = useState(0)  // Retorna um array => [value, function to update]

  function handleButtonClick(){
    setCounter(counter + 1)
  }
  
  return (
    <div>
      <Header title="Hello World"/>

      <h2>{counter}</h2>
      <button type="button" onClick={handleButtonClick}>Aumentar</button>
    </div>
  );
}

export default App;
