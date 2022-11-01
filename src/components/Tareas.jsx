import TaskAltIcon from '@mui/icons-material/TaskAlt';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { useState,  useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import EditIcon from '@mui/icons-material/Edit';
import useAddtodo from '../hooks/useEditTodo';
import useRemoveTodo from '../hooks/useRemoveTodo';

export default function Tareas() {

  const estado = useContext(TodoContext)
  const edit = useAddtodo()
  const remove = useRemoveTodo()
  
  const [state, setState] = useState(false)

    if (estado.estado.length === 0) {
      return (
        <div className="p-5 flex w-full h-full text-center justify-center">
          <span className='text-xl'>
          Agrega una tarea
          </span>
        </div>
      )}
      else {
        return (
        
        <div className="p-5 flex w-full flex-col space-y-4">
            {estado.estado.map((task) => (
            <li className="text-xl bg-bckg w-full justify-center flex border-slate-300 rounded-2xl relative	shadow" key={task.id}>
              
              <button className='flex absolute left-1 self-center'
              onClick={ () => remove(task.id)}>
                <DeleteRoundedIcon className='text-red-500'/>
              </button>
    
              { task.completa ? 
              <span className='text line-through' >{task.task}</span> :
              <span className='text'>{task.task}</span> }
              
              <button className='flex absolute top-1 right-1 text-justify'
                onMouseOver={() => {
                  setState(task.completa)
                }}
                onClick={() => {
                setState(task.completa = !state)
              }}>
                { task.completa ? 
              <TaskAltIcon className='text-green-500' /> :
              <PendingActionsIcon className='text-yellow-500'/>  }</button>
              <button className='flex absolute bottom-1 right-1'
              onClick={ () => {
                edit(task.id)
              console.log(estado.estado)}}>
                <EditIcon className='text-blue-800'/>
              </button>
            </li>
            ))}
        </div>
      )
      }

}
