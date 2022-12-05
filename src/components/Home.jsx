import React from "react";
import { Link } from 'react-router-dom'
import { Text, Heading, Flex, Box } from '@chakra-ui/react'
import Card from '../components/Card';


export default function Home() {
  return (
    <Flex justifyContent={'center'} className='bg-bckg' pt={"40"}
    pb={"72"} >
      <Card>
        <Flex justifyContent={'center'} padding={4} >
          <Box flexDirection={'column'} className="flex text-center ">
            <Heading as='h3' size='lg' mb={5}>Lista de tareas</Heading>
            <Flex direction={"column"} p={3}>
              <Text as='em' fontSize='xl'>En esta aplicación el usuario tiene a su disposición una lista de tareas.</Text>
              <Text as='em' fontSize='xl'>Dirijase a 
                <span className="text-blue-500"><Link to={'/tareas'}> Tareas </Link></span>
                para comenzar. Edite o elimine las tareas por defecto si lo desea y agregue sus propias tareas.  
              </Text>
              <Text as='em' fontSize='xl'>Se recomienda iniciar sesión con alguna cuenta de Google para una mejor gestión de sus tareas</Text>
            </Flex>
          </Box>
        </Flex>
      </Card>
    </Flex>
  );
}
