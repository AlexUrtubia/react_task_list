import { createContext, useState, useEffect } from "react";
import {tareas} from "../data/tareas"

export const TodoContext = createContext()

export const TodoManage = (props) => {
  
  const [estado, setEstado] = useState(tareas)
  const [newForm, setNewForm] = useState(false)
  const [editForm, setEditForm] = useState(false);
  const [taskId, setTaskId] = useState(false);
  
  useEffect(() => {
      const localStorageTodos = localStorage.getItem('V1')
      if (localStorageTodos) {
          setEstado(JSON.parse(localStorageTodos))
        } else {
          setEstado(tareas)
        }
      }, []);

  const saveTodo = (newArray) => {
    const stringifyTodos = JSON.stringify(newArray)
    localStorage.setItem('V1',stringifyTodos)
    setEstado(newArray)
  }
  
  return (
    <TodoContext.Provider value={{estado, setEstado, newForm, setNewForm, editForm, setEditForm, taskId, setTaskId, saveTodo}}>
      {props.children}
    </TodoContext.Provider>
  )
}
