import React from 'react';
import TodoCategory from '../TodoCategory/todoCategory.js'

class listCategories extends React.Component {
    
    
    render() {
        
        const { categories } = this.props
        
        return (
            <div className='listTodosContainer'>
                {
                    categories.map ( ( _category, _index) => {
                        return (
                            <TodoCategory key={_index} category={_category}></TodoCategory>   
                        )
                    })
                }
            </div>
        )
            
    }

}

export default listCategories;