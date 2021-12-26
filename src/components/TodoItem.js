import React, { Component } from 'react'

class TodoItem extends Component {
    itemStyle = () => {
        const { completed } = this.props.todo
        return{
            textDecoration: completed ? 'line-through' : 'none',
            backgroundColor: '#f4f4f4',
            padding: '10px',
            borderBottom: '#ccc 2px dotted'
        }
    }

    render() {
        const { id, title } = this.props.todo
        return (
            <div style={this.itemStyle()}>
                <input
                    type='checkbox'
                    onChange={this.props.toggleTodo.bind(this, id)}
                />{' '}
                { title }
                <button 
                    style={btn}
                    onClick={this.props.delTodo.bind(this, id)}
                >
                    x
                </button>
            </div>
        )
    }
}

const btn = {
    float: 'right', 
    color: '#fff',
    background: '#ff0000',
    border: 'none',
    margin: '2px 8px',
    borderRadius: '50%'

}
export default TodoItem
