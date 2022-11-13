import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export default function useAddTodo() {
  const { estado, saveTodo } = useContext(TodoContext);

  const addTodo = (titulo, descripcion) => {
    
    const newArray = [
      ...estado,
      {
        id: estado.length + 1,
        title: titulo,
        descripcion: descripcion,
        completa: false
      },
    ];

    for (var i = 0; i < newArray.length; i++) {
      newArray[i].id = i;
    }
    saveTodo(newArray);
    console.log('estado', estado)
  };

  return addTodo;
}
