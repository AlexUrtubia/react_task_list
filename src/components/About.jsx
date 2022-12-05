import Card from '../components/Card';
import { List, ListItem, Text, Heading, Flex, Box } from '@chakra-ui/react'


export default function About() {
  return (
    <Flex justifyContent={'center'} className='bg-bckg' pt={"14"}
    pb={"28"}
    h='100%'
    verticalAlign={"center"}>
      <Card >
        <Flex justifyContent={'center'} padding={1} height=''>
          <Box flexDirection={'column'} className="flex">
            <Heading as='h3' size='lg' mb={5} className='-mt-5' textAlign={'center'}>About</Heading>
            <Text as='em' fontSize='xl' className="text-base tracking-tight">Esta aplicación tiene como principal funcionalidad servir como gestor de lista de tareas, en donde es posible
            argegar, editar y eliminar tareas. </Text>
            <Text as='em' fontSize='xl' className="text-base tracking-tight"> Ha sido desarrollada en React, utilizando diversas librerías para potenciar su funcionamiento, entre las que se destacan:</Text>
              <List direction={'row'} className="text-center p-2">
                <ListItem ><Text fontSize='lg' as='i'>React Router</Text></ListItem>
                <ListItem ><Text fontSize='lg' as='i'>Firebase</Text></ListItem>
                <ListItem ><Text fontSize='lg' as='i'>Tailwind</Text></ListItem>
                <ListItem ><Text fontSize='lg' as='i'>Chakra Ui</Text></ListItem>
                <ListItem ><Text fontSize='lg' as='i'>Material Ui</Text></ListItem>
              </List>
            <Text as='em' fontSize='xl' className="text-base tracking-tight">React Router permite gestionar las distintas rutas del proyecto y mientras que las tres últimas facilitan el estilizado de la página funcionando como gestores de CSS</Text>
            <Text as='em' fontSize='xl' mb={4}  className="text-base tracking-tight">La aplicación realiza las funciones de gestión de las tareas mediante el uso de contexto y otros hooks propios de React. Además, se proporciona la posibilidad de iniciar sesión con alguna cuenta de Google gracias a la autentificación que permite Firebase, que en conjunto con localStorage garantizan la permanencia de las tareas y su estado de cada usuario.</Text>
            <hr />
            <Text as='samp' fontSize='lg' mt={3}  className="font-semi-bold tracking-tight text-center -mb-7">Desarrollada por  
              <span className="text-blue-500"><a href="https://github.com/AlexUrtubia"> Alex Urtubia </a></span>
            </Text>
          </Box>
        </Flex>
      </Card>
    </Flex>
  );
}
