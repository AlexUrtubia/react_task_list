import { useContext, useState } from 'react';
import { TodoContext } from '../../context/TodoContext';
import useEditTodo from '../../hooks/useEditTodo';
import {  FormControl, FormLabel, Input, Flex, Button, Heading } from '@chakra-ui/react'

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
		<>
		<Flex direction={'column'} justifyContent={'center'} mt='-16'>
		<Heading fontSize={'lg'} as='h4' fontWeight={'normal'} textAlign={'center'} mt='-3' mb={3}>Editando {estado[id].title}</Heading >
			<form onSubmit={ handleSubmit }>
				<Flex alignItems={'center'} mb={6}>
					<FormControl>
						<Flex w={'100%'} direction={'row'} justifyContent={'center'} alignItems={'center'}>
							<FormLabel color="gray.600" textAlign={'right'} w={28} fontWeight={'bold'} >Título de tarea</FormLabel>
							<Input
								focusBorderColor="cyan.400"
								htmlSize={32} width='auto'
								variant="filled"
								type="text"
								name="title"
								value={titulo}
								placeholder={estado[id].title}
								onChange={(event) => {setTitulo(event.target.value)}}
								minLength="3"
								maxLength={20}
								required
							/>
						</Flex>
					</FormControl>
				</Flex>
				<Flex alignItems={'center'} mb={6}>
					<FormControl>
						<Flex w={'100%'} direction={'row'} justifyContent={'center'} alignItems={'center'}>
							<FormLabel textAlign={'right'} w={28} color="gray.600" fontWeight={'bold'} >Descripción</FormLabel>
							<Input
								focusBorderColor="cyan.400"
								htmlSize={32} width='auto'
								variant="filled"
								type="text"
								value={descripcion}
								placeholder={estado[id].descripcion}
								onChange={(event) => {setDescripcion(event.target.value)}}
							/>
						</Flex>
					</FormControl>
				</Flex>
				<Flex justifyContent={'center'} mb='4' experimental_spaceX={4}>
					<Button bgColor="red.500"
						_hover={{bgColor:"red.400"}}
						textColor="white" w={28}
						onClick={ () => setEditForm(false)}>
						Cancelar
					</Button>
					<Button
						bgColor="cyan.400" textColor="white" w={28}
						_hover={{bgColor:"cyan.300"}}
						type="submit"
					>
						Editar
					</Button>
				</Flex>
			</form>
		</Flex>
		</>
  );
}

export default EditForm;
