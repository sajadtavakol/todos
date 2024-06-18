import React, { Component } from 'react'
import { FaRegCircle, FaCircleCheck } from "react-icons/fa6";
import './todos.css'
export default class Todos extends Component {
    doneClickHandler() {
        this.props.onDoneTodo(this.props.id)
    }
    removeClickHandler(e) {
        console.log(e.preventDefault());
        this.props.onDeleteTodo(this.props.id)
    }

    render() {
        let {id, name, done} = this.props
        return (
            <div onContextMenu={this.removeClickHandler.bind(this)} onClick={this.doneClickHandler.bind(this)} className={
                done ? 'todo-item todo-done' : 'todo-item'
            }>
                <div className="todo-check">
                    {done && <FaCircleCheck />}
                    {!done && <FaRegCircle />}
                    {/*<FaCircleCheck />*/}
                </div>
                <div className="todo-title">
                    <span>{name}</span>
                </div>
            </div>
        )
    }
}
