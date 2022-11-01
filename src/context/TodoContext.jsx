import { createContext, useState } from "react";

export const TodoContext = createContext()

export const TodoManage = (props) => {
  
  const tarea = [
      { id: 0,
        task: "Tarea número 1",
        completa: false },
      { id: 1,
        task: "Tarea número 2", 
        completa: false },
      { id: 2,
      task: "Tarea número 3 con un texto un poco más largo", 
      completa: false },
      { id: 3,
      task: "Tarea número 4 con un texto mucho más largo que el anterior para probar cómo va quedando ", 
      completa: false },
    ];

    const [estado, setEstado] = useState(tarea)
    const handleState = (state) => {setEstado(state)}



  return (
    <TodoContext.Provider value={{estado, handleState}}>
      {props.children}
    </TodoContext.Provider>
  )
}
