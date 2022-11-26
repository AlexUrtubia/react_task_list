import { useContext, useState } from 'react';
import { TodoContext } from '../../context/TodoContext';
import useAddTodo from '../../hooks/useAddTodo';
import {  FormControl, FormLabel, Input, Flex, Button } from '@chakra-ui/react'

function AddForm() {

	const add = useAddTodo()
	const { setNewForm } = useContext(TodoContext)

	const [title, setTitle] = useState('')
	const [descripcion, setDescripcion] = useState('')

	const handleSubmit = (event) => {
    event.preventDefault()
    add(title, descripcion)
		setNewForm(false)
  }

  return (
		<Flex direction={'column'} justifyContent={'center'} mt='-16'>
			<form onSubmit={ handleSubmit }>
				<Flex alignItems={'center'} mb={6}>
					<FormControl isRequired>
						<Flex w={'100%'} direction={'row'} justifyContent={'center'} alignItems={'center'}>
							<FormLabel  color="gray.600" textAlign={'right'} w={32} fontWeight={'bold'} >Título de tarea</FormLabel>
							<Input
								focusBorderColor="cyan.400"
								htmlSize={32} width='auto'
								variant="filled"
								type="text"
								name="title"
								value={title}
								onChange={(event) => {setTitle(event.target.value)}}
								minLength="3"
								maxLength={20}
							/>
						</Flex>
					</FormControl>
				</Flex>
				<Flex alignItems={'center'} mb={6}>
					<FormControl>
						<Flex w={'100%'} direction={'row'} justifyContent={'center'} alignItems={'center'}>
							<FormLabel textAlign={'right'} w={32} color="gray.600" fontWeight={'bold'} >Descripción</FormLabel>
							<Input
								focusBorderColor="cyan.400"
								htmlSize={32} width='auto'
								variant="filled"
								type="text"
								name="descripcion"
								value={descripcion}
								onChange={(event) => {setDescripcion(event.target.value)}}
							/>
						</Flex>
					</FormControl>
				</Flex>
				<Flex justifyContent={'center'} mb='4' experimental_spaceX={4}>
					<Button bgColor="red.500"
						_hover={{bgColor:"red.400"}}
						textColor="white" w={28}
						onClick={ () => setNewForm(false)}>
						Cancelar
					</Button>
					<Button
						bgColor="cyan.400" textColor="white" w={28}
						_hover={{bgColor:"cyan.300"}}
						type="submit"
					>
						Crear
					</Button>
				</Flex>
			</form>
		</Flex>
  );
}

export default AddForm;
