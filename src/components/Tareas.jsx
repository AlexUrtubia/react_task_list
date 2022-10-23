import TaskAltIcon from '@mui/icons-material/TaskAlt';
import PendingActionsIcon from '@mui/icons-material/PendingActions';

const tarea = [
  { id: 1,
    task: "Tarea número 1",
    completa: false },
  { id: 2,
    task: "Tarea número 2", 
    completa: true },
  { id: 3,
  task: "Tarea número 3 con un texto un poco más largo", 
  completa: true },
  { id: 4,
  task: "Tarea número 4 con un texto mucho más largo que el anterior para probar cómo va quedando ", 
  completa: false },
  {id: 5,
  task: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, cumque. Iste officia saepe excepturi impedit provident ea odio, soluta accusantium rerum in sunt ipsa culpa, animi veniam alias quibusdam amet totam obcaecati commodi et. Atque molestiae soluta iste recusandae ullam.",
  completa: true}
];

export default function Tareas() {

  return (
    <div className="p-5 flex w-full flex-col space-y-4">
        {tarea.map((task) => (
        <li className="text-xl bg-bckg w-full justify-center flex border-slate-300 rounded-2xl relative	shadow" key={tarea.id}>
          <p className='text'>{task.task}</p> 
          <span className='flex absolute top-1 right-1 text-justify'>{ task.completa ? 
          <TaskAltIcon className='text-green-500' /> :
          <PendingActionsIcon className='text-yellow-500'/>  }</span>
        </li>
        ))}

      
    </div>
  );
}
