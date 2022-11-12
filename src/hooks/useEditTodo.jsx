import { useContext } from "react";
import {TodoContext} from "../context/TodoContext"


export default function useEditTodo() {
	
  const { estado, setEstado, taskId } = useContext(TodoContext);

	const editTodo = (titulo, descripcion) => {
    const todos = [...estado];
    console.log('wtf', todos[taskId])
    todos[taskId].title = titulo
    todos[taskId].descripcion = descripcion
  
    setEstado(todos)
  };

  return editTodo;
}
