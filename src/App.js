import React from 'react'
import './App.css';
import TodoCategory from './TodoCategory/todoCategory'
import AddCategory from './AddCategory/addCategory'

class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      categories: []
    }
    
  }
  
  render() {
    return ( 
       <div> 
            <AddCategory></AddCategory>
       </div> 
    );
  }
  
  componentDidMount = () => {
    const categories = localStorage.getItem('categroies')
    
    if ( categories ) {
        const savedCategories = JSON.parse ( categories )
        this.setState ({ categories: savedCategories} )
        console.log ( categories )  
    } else {
        console.log ("No categories")  
    }
    
  }
  
}

export default App;
