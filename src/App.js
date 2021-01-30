// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  add() {
    this.props.onAdd()
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p className="message">
            {this.props.message}
          </p>
          <div>
            <button
              className="margin-right-10"
              onClick={() => { this.add() }}
            >点击加一</button>
            <button
              onClick={this.props.onBack}
            >点击减一</button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
