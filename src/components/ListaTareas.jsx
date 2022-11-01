import AssignmentIcon from '@mui/icons-material/Assignment';
import Tareas from './Tareas'
import AddBoxIcon from '@mui/icons-material/AddBox';
import useAddTodo from '../hooks/useAddTodo';



export default function ListaTareas() {

  
  const add = useAddTodo()

  return (
    <div className='flex flex-col w-full'>
      <div className="flex text-center justify-center space-x-4 mb-4 relative">
        <h2 className="text-2xl font-bold">Lista de tareas</h2>
        <span className='self-center' ><AssignmentIcon/></span>
        <button className='flex absolute right-6 text-justify'
          onClick={add}>
          <span className='self-center'><AddBoxIcon color="primary" sx={{ fontSize: 40 }}/></span>
        </button>
      </div>
      <div>
      </div>
        <hr />
        <Tareas/>
    </div>
  )
}
