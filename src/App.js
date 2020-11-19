import './App.css';
import React, { Component, useState } from 'react';
import Person from './Person/Person';

class App extends Component {
// const App = props => {

  state = {
    persons: [
      { name: 'Jp', age: 21},
      { name: 'Edwin', age: 41},
      { name: 'Ruzzle', age: 22},
    ]
  };

  // useState('Test');
  // const [otherState, setOtherState] = useState('some other value');
  // console.log(personsState, otherState);
  // useState({otherState: })
  switchNameHandler = () => {
    console.log("Was Clicked!");
    // this.state.persons[0].name = "Maximilian";
    this.setState({
      persons: [
        { name: 'Jp', age: 22},
        { name: 'Bryan', age: 42},
        { name: 'Ruzzle', age: 23},
      ]
    })
  }
  render(){
    return (
        <div className="App">
            <h1> Hi, I'm React JS</h1>

            <button onClick={this.switchNameHandler}>Switch Name</button>

            <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age}
              />
            <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}>My Hobbies: Golf 
            </Person>
            <Person 
              name={this.state.persons[2].name} 
              age={this.state.persons[2].age}
            />
        </div>
    );
  }
}
// function App() {
//   return (
//     <div className="App">
//       <h1> Hi, I'm React JS</h1>
//     </div>
//   );
// }

export default App;

// state = {
//   persons: [
//     { name: 'Jp', age: 21},
//     { name: 'Edwin', age: 41},
//     { name: 'Ruzzle', age: 22},
//   ],
//   otherState: 'some value'
// }

// switchNameHandler = () => {
//   console.log("Was Clicked!");
//   // this.state.persons[0].name = "Maximilian";
//   this.setState({
//     persons: [
//       { name: 'Jp', age: 22},
//       { name: 'Bryan', age: 42},
//       { name: 'Ruzzle', age: 23},
//     ]
//   })
// }