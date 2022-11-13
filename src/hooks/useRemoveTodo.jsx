import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export default function useRemoveTodo() {
  const { estado, saveTodo } = useContext(TodoContext);

  const removeTodo = (index) => {
		const todos = [...estado];
    const newArray = todos.filter((object) => {
			return object.id !== index;
    });
		
    for (var i = 0; i < newArray.length; i++) {
      newArray[i].id = i;
    }
		
    saveTodo(newArray);
  };

  return removeTodo;
}
