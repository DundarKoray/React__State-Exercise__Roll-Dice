import React, { Component} from 'react';
import './App.css';
import RollDice from './components/RollDice'


class App extends Component {
  render(){

    return (
      <div className="App">
          <h1>React State Exercise</h1>
          <RollDice />
      </div>       
    );
  }
}

export default App;
