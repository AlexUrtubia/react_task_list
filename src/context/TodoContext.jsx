import { createContext, useState, useEffect } from "react";

export const TodoContext = createContext()

export const TodoManage = (props) => {
  
  const tarea = [
      { id: 0,
        title: "Tarea número 1",
        descripcion: 'Tarea uno blablabla',
        completa: false },
      { id: 1,
        title: "Tarea número 2", 
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, error?',
        completa: false },
      { id: 2,
      title: "Tarea número 3 ", 
      descripcion: 'con un texto un poco más largo',
      completa: false },
      { id: 3,
      title: "Tarea número 4", 
      descripcion: 'con un texto mucho más largo que el anterior para probar cómo va quedando "',
      completa: false },
    ];

    const [estado, setEstado] = useState(tarea)
    const [newForm, setNewForm] = useState(false)
    const [editForm, setEditForm] = useState(false);
    const [taskId, setTaskId] = useState(false);

    useEffect(() => {
      console.log("cambio en estado",estado);
    }, [estado])
    

  return (
    <TodoContext.Provider value={{estado, setEstado, newForm, setNewForm, editForm, setEditForm, taskId, setTaskId}}>
      {props.children}
    </TodoContext.Provider>
  )
}
