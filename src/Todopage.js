import React, { useState,useEffect } from 'react';
import './components/Todostyle.css';
import Form from "./components/Form"
import ToDoList from './components/ToDoList';

function Todopage() {
  //State stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  
  // //Run once when npm start
  // useEffect(() => {
  //   getLocalTodos();
  // }, []);
  //Use effect
  useEffect(() => {
    filterHandler();
    // saveLocalTodos();
  }, [todos, status]);
  //Functions
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }
  //save to local
  // const saveLocalTodos = () => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // };
  // const getLocalTodos = () = {
  //   if(localStorage.getItem("todos") === null) { 
  //     localStorage.setItem("todos", JSON.stringify([]));
  //   } else {
  //     let todoLocal = JSON.parse(localStorage.getItem("todos"))
  //     setTodos(todoLocal);
  //   }
  // };

  return (
    <div className="App">
      <header>
        <h1>Siesta's to do list</h1>
      </header>
      <Form 
        inputText={inputText}
        setTodos={setTodos}
        setStatus={setStatus}
        todos={todos} 
        setInputText={setInputText}
      />
      <ToDoList 
        filteredTodos={filteredTodos}
        setTodos={setTodos} 
        todos={todos}
      />
    </div> 
  );
}

export default Todopage;