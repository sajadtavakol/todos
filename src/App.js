import logo from './logo.svg';
import './App.css';
import TodoList from './Components/TodoList/TodoList'
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <TodoList></TodoList>
    )
  }
}