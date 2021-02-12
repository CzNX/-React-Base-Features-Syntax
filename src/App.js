
import { render } from '@testing-library/react';
import UserOutput from './UserOutput/UserOutput';
import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';


class App extends Component {


  state = {
    username:'fromstate'
  };

  clickHandler = (newName)=>{
    this.setState({
      username:newName,
    })
  }


  nameChangedHandler = (event)=>{
    this.setState(
      {
        username:event.target.value
      }
    );
  }

  render(){
    const style = {
      textAlign: 'center',
      backgroundColor:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer',
      marginBottom: '20px',
      backgroundColor:'lightgrey',
    }

  return (
    <div className="App" style={style}>
      <ol>
        <h1>TASKS TO COMPLETE !</h1>
          <li>Create TWO new components: UserInput and UserOutput</li>
          <li>UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li>Add a method to manipulate the state (=> an event-handler method)</li>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>
      <h1>React Base Feature and Syntax Practice!</h1>
      <button style={style} onClick={this.clickHandler.bind(this,'fromButton')}>Switch Name</button>
      <UserInput 
        input ={this.nameChangedHandler}
        username = {this.state.username}
      ></UserInput>
      <UserOutput username={this.state.username}
        click={this.clickHandler.bind(this,'fromClick')}
      ></UserOutput>
      <UserOutput username={this.state.username}
        click={this.clickHandler.bind(this,'fromClick')}
      ></UserOutput>
      <UserOutput username='newuname3'
        click={this.clickHandler.bind(this,'fromClick')}
      ></UserOutput>
      
    </div>
  );
  }
}

export default App;
