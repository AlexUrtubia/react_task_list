import { useState, useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import useRemoveTodo from "../hooks/useRemoveTodo";
import AddForm from "./forms/AddForm";
import EditForm from "./forms/EditForm";
import { DeleteIcon, AddIcon, CheckIcon, TimeIcon, EditIcon } from '@chakra-ui/icons'
import { List, ListItem,  Text, Heading, Button, Circle, Flex, Tooltip } from '@chakra-ui/react'

export default function Tareas() {

  const { estado, newForm, setNewForm, editForm, setEditForm, setTaskId, saveTodo } = useContext(TodoContext);
  const remove = useRemoveTodo();
  const [taskState, setTaskState] = useState(false);
  const handleNew = () => {
    setNewForm(true);
  }
  const handleEdit = (value) => {
    setEditForm(true);
		setTaskId(value)
  };
  
  const editTodoState = (taskId) => {
    const todos = [...estado];
    todos[taskId].completa = taskState
    saveTodo(todos)
  };

  if (estado.length === 0) {
    return (
      <Flex m={'7'} direction={'column'}>
        <Heading fontSize={'lg'} as='h4' fontWeight={'normal'} textAlign={'center'} mt='-3' mb={3}>Agrega una tarea</Heading >
				{ newForm ? null : (
				<Flex mt={'8'} justify={'center'} >
        { newForm || editForm ? null : (
          <Button m={-6} bg={'none'} _hover={{bg:'none'}} _focus={{bg:'none'}} onClick={() => { handleNew() }} >
            <Circle size='40px'  color='white'  className="bg-sky-400 hover:bg-sky-300 hover:drop-shadow-xl">
              <Tooltip label='Agregar Tarea'>
                <AddIcon w={5} h={5} />
              </Tooltip>
            </Circle>
          </Button>
        )}
        </Flex> )}
					{ newForm ? 
            <Flex mt={70} justify={'center'}>
              <AddForm />
            </Flex>
            : null }
      </Flex>
    );
  } else {
    return (
      <>
        <Flex my={'12'}  justify={'center'} >
          { newForm || editForm ? null : (
          <Button m={-6} bg={'none'}  _hover={{bg:'none'}} _focus={{bg:'none'}} onClick={() => { handleNew() }} >
            <Circle size='40px'  color='white'  className="bg-sky-400 hover:bg-sky-300 hover:drop-shadow-xl">
              <Tooltip label='Agregar Tarea'>
                <AddIcon w={5} h={5} />
              </Tooltip>
            </Circle>
          </Button>
          )}
        </Flex>

        { newForm ? <AddForm  mb={5}/> : null }
				{ editForm ? <EditForm  /> : null }
        <Flex p={3} direction={'column'} >
          <List spacing={5} >
          { estado.map((task) => (
            <ListItem   minH={24}
              className="bg-bckg justify-center flex hover:bg-slate-200 border-slate-300  rounded-2xl relative "
              key={task.id}
            >
              <Button bg={'none'} _hover={{bg:'none'}} _focus={{bg:'none'}}
                className="absolute self-center"
                onClick={() => remove(task.id)}
              >
                <Tooltip label='Eliminar tarea'>
                  <DeleteIcon w={5} h={5} color={'red.500'}  _hover={{ color: "red.400" }}  className="hover:drop-shadow-xl"/>
                </Tooltip>
              </Button>
              <Heading as='h5' size='md' mt={2} className="absolute">{task.title}</Heading>
              {task.completa ? (
                <Text fontSize={'lg'} p={4} as='samp' className="desc line-through">{task.descripcion}</Text>
              ) : (
                <Text fontSize={'lg'} p={4} as='samp' className="desc">{task.descripcion}</Text>
              )}

              <Button bg={'none'} _hover={{bg:'none'}} _focus={{bg:'none'}} right={-2} top={1}
                onMouseOver={() => {
                  setTaskState(task.completa);
                }}
                onClick={() => {
                  editTodoState(task.id);
                  setTaskState(task.completa = !taskState);
                }}
              >
                {task.completa ? (
                  <Tooltip label='Tarea Pendiente'>
                    <CheckIcon w={6} h={6} color={'green.500'} _hover={{color:'green.400'}} className="hover:drop-shadow-xl"/>
                  </Tooltip>
                ) : (
                  <Tooltip label='Tarea Completada'>
                    <TimeIcon w={6} h={6} color={'yellow.500'} _hover={{color:'yellow.400'}} className="hover:drop-shadow-xl"/>
                  </Tooltip>
                )}
              </Button>

              {task.completa ? 
              <Button bg={'none'} _hover={{bg:'none'}} _focus={{bg:'none'}} position="absolute" right={-2} bottom={1} disabled
              >
                <Tooltip label='Tarea completada'>
                  <EditIcon w={6} h={6} color={'cyan.300'} _hover={{color:'cyan.200'}} className="hover:drop-shadow-xl"/>
                </Tooltip>
              </Button> : 
              <Button bg={'none'} _hover={{bg:'none'}} _focus={{bg:'none'}} position="absolute" right={-2} bottom={1}
              onClick={() => {
                handleEdit(task.id);
              }}
            >
              <Tooltip label='Editar tarea'>
                <EditIcon w={6} h={6} color={'cyan.300'} _hover={{color:'cyan.200'}} className="hover:drop-shadow-xl"/>
              </Tooltip>
            </Button> }
            </ListItem>
          ))}
          </List>
        </Flex>
      </>
    );
  }
}
