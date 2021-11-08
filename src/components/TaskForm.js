import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router'
import UserContext from '../services/context/UserContext'
import EditTask from './EditTask'

export const TaskForm = () => {
  
  const { taskId, name } = useParams()

  if (!taskId) {
    return <div>Task not found</div>
  }

  return (
    <form>
      <EditTask id={taskId} name={name}></EditTask>
    </form>
  )
}
