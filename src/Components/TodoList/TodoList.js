import Todos from '../todos/todos'
import React, { Component } from 'react'
import AddTodo from '..//addTodo/addTodo';
import './TodoList.css'
import Header from '../Header/Header'
import { getAllTodos, putTodos, setTodos, deleteTodo } from '../../Services/todosServices';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
export default class TodoList extends Component {
    constructor() {
        super();

        this.state = {
            todos: [],
            statusTodos: 'all'
        }
    }


    async doneTodo(todoId) {
        try {
            let allTodos = [...this.state.todos];
            let todoIndex = allTodos.findIndex(todo => todo.id === todoId);
            let mainTodo = allTodos[todoIndex];
            mainTodo.done = !mainTodo.done;
            await putTodos(mainTodo, todoId);
        } catch (err) {
            console.log(err);
        }

    }

    async deleteTodo(todoId) {
        try {
            await deleteTodo(todoId);
            toast.error('Delete Todo is Success')
        } catch (err) {
            console.log(err);
        }
    }

    addNewTodo(todoName) {
        let newTodo = { name: todoName, done: false };
        const postTodo = async () => {
            try {
                await setTodos(newTodo);
                toast.success('Add Todo is Success')
            } catch (err) {
                console.log(err);
            }
        }
        postTodo()
    }

    changeComplateStatus(e) {
        this.setState({
            statusTodos: e.target.value
        })
    }

    componentDidMount() {
        const setTodoState = async () => {
            const { data } = await getAllTodos();
            this.setState({ todos: data })
        }
        setTodoState()
    }

    componentDidUpdate() {
        const setTodoState = async () => {
            const { data } = await getAllTodos();
            this.setState({ todos: data })
        }
        setTodoState()
    }

    render() {
        return (
            <>
                <div className="todo-list">
                    <Header />
                    <ToastContainer pauseOnHover={false} theme="dark" autoClose={3000} />
                    <AddTodo onAddTodo={this.addNewTodo.bind(this)} />
                    <div className="todo-list-items">
                        <select name="" id="" onChange={this.changeComplateStatus.bind(this)}>
                            <option value="all">All Todos</option>
                            <option value="complated">Complated</option>
                            <option value="unComplated">UnComplated</option>
                        </select>
                        {
                            this.state.statusTodos == 'all' && this.state.todos.map(todo => (
                                <Todos {...todo} key={todo.id} onDoneTodo={this.doneTodo.bind(this)} onDeleteTodo={this.deleteTodo.bind(this)} />
                            ))
                        }
                        {
                            this.state.statusTodos == 'complated' && this.state.todos.filter(todo => todo.done == true).map(todo => (
                                <Todos {...todo} key={todo.id} onDoneTodo={this.doneTodo.bind(this)} onDeleteTodo={this.deleteTodo.bind(this)} />
                            ))
                        }
                        {
                            this.state.statusTodos == 'unComplated' && this.state.todos.filter(todo => todo.done == false).map(todo => (
                                <Todos {...todo} key={todo.id} onDoneTodo={this.doneTodo.bind(this)} onDeleteTodo={this.deleteTodo.bind(this)} />
                            ))
                        }
                    </div>
                </div>
            </>

        )
    }
}
