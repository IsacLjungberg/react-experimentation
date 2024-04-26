import logo from './logo.svg';
import ImageBox from './ImageBox'
import './App.css';
import React, {useEffect, useState} from 'react';
import TestPage from './pages/TestPage';

function App() {

  const [buttonClickCount, setButtonClickCount] = useState(0);

  function buttonClick(){
    const count = buttonClickCount + 1;
    localStorage.setItem("buttonClickCount", count.toString());
    setButtonClickCount(count);
  }

  function resetCount(){
    localStorage.setItem("buttonClickCount", 0);
    setButtonClickCount(0);
  }

  useEffect(() => {
    setButtonClickCount( parseInt(localStorage.getItem("buttonClickCount")) );
  }, []);

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
          Learn React Bop
        </a>
        <br/>

        <br/>
        <p>{buttonClickCount}</p>
        <button onClick={buttonClick}>Button</button>
        <button onClick={resetCount}>Reset Count</button>

        
      </header>

    </div>
  );
}

export default App;
