import React, {useEffect, useState} from 'react';
import ToDoList from "./components/get/ToDoList";
import AddToDoPopUp from "./components/addToDo/AddToDoPopUp";
import axios from "axios";

function App() {

    const url = "/api/todo";
    const [toDoList, setToDoList] = useState([]);

    useEffect(() => {
        axios.get(url)
            .then(response => response.data)
            .then(data => setToDoList(data)) //also .then(setToDoList)
            .catch(error => console.log(error))
    }, []);


    function sendData(description) {
        return axios.post(url, {
            description,
            status: 'OPEN'
        }).then(response =>
            response.data)
            .then(data =>
            setToDoList([...toDoList, data]))
            .catch(error =>
                console.log(error));

    }

  return (
    <div>
        <AddToDoPopUp onSubmit={sendData}/>
      <ToDoList toDoList={toDoList}/>
    </div>
  );
}

export default App;
