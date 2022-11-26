import AssignmentIcon from "@mui/icons-material/Assignment";
import Tareas from "./Tareas";
import { Icon, Heading, Flex, Center } from "@chakra-ui/react";
import Card from '../components/Card';
import { TodoContext } from "../context/TodoContext";
import { useContext } from "react";





export default function ListaTareas() {
  const { estado } = useContext(TodoContext);
  var pb='19%'
  var pt = 40

  if (estado.length === 1) {
    console.log('estado.length', estado.length)
    pb = "12%"
  } if (estado.length === 2) {
    console.log('estado.length', estado.length)
    pb = "7%"
    pt = "8%"
  } if (estado.length > 2) {
    pb = "4%"
    pt = "3%"
  }
  return (
    <Center
      justifyContent={"center"}
      className="bg-bckg"
      pt={pt}
      pb={pb}
    >
      <Card >
        <Flex justify={"center"} experimental_spaceX={4} mb="5" >
          <Heading as="h5" size="lg">
            Lista de tareas
          </Heading>
          <Icon as={AssignmentIcon} w={8} h={8} alignSelf={"end"} />
        </Flex>
        <hr />
        <Tareas />
      </Card>
    </Center>
  );
}
