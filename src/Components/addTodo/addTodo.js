import React, { Component } from 'react'
import { IoMdAdd } from "react-icons/io";
import './addTodo.css'
export default class AddTodo extends Component {
    state = {
        todoInput: ''
    }

    doneClickHanler() {
        this.props.onAddTodo(this.state.todoInput);
        this.setState({
            todoInput: ''
        })
    }

    changeTodoInput(e) {
        this.setState({
            todoInput: e.target.value
        })
    }
    checkBtnClick(e) {
        e.key == 'Enter' && this.doneClickHanler()
    }
    render() {
        return (
            <>
                <div className="add-todo">
                    <input type="text" placeholder='Please Enter Your Todo:' value={this.state.todoInput} onChange={this.changeTodoInput.bind(this)} onKeyDown={this.checkBtnClick.bind(this)}/>
                    <button className='add-todo-btn' type='submit' onClick={this.doneClickHanler.bind(this)}>
                        <IoMdAdd />
                    </button>
                </div>
                <div className="line-space"></div>
            </>
        )
    }
}
