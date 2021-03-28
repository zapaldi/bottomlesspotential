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
            <ListCategories updateCategoryFn={this.updateCategory} categories={this.state.categories}></ListCategories>
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
    await this.setState ({ categories: [...this.state.categories, {
      text: category,
      completed: false
    }] })
    localStorage.setItem( 'categories', JSON.stringify(this.state.categories) )
    console.log ('In addCategory function, this.state.categories are: ', this.state.categories)
  }


  updateCategory = async ( category ) => {
    const newCategories = this.state.categories.map (_category => {
      if ( category === _category) 
        return {
          text: category.text,
          completed: !category.completed
      }
      else { 
        return _category
      }
    })
    await this.setState({ categories: newCategories})
    localStorage.setItem ('categories', JSON.stringify(this.state.categories) )
//    console.log('In updateCategory newCategories are: ', newCategories)
//    console.log('In updateCategory this.state.categories are: ', this.state.categories)
    console.log('In categories in localStorage are: ', localStorage.getItem('categories'))
  }
}

export default App;






















