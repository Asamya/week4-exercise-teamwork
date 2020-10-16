import React, {useEffect, useState} from "react";
import axios from 'axios';

export default function ToDoList({toDoList}){


    return <div>
        <ul>
            <h2>Open</h2>
            {toDoList.filter(todo => {
                return todo.status === 'OPEN';
            })
                .map(todo =>
                <li key={todo.id}>{todo.description}</li>)}
        </ul>
        <ul>
            <h2>In Progress</h2>
            {toDoList.filter(todo => {
                return todo.status === 'IN_PROGRESS';
            })
                .map(todo =>
                    <li key={todo.id}>{todo.description}</li>)}
        </ul>
        <ul>
            <h2>Done</h2>
            {toDoList.filter(todo => {
                return todo.status === 'DONE';
            })
                .map(todo =>
                    <li key={todo.id}>{todo.description}</li>)}

        </ul>
    </div>

}