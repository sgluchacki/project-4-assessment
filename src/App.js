import React, { Component } from 'react';
import Circles from './components/Circles/Circles';
import CircleSelector from './components/CircleSelector/CircleSelector';
import './App.css';

class App extends Component {
  state = {
    currentSelection: 1
  }

  handleClick = (buttonID) => {
    this.setState({
      currentSelection: buttonID
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <>
            <CircleSelector 
              handleClick={this.handleClick}
              currentSelection={this.state.currentSelection}
            />
            <Circles 
              handleClick={this.handleClick}
              currentSelection={this.state.currentSelection}
            />
          </>
        </main>
      </div>
    );
  }
}

export default App;