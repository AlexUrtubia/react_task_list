import { useContext } from "react";
import {TodoContext} from "../context/TodoContext"


export default function useEditTodo() {
	
	const estado = useContext(TodoContext)

	const editTodo = (index) => {
    const todos = [...estado.estado];
    const edited =  prompt('Actualice el título de la tarea', todos[index].task)
    todos[index].task = edited
  

    for (var i = 0; i < todos.length; i++) {
      todos[i].id = i;
    }
    estado.handleState(todos)
  };

  return editTodo;
}
