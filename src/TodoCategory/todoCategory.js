import React from 'react';

class todoCategory extends React.Component {
    
    
    render() {
        
        const { category } = this.props
        
        return (
            <div>{category.text}</div>
        )
            
    }
    
    strikeOutCategory = () => {
        console.log('In todoCategory strikeOutCategory function')   
    }

}

export default todoCategory;