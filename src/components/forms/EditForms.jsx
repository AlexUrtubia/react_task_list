import { useContext, useState } from 'react';
import { TodoContext } from '../../context/TodoContext';
import useEditTodo from '../../hooks/useEditTodo';


function EditForm() {

	const edit = useEditTodo()
  const { estado, setEditForm, taskId } = useContext(TodoContext)

	const [titulo, setTitulo] = useState('')
	const [descripcion, setDescripcion] = useState('')
	const id = taskId

	const handleSubmit = (event) => {
    event.preventDefault()
    edit(titulo, descripcion)
		setEditForm(false)
  }

  return (
    <div>
      <div className="flex flex-col  mt-2">
				<div className="flex justify-center mb-4">
					<span>Editando {estado[id].title}</span>
				</div>
				<form onSubmit={ handleSubmit }>
					<div className="flex items-center mb-6">
						<div className="w-2/5">
							<label className="block text-gray-500 font-bold text-right mb-1  pr-4">
								Título de tarea
							</label>
						</div>
						<div className="w-3/5">
							<input
								className="bg-gray-100 border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary"
								type="text"
								name="title"
								value={titulo}
								onChange={(event) => {setTitulo(event.target.value)}}
								minLength="3"
								maxLength={20}
								required
							/>
						</div>
					</div>
					<div className="flex items-center mb-6">
						<div className="w-2/5">
							<label className="block text-gray-500 font-bold text-right mb-1  pr-4">
								Descripción
							</label>
						</div>
						<div className="w-3/5">
							<input
								className="bg-gray-100 border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary"
								type="text"
								name="descripcion"
								value={descripcion}
								onChange={(event) => {setDescripcion(event.target.value)}}
								
							/>
						</div>
					</div>
					<div className="flex justify-center  items-center mb-2">
						<div className="space-x-4 self-center">
							<button className="bg-red-500 hover:bg-red-400 hover:drop-shadow-xl text-white font-bold py-2 px-4 rounded-full w-24" onClick={ () => setEditForm(false)}>
								Cancelar
							</button>
							<button
								className="bg-primary hover:bg-blue-400 hover:drop-shadow-xl text-white font-bold py-2 px-4 rounded-full w-24"
								type="submit"
							>
								Editar
							</button>
						</div>
					</div>
				</form>
      </div>
    </div>
  );
}

export default EditForm;
