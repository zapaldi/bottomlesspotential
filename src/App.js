import React from 'react'
import './App.css';
import TodoCategory from './TodoCategory/todoCategory'

class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      todos: []
    }
    
  }
  
  render() {
    return ( 
       <div> 
        {
            4 * 8
        }
       </div> 
    );
  }
  
  componentDidMount = () => {
    const todos = localStorage.getItem('todos')
    
    if ( todos ) {
        const savedTodos = JSON.parse ( todos )
        this.setState ({ todos: savedTodos} )
        console.log ( todos )  
    } else {
        console.log ("No todos")  
    }
    
  }
  
}

export default App;
