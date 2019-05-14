import React, { memo, useState, useEffect } from 'react'
import uuid from 'uuid/v4'

const TASKS_STORAGE_KEY = 'TASKS_STORAGE_KEY'

const storeTasks = tasksMap => {
  localStorage.setItem(
    TASKS_STORAGE_KEY,
    JSON.stringify(tasksMap)
  )
}

function Tasks() {
  const [taskText, setTaskText] = useState('')
  const [tasks, setTasks] = useState([])
  const [completedTasks, setCompletedTasks] = useState([])

  useEffect(() => {
    storeTasks({ tasks, completedTasks })
  }, [tasks, completedTasks])

  const updateTaskText = event => {
    setTaskText(event.target.value)
  }

  const addTask = () => {
    setTasks([...tasks, { taskText, id: uuid() }])
    setTaskText('')
  }

  const completeTask = completedTask => {
    setCompletedTasks([...completedTasks, completedTask])
    setTasks(tasks.filter(task => task.id !== completedTask.id))
  }

  const deleteTask = deletedTask => {
    setCompletedTasks(completedTasks.filter(task => task.id !== deletedTask.id))
  }

  return (
    <div className="Tasks">
      <h3>Tasks</h3>
      <div className="form">
        <input value={taskText} onChange={updateTaskText} />
        <button onClick={addTask}>Add task</button>
      </div>
      <div className="task-list">
        <h4>New Tasks</h4>
        {
          tasks.map(task => {
            const { id, taskText } = task
            return <div key={id} onClick={() => completeTask(task)}>{taskText}</div>
          })
        }
      </div>
      <hr />
      <div className="completed-list">
        <h4>Completed Tasks</h4>
        {
          completedTasks.map(task => {
            const { id, taskText } = task
            return (<div key={id}>
              {taskText}
              <span onClick={() => deleteTask(task)} className="delete-task">X</span>
              </div>)
          })
        }
      </div>
    </div>
  )
}

export default memo(Tasks)
