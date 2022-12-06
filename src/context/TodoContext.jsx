import { createContext, useState, useEffect } from "react";
import { tareas } from "../data/tareas"
import { useUser } from '../hooks/useUser'
import {firebaseApp} from '../App'
import { getAuth, GoogleAuthProvider, signInWithPopup, setPersistence, browserSessionPersistence } from 'firebase/auth'

export const TodoContext = createContext()

export const TodoManage = (props) => {
  const { user } = useUser();

  const [estado, setEstado] = useState(tareas)
  const [newForm, setNewForm] = useState(false)
  const [editForm, setEditForm] = useState(false);
  const [taskId, setTaskId] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    console.log(user, 'usuario actual')
    console.log(currentUser, 'usuario actual')
    if (currentUser != null) {
      const stringifyTodos = JSON.stringify(tareas)
      localStorage.setItem(`${currentUser.email}`, stringifyTodos)
    }
  }, [currentUser]);

  useEffect(() => {
    const auth = getAuth(firebaseApp)
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user)
    });
  }, []);

  useEffect(() => {
    if (currentUser != null) {
      const localStorageTodos = localStorage.getItem(`${currentUser.email}`)
      setEstado(JSON.parse(localStorageTodos))
    }
    if (currentUser == null) {
      if (!localStorage.default_user)  {
        const stringifyTodos = JSON.stringify(estado)
        localStorage.setItem('default_user', stringifyTodos)
      } else {
        const localStorageTodos = localStorage.getItem('default_user')
        setEstado(JSON.parse(localStorageTodos))
      }
    } 
  }, []);

  // useEffect(() => {
  //   if (currentUser != null) { 
  //     const localStorageTodos = localStorage.getItem(`${user.email}`)
  //     setEstado(JSON.parse(localStorageTodos))
  //     } 
  //   else {
  //     const localStorageTodos = localStorage.getItem('default_user')
  //     setEstado(JSON.parse(localStorageTodos))
  //   }
  //   // if (localStorageTodos) {
  //   //     setEstado(JSON.parse(localStorageTodos))
  //   // } else {
  //   //   setEstado(tareas)
  //   // }
  // }, []);

  const saveTodo = (newArray) => {
    if (currentUser == null) {
      const stringifyTodos = JSON.stringify(newArray)
      localStorage.setItem('default_user',stringifyTodos)
      setEstado(newArray)
    } 
    if (currentUser != null) {
    console.log(currentUser, 'desde seteando estado');
    const stringifyTodos = JSON.stringify(newArray)
    localStorage.setItem(`${currentUser.email}`,stringifyTodos)
    setEstado(newArray)
    }
  }
  
  return (
    <TodoContext.Provider value={{estado, setEstado, newForm, setNewForm, editForm, setEditForm, taskId, setTaskId, saveTodo, setCurrentUser}}>
      {props.children}
    </TodoContext.Provider>
  )
}
