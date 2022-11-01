import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export default function useRemoveTodo() {
	const handleState = useContext(TodoContext);

  const removeTodo = (index) => {
		const todos = [...handleState.estado];
    const newarray = todos.filter((object) => {
			return object.id !== index;
    });
		
    for (var i = 0; i < newarray.length; i++) {
			console.log(newarray[i])
      newarray[i].id = i;
    }
		
		handleState.handleState(newarray)
    console.log(newarray.length)
		
  };
  return removeTodo;
}
