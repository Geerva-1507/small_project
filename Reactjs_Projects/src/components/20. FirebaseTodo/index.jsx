import React, { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import "./todo.css";
import {
  addDoc,
  onSnapshot,
  collection,
  query,
  serverTimestamp,
  orderBy,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../firebase-config";
import Todo from "./Todo";

const q = query(collection(db, "todos"), orderBy("timestamp", "desc"));

function FirebaseTodo() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [currentEditedTodoId, setCurrentEditedTodoId] = useState(null);

  useEffect(() => {
    onSnapshot(q, (snapShot) => {
      setTodos(
        snapShot.docs.map((docItem) => ({
          id: docItem.id,
          todoItem: docItem.data(),
        }))
      );
    });
  }, [inputValue]);

  function handleAddOrEditTodo(event) {
    event.preventDefault();
    currentEditedTodoId !== null
      ? updateDoc(doc(db, "todos", currentEditedTodoId), {
          todo: inputValue,
        })
      : addDoc(collection(db, "todos"), {
          todo: inputValue,
          timestamp: serverTimestamp(),
        });
    setInputValue("");
    setCurrentEditedTodoId(null);
  }

  console.log(todos, "geetal");

  return (
    <div className="firebase-todo-wrapper">
      <h1> Firebase Todo</h1>
      <form onSubmit={handleAddOrEditTodo}>
        <TextField
          id="todo"
          label="Create Todo"
          varient="Outlined"
          size="small"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={handleAddOrEditTodo}
        >
          {currentEditedTodoId !== null ? "Edit Todo" : "Add Todo"}
        </Button>
      </form>
      <ul>
        {todos && todos.length > 0 ?
          todos.map((todoItem) => (
            <Todo
              todoItem={todoItem}
              setInputValue={setInputValue}
              setCurrentEditedTodoId={setCurrentEditedTodoId}
            />
          )) : <h3>No todos avialbale ! Please add one</h3>}
      </ul>
    </div>
  );
}

export default FirebaseTodo;
