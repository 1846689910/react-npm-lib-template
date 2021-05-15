import logo from './logo.svg';
import './App.css';
import Demo, { Demo2, MyButton } from "tested-lib";
import "tested-lib/dist/index.css";


function App() {
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
        <Demo />
        <Demo2 />
        <MyButton/>
      </header>
    </div>
  );
}

export default App;
