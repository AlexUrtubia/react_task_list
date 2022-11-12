import AssignmentIcon from '@mui/icons-material/Assignment';
import Tareas from './Tareas'




export default function ListaTareas() {

  return (
    <div className='flex flex-col w-full'>
      <div className="flex text-center justify-center space-x-4 mb-4 relative">
        <h2 className="text-2xl font-bold">Lista de tareas</h2>
        <span className='self-center' ><AssignmentIcon/></span>
      </div>
      <hr />
      <Tareas/>
    </div>
  )
}
