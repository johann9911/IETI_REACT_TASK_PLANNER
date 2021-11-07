import { useState, useContext, useEffect } from "react";
import { TaskItem } from "./TaskItem";
import UserContext from "../services/context/UserContext";
import CreateTask from "./CreateTask"

export const TaskList = () => {

  const { GetToken, SetToken, ServiceRest } = useContext(UserContext)
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    ServiceRest("GET", `api/task/all`, "", (data) => {
      setTasks(data)
    });
  }, []);

  const newTask = (task) => {
    const newTask = [...tasks, task];
    setTasks(newTask);
  }


  return (
    <article>
      <CreateTask addNewTask={newTask} />
      {tasks.map((task, index) => {
        return (
          <TaskItem
            id={task.id}
            taskName={task.name}
            taskDescription={task.description}
            taskStatus={task.status}
            taskAssignedTo={task.assignedTo}
            taskDueDate={task.dueDate}
          />
        );
      })}

    </article>
  );
};
