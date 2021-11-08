import React, { useState, useContext } from 'react';
import { Box, Center, Input, Button, Textarea } from "@chakra-ui/react"
import UserContext from "../services/context/UserContext";

const CreateTask = ({ addNewTask }) => {
    const { ServiceRest } = useContext(UserContext)
    const [textValue, setTextValue] = useState("");
    const [textDesValue, setTextDesValue] = useState("");
    const [textAssignedValue, setTextAssignedValue] = useState("");

    const handleSubmit = (event) => {
        const fecha = new Date();
        const datos = {
            "name": textValue,
            "description": textDesValue,
            "status": "TODO",
            "assignedTo": textAssignedValue,
            "dueDate": fecha.toJSON()
        }
        ServiceRest("POST", `api/task`, datos, (data) => {
            addNewTask(data);
            setTextValue("");
            setTextDesValue("");
            setTextAssignedValue("");
        });
    };

    const handleTextChange = (event) => {
        const value = event.target.value;
        setTextValue(value);
    };

    const handleTextDescriptionChange = (event) => {
        const value = event.target.value;
        setTextDesValue(value);
    };

    const handleAssignedToChange = (event) => {
        const value = event.target.value;
        setTextAssignedValue(value);
    };
    return (
        <Center>
            <Box boxSize="300px" bg="#DCF9E4" boxShadow="dark-lg" borderRadius="30" mt="30" mb="10" p="30px">

                <Input
                    borderColor="black"
                    value={textValue}
                    onChange={handleTextChange}
                    type="text"
                    placeholder="Task name"
                    mb="3"
                />
                <Textarea
                    borderColor="black"
                    value={textDesValue}
                    onChange={handleTextDescriptionChange}
                    placeholder="Task Description"
                    mb="3"
                />
                <Input
                    borderColor="black"
                    value={textAssignedValue}
                    onChange={handleAssignedToChange}
                    type="text"
                    placeholder="Assigned to"
                    mb="3"
                />
                <Center>
                    <Button bg="green.400" color="white" onClick={handleSubmit}>Create Task</Button>
                </Center>
            </Box>
        </Center>
    );
}

export default CreateTask;

