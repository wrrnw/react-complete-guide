import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      {name: 'Warren', age: 26},
      {name: 'Max', age: 28},
      {name: 'Yunshu', age: 22}
    ],
    otherState: 'some other value'
  });

  const switchNameHandler = () => {
    // console.log("Was Clicked");
    //personsState.persons[0].name = 'WarrenBuffet';
    //console.log(personsState.persons[0]);
    setPersonsState({persons: [
      {name: 'Warren Buffett', age: 87},
      {name: 'Bill Gates', age: 59},
      {name: "None", age: 23}
    ]});
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <button onClick={switchNameHandler}>Switch name</button>
      <Person 
        name={personsState.persons[0].name} 
        age={personsState.persons[0].age}/>
      <Person 
        name={personsState.persons[1].name} 
        age={personsState.persons[1].age}/>
      <Person 
        name={personsState.persons[2].name} 
        age={personsState.persons[2].age}/>
    </div>                                
  );
}



export default app;


