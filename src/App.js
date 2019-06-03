import React, { Component} from 'react';
import './App.css';
import RollDice from './components/RollDice'
import Dice from './components/Dice'

class App extends Component {
  render(){

    return (
      <div className="App">
        <h1>App</h1>
        <div className="dices">
          <Dice face="five"/>
          <Dice face="two"/>
          <Dice face="four"/>
          <Dice face="three"/>
          <Dice face="one"/>
          <Dice face="six"/>
        </div>
      </div>       
    );
  }
}

export default App;
