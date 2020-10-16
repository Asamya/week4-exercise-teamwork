import React from 'react';
import ToDoList from "./components/get/ToDoList";
import AddToDoPopUp from "./components/addToDo/AddToDoPopUp";

function App() {

  return (
    <div>
        <AddToDoPopUp />
      <ToDoList />
    </div>
  );
}

export default App;
