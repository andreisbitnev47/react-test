import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import Radium from 'radium'

class App extends Component {
  state = {
    persons: [
      { name: 'Andrei', age: 29 },
      { name: 'Igor', age: 28 }
    ]
  }

  swithNameHAndler = () => {
    // console.log('Was clicked!');
    this.setState({
      
    });
  }

  render() {
    const style = {
      color: 'green',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'gray'
      }
    }
    return (
      <div className="App">
        <button onClick={this.swithNameHAndler} style={style}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My hobby is microcontrollers</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
      </div>
    );
  }
}

export default Radium(App);
