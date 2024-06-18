import axios from "axios";

const SERVICE_URL = 'http://localhost:9000/todos';

export const getAllTodos = () => {
    return axios.get(SERVICE_URL)
}
export const setTodos = (todos) => {
    return axios.post(SERVICE_URL, todos)
}
export const putTodos = (todos, todoId) => {
    return axios.put(`${SERVICE_URL}/${todoId}`, todos)
}
export const deleteTodo = (todoId) => {
    return axios.delete(`${SERVICE_URL}/${todoId}`)
}