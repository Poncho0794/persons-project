import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Alfonso', age: 25 },
      { name: 'Montse', age: 28 },
      { name: 'Simba', age: 5 },
    ],
    otherState: 'some othe value'
  })
  const [otherState, setOtherState] = useState('some othe value')

  const switchNameHandler = () => {
    console.log('Was clicked!')
    setPersonsState({  
      persons: [
        { name: 'Alfonso', age: 26 },
        { name: 'Montse', age: 28 },
        { name: 'Simba', age: 5 },
    ]})
  }
  
  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <Person name = {personsState.persons[0].name} age={personsState.persons[0].age}>
        My hobbies are playing videogames
      </Person>
      <button onClick={switchNameHandler}>Switch Name</button>
      <i>{otherState}</i>
    </div>
  );
}

export default App;

