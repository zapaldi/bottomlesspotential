import React from 'react';

class AddCategory extends React.Component {

    constructor() {
        super();
        this.state = {
            category: ''
        }
    }

    render() {
        return (
            <div className='addCategoryContainer' >
                <form onSubmit={ (e) => this.submitTodo(e) } >
                    <input id='addCategoryInput' onChange={ (e) => this.updateInput(e) } type='text' ></input>
                    <button type='submit'>Add Category</button>
                </form>
            </div>
        )
            
    }
    
    updateInput = (e) => {
        this.setState ({ category: e.target.value })
    }
    
    submitTodo = (e) => {
        e.preventDefault();
        this.props.addCategoryFn(this.state.category)
        document.getElementById('addCategoryInput').value = ''
    }
}

export default AddCategory;