import React, { Component } from 'react'
import { IoSunnyOutline } from "react-icons/io5";

export default class Header extends Component {
    constructor() {
        super()
    }
    render() {
        let newDate = new Date();
        const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        const monthName = ['January', 'January', 'March', 'April', 'May', 'Juan', 'July', 'August', 'September', 'October', 'November', 'December'];
        const getDay = newDate.getDay();
        const getDate = newDate.getDate();
        const getMonth = newDate.getMonth();
        return (
            <div className="todo-list-header">
                <span className='todo-list-head'>My Day <IoSunnyOutline className='sun-icon' /></span>
                <span className='today-date'>{
                    dayNames[getDay] +', '+ monthName[getMonth] +' '+ getDate
                }</span>
            </div>
        )
    }
}
