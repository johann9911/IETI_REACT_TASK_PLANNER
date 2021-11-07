import { useHistory } from "react-router";
import { Flex, Box, Text, Button, Center } from "@chakra-ui/react"

export const TaskItem = ({ id, taskName, taskDescription, taskStatus, taskAssignedTo, taskDueDate }) => {
  const history = useHistory();

  const styleOfTheComponent = {
    backgroundColor: taskStatus === "DONE" ? "#b0f2c2" : taskStatus === "IN_PROGRESS" ? "#b0c2f2" : taskStatus === "REVIEW" ? "#fcb7af" : "",
  };

  const handleClick = () => {
    const url = `/task/${id}`;
    history.push(url);
  };
  
  const mostrarFecha = () => {
    var fecha = new Date(taskDueDate.split('.')[0]);
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return fecha.toLocaleDateString("es-ES", options)
  }

  return (
    <Center>

      <Box w="90%" h="auto" bg="gray" mb="3" bg="whitesmoke" borderRadius="40" pl="100px" pr="100px" pt="10px" pb="10px" boxShadow="base" style={styleOfTheComponent}>
        <Flex alignItems="center">
          <Box flex="3">
            <Text fontWeight="bold" fontSize="20px" mb="2" textShadow="1px 1px #ff0000">{taskName}</Text>
            <Text ><b>Descripción:</b> {taskDescription}</Text>
            <Text><b>Asignado a:</b> {taskAssignedTo}</Text>
            <Text><b>Fecha:</b> {mostrarFecha()}</Text>
          </Box>
          <Box flex="2" textAlign="center">
            <Text mb="1" fontWeight="semibold" > Estado</Text>
            <Text >{taskStatus}</Text>
          </Box>
          <Button bg="red.400" flex="1" borderRadius="20" color="white" onClick={handleClick}>Edit</Button>
        </Flex>
      </Box>
    </Center>
  );
};
