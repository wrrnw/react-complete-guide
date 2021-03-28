import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Warren', age: 26},
      {name: 'Max', age: 28},
      {name: 'Yunshu', age: 22}
    ],
    otherState: 'some other value'
  };

  switchNameHandler = () => {
    // console.log("Was Clicked");
    //this.state.persons[0].name = 'WarrenBuffet';
    //console.log(this.state.persons[0]);
    this.setState({
      persons: [
        {name: 'Warren Buffett', age: 87},
        {name: 'Bill Gates', age: 59},
        {name: "None", age: 23}
    ]});
  };

  // nameChangeHandler = (event) => {
  //   this.setState( {
  //     persons: [
  //       {name: 'Max', age: 28},
  //       {name: 'Manu', age: 29},
  //       {name: 'Stephanie', age: 27}
  //     ]
  //   })
  // }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler}>My Hobbies: Racing </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>                                
    );
  }
}



export default App;


