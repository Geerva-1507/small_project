import { List, ListItemAvatar,ListItemText, ListItem, Button} from "@mui/material";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase-config";
import React from "react";

function Todo({ todoItem, setCurrentEditedTodoId, setInputValue }) {

    function handleDelete(getCurrentTodoId) {
        deleteDoc(doc(db, 'todos', getCurrentTodoId  ))
      }
  return (
    <List>
      <ListItem>
        <ListItemAvatar />
        <ListItemText primary={todoItem?.todoItem?.todo} />
      </ListItem>
      <Button onClick={() => handleDelete(todoItem.id)} setInputValue={setInputValue} variant="contained" color="secondary">Delete</Button>
      <Button onClick={() => setCurrentEditedTodoId(todoItem.id)} variant="contained" color="info">Edit</Button>
    </List>
  );
}

export default Todo;
