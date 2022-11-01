import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export default function useAddTodo() {
  const handleState = useContext(TodoContext);

  const addTodo = (index) => {
    const text = prompt("Ingrese tarea");
    const newarray = [
      ...handleState.estado,
      {
        id: handleState.estado.length + 1,
        task: text,
        completa: false,
      },
    ];

    for (var i = 0; i < newarray.length; i++) {
      newarray[i].id = i;
    }

    handleState.handleState(newarray);
  };
  return addTodo;
}
