import React, { useState, useContext } from 'react'
import { Box, Center, Input, Button, Textarea, Select } from '@chakra-ui/react'
import UserContext from '../services/context/UserContext'
import { useHistory } from 'react-router'

const EditTask = ({ id, name }) => {
  const history = useHistory()
  const { GetToken, SetToken, ServiceRest } = useContext(UserContext)
  const [textValue, setTextValue] = useState(name)
  const [textDesValue, setTextDesValue] = useState('')
  const [textStatus, setStatus] = useState('')
  const [textAssignedValue, setTextAssignedValue] = useState('')

  const handleSubmit = (event) => {
    const fecha = new Date()
    const datos = {
      id: id,
      name: textValue,
      description: textDesValue,
      status: textStatus,
      assignedTo: textAssignedValue,
      dueDate: fecha.toJSON(),
    }

    ServiceRest('PUT', `api/task/${id}`, datos, (data) => {
      history.goBack()
    })
  }

  const handleTextChange = (event) => {
    const value = event.target.value
    setTextValue(value)
  }

  const handleStatus = (event) => {
    const value = event.target.value
    setStatus(value)
  }

  const handleTextDescriptionChange = (event) => {
    const value = event.target.value
    setTextDesValue(value)
  }

  const handleAssignedToChange = (event) => {
    const value = event.target.value
    setTextAssignedValue(value)
  }
  return (
    <Center>
      <Box
        boxSize="350px"
        bg="#DCF9E4"
        boxShadow="dark-lg"
        borderRadius="30"
        mt="30"
        mb="10"
        p="30px"
      >
        <Input
          borderColor="black"
          color="red"
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
        <Select
          borderColor="black"
          onChange={handleStatus}
          placeholder="Select option"
          mb="3"
        >
          <option value="DONE">DONE</option>
          <option value="IN_PROGRESS">IN_PROGRESS</option>
          <option value="REVIEW">REVIEW</option>
          <option value="TODO">TODO</option>
        </Select>
        <Input
          borderColor="black"
          value={textAssignedValue}
          onChange={handleAssignedToChange}
          type="text"
          placeholder="Assigned to"
          mb="3"
        />
        <Center>
          <Button bg="green.400" color="white" onClick={() => history.goBack()}>
            volver
          </Button>
          <Button bg="green.400" ml="50px" color="white" onClick={handleSubmit}>
            Save
          </Button>
        </Center>
      </Box>
    </Center>
  )
}

export default EditTask
