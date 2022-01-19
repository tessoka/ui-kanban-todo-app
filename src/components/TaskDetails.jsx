import React from 'react'
import { useState } from 'react'

function TaskDetails({selectedTask, updTask, changePrio}) {

  
  let dashboard = ""
  let task = ""
  if (selectedTask !== null) {
    task = selectedTask[1]
  }
  
  const [ newTaskDetails, setNewTaskDetails ] = useState(task.taskDetails)
  const [ newTaskTitle, setNewTaskTitle ] = useState(task.taskTitle)

  const changeTaskDesc = (value) => {
    setNewTaskDetails(value)
  }

  const changeTaskTitle = (value) => {
    setNewTaskTitle(value)
  }


  return (
    <div className="task-details">
      <div className="details-header details">
        <div className="details-task-header">TaskID: {task.id}</div>
        <textarea className="details-task-title" value={newTaskTitle === "Undefined" ? "" : newTaskTitle} placeholder={newTaskTitle === "Undefined" || newTaskTitle === "" ? "Undefined" : ""} onChange={(e) => changeTaskTitle(e.target.value)}/>
      </div>

      <div className="details-top details">
        <h3>Details</h3>
        <div className="details-task-prio">Priority:<p className={`task-prio prio-${task.taskPriority}`} onClick={(e) => changePrio(e, task)}>{task.taskPriority} priority</p></div>
        <div className="details-task-desc">Description:</div>
        <textarea type="textarea" value={newTaskDetails} onChange={(e) => changeTaskDesc(e.target.value)}/>
      </div>

      <div className="details-mid details">
        <h3>People</h3>
        <p className="details-task-prio"></p>
        <p className="details-task-prio"></p>
      </div>
      
      <div className="details-bot details">
        <h3>Dates</h3>
        <div className="details-task-dates"></div>
      </div>

      <div className="details-btn-box">
        <button onClick={() => updTask(newTaskTitle, newTaskDetails)}>UPDATE</button>
      </div>
    </div>
  )
}

export default TaskDetails
