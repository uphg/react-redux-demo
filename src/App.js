import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p className="message">
          {props.message}
        </p>
        <div>
          <button
            className="margin-right-10"
            onClick={props.onAdd}
          >点击加一</button>
          <button
            onClick={props.onBack}
          >点击减一</button>
        </div>
      </header>
    </div>
  );
}

export default App;
