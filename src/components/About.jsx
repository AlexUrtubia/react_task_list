import Card from '../components/Card';
import { List, ListItem, Text, Heading, Flex, Box } from '@chakra-ui/react'


export default function About() {
  return (
    <Flex justifyContent={'center'} className='bg-bckg' pt={"14"}
    pb={"28"}
    h='100%'
    verticalAlign={"center"}>
      <Card >
        <Flex justifyContent={'center'} padding={1} height='md'>
          <Box flexDirection={'column'} className="flex">
            <Heading as='h3' size='lg' mb={5} textAlign={'center'}>About</Heading>
            <Text as='em' fontSize='xl' className="text-base tracking-tight">Esta aplicación tiene como principal funcionalidad servir como gestor de lista de tareas, en donde es posible
            argegar, editar y eliminar tareas. </Text>
            <Text as='em' fontSize='xl' className="text-base tracking-tight"> Ha sido desarrollada en React, utilizando diversas librerías para potenciar su funcionamiento, entre las que se destacan:</Text>
              <List direction={'row'} className="text-center p-2">
                <ListItem ><Text fontSize='lg' as='i'>React Router</Text></ListItem>
                <ListItem ><Text fontSize='lg' as='i'>Tailwind</Text></ListItem>
                <ListItem ><Text fontSize='lg' as='i'>Chakra Ui</Text></ListItem>
                <ListItem ><Text fontSize='lg' as='i'>Material Ui</Text></ListItem>
              </List>
            <Text as='em' fontSize='xl' className="text-base tracking-tight"> La primera para gestionar las distintas rutas del proyecto y las dos últimas para el estilizado de la página mediante gestores de CSS</Text>
            <Text as='em' fontSize='xl' mb={6} className="text-base tracking-tight">Hasta esta entrega, la aplicación realiza las funciones de mediante el uso de contexto y otros hooks propios de React. Además de utilizar localStorage para la permanencia de las tareas del usuario que se despliegan.</Text>
            <hr />
            <Text as='samp' fontSize='lg' mt={3}  className="font-semi-bold tracking-tight text-center">Desarrollada por  
              <span className="text-blue-500"><a href="https://github.com/AlexUrtubia"> Alex Urtubia </a></span>
            </Text>
          </Box>
        </Flex>
      </Card>
    </Flex>
  );
}
