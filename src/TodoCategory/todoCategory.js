import React from 'react';
import './todoCategory.css'

class todoCategory extends React.Component {
    
    
    render() {
        
        const { category } = this.props
        
        return (
            <div className={ 'todoCategory' + (category.completed ? ' completed' : '')} onClick={this.strikeOutCategory}>{category.text}</div>
        )
            
    }
    
    strikeOutCategory = () => {
        this.props.updateCategoryFn (this.props.category)
    }


}

export default todoCategory;