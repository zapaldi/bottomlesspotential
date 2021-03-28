import React from 'react'
import './App.css';
import AddCategory from './AddCategory/addCategory'
import ListCategories from './ListCategories/listCategories.js'

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
            <AddCategory addCategoryFn={this.addCategory} ></AddCategory>
            <ListCategories></ListCategories>
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
  
  addCategory = async ( category ) => {
    await this.setState ({ categories: [...this.state.categories, category] })
    localStorage.setItem( 'categories', JSON.stringify(this.state.categories) )
    console.log ('In addCategory function, this.state.categories are: ', this.state.categories)
    console.log ('In addCategory function, localStorage.categories are: ', localStorage.getItem('categories') )
  }

}

export default App;






















