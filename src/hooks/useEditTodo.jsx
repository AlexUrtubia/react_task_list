import { useContext } from "react";
import {TodoContext} from "../context/TodoContext"


export default function useEditTodo() {
	
  const { estado, taskId, saveTodo } = useContext(TodoContext);

	const editTodo = (titulo, descripcion) => {
    const todos = [...estado];
    todos[taskId].title = titulo
    todos[taskId].descripcion = descripcion
  
    saveTodo(todos)
  };

  return editTodo;
}
