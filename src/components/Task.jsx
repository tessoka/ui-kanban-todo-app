import React from 'react'
import { useState } from 'react'


function Task({dashboard, task, deleteTask, changePrio, toggleDone, selectTask}) {

  const [ showText, setShowText ] = useState(false)

  let toggleDescription = (e) => {
    setShowText(!showText)
    e.stopPropagation()
  }

  return (
    <div className={task.status === "done" ? 'task-done task-card' : task.status === "progress" ? 'task-progress task-card' : 'task-card' } key={task.id} onDoubleClick={(e) => toggleDone(e, task)} onClick={() => selectTask(dashboard, task)}>
      <div className="card-top">
        <div className="title-text">{task.taskTitle}</div>
        <div className="card-top-x" onClick={(e) => {deleteTask(e, dashboard, task)}}>x</div>
      </div>
      <div className="card-mid" onClick={(e) => toggleDescription(e)}>
        { showText ? task.taskDetails : "Click for details..."}
      </div>
      <div className="card-bot">
        <div className={`task-prio prio-${task.taskPriority}`} onClick={(e) => changePrio(e, task)}>{task.taskPriority} priority</div>
        <div className="task-assign">Unassigned</div>
      </div>
    </div>
  )
}

export default Task
