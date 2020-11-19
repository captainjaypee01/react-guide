import './App.css';
import React, { Component } from 'react';
import Person from './Person/Person';

class App extends Component {
// const App = props => {

  state = {
    persons: [
      { id: 1, name: 'Jp', age: 21},
      { id: 2, name: 'Edwin', age: 41},
      { id: 3, name: 'Ruzzle', age: 22},
    ],
    showPersons: false
  };

  // useState('Test');
  // const [otherState, setOtherState] = useState('some other value');
  // console.log(personsState, otherState);
  // useState({otherState: })
  // switchNameHandler = (newName) => {
  //   console.log("Was Clicked!");
  //   // this.state.persons[0].name = "Maximilian";
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 22},
  //       { name: 'Bryan', age: 42},
  //       { name: 'Ruzzle', age: 23},
  //     ]
  //   });
  // }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const changedPerson = {
      ...this.state.persons[personIndex]
    };
    // Alternative method
    // const changedPerson = Object.assign({}, this.state.persons[personIndex]);
    changedPerson.name = event.target.value;
    const updatedPersons = [...this.state.persons];
    updatedPersons[personIndex] = changedPerson;
    this.setState({
      persons: updatedPersons
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons : !doesShow });
  }

  render(){
    const styleBtn = {
      backgroundColor : "white",
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    let persons = null;
    if(this.state.showPersons) {
      
      persons = (
          <div>
            {this.state.persons.map((person, index) => {
              return <Person 
                key={person.id}
                name={person.name} 
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                change={(event) => this.nameChangeHandler(event, person.id)}
              />
            })}
            
        </div>
      )
    }

    return (
        <div className="App">
            <h1> Hi, I'm React JS</h1>

            <button 
              style={styleBtn}
              onClick={this.togglePersonsHandler}>Toggle Persons</button>
              
             { persons }
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