import React from 'react'
import './App.css';
import TodoCategory from './TodoCategory/todoCategory'

class App extends React.Component {
  render() {
    return ( 
       <div> <TodoCategory></TodoCategory> </div> 
    );
  }
}

export default App;
