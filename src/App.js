import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {v4 as uuid} from 'uuid'
import Header from './components/layout/Header'
import Todos from './components/Todos'
import About from './components/pages/About'
import AddTodo from './components/AddTodo'

class App extends Component {
    state = {
        todos: [
            {
                id: uuid(),
                title: 'Take out the trash',
                completed: false
            },
            {
                id: uuid(),
                title: 'Dinner with wife',
                completed: false
            },
            {
                id: uuid(),
                title: 'Meeting with boss',
                completed: false
            }
        ]
    }

    toggleTodo = (id) => {
        this.setState({ todos: this.state.todos.map(
            (todo) => {
                if (id === todo.id) {
                    todo.completed = !todo.completed
                }
                return todo;
            }
        )})
    }

    delTodo = (id) => {
        this.setState({todos: [...this.state.todos.filter(
            (todo) => todo.id !== id
        )]})
    }

    onSubmit = (title) => {
        const newTodo = {
            id: uuid(),
            title,
            completed: false
        }
        console.log('Sumitted');
    }

    render() {
        return (
            <Router>
                <div className='App'>
                    <Header />
                    <AddTodo onSubmit={this.props.onSubmit} />
                    <Route exact path='/' render={props => (
                        <React.Fragment>
                            <Todos todos={this.state.todos} toggleTodo={this.toggleTodo} delTodo={this.delTodo} />
                        </React.Fragment>
                    ) } />
                    <Route path='/about' component={About} />
                </div>
            </Router>
        )
    }
}

export default App
