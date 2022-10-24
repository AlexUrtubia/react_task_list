import TaskAltIcon from '@mui/icons-material/TaskAlt';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import { useState, useEffect } from 'react';
import { computeHeadingLevel } from '@testing-library/react';
import { TaskSharp } from '@mui/icons-material';

const tarea = [
  { id: 1,
    task: "Tarea número 1",
    completa: false },
  { id: 2,
    task: "Tarea número 2", 
    completa: false },
  { id: 3,
  task: "Tarea número 3 con un texto un poco más largo", 
  completa: false },
  { id: 4,
  task: "Tarea número 4 con un texto mucho más largo que el anterior para probar cómo va quedando ", 
  completa: false },
  {id: 5,
  task: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, cumque. Iste officia saepe excepturi impedit provident ea odio, soluta accusantium rerum in sunt ipsa culpa, animi veniam alias quibusdam amet totam obcaecati commodi et. Atque molestiae soluta iste recusandae ullam.",
  completa: false}
];

export default function Tareas() {

  const [state, setState] = useState(false)

  
  // useEffect( () => {
  //   console.log(state);
  // }, [state]);

  return (
    <div className="p-5 flex w-full flex-col space-y-4">
        {tarea.map((task) => (
        <li className="text-xl bg-bckg w-full justify-center flex border-slate-300 rounded-2xl relative	shadow" key={tarea.id}>
           
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
        </li>
        ))}

      
    </div>
  );
}

// function Header() {
//   const [isActive, setIsActive] = useState(false);
//   const [isActive2, setIsActive2] = useState(false);
//   return (
//     <div className="flex items-center space-x-6">
//       <div className="cursor-pointer select-none">
//        {isActive? <AiOutlineHome onClick={()=>{
//           setIsActive(!isActive)}}/>:
//       <AiFillHome onClick={()=>{
//           setIsActive(!isActive)}} />
//            }
//       </div>

//     <div className="cursor-pointer select-none">
//       {isActive2?<MdOutlineAddBox onClick={()=>{
//        setIsActive2(!isActive2)}}/>:
//          <MdAddBox onClick={()=>{
//        setIsActive2(!isActive2)}} />}
//      </div>
//   )}
