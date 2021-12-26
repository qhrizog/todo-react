import React, { Component } from 'react'

class AddTodo extends Component {
    render() {
        return (
            <form style={{display: 'flex'}} >
                <input 
                    type='text'
                    placeholder='Add Todo ...'
                    style={{flex: '10', padding: '5px'}}
                />
                <input
                    type='submit'
                    value='Submit'
                    style={{flex: '1'}}
                    className='btn'
                    onSubmit={this.props.onSubmit}
                />
            </form>
        )
    }
}

export default AddTodo
