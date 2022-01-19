import { useState } from 'react'
import EditLogo from '../svg/edit-d-text'


function Task({dashboard, task, deleteTask, changePrio, toggleDone, selectTask}) {

  const [ showText, setShowText ] = useState(false)

  let toggleDescription = (e) => {
    setShowText(!showText)
    e.stopPropagation()
  }

  return (
    <div className={task.status === "done" ? 'task-done task-card' : task.status === "progress" ? 'task-progress task-card' : 'task-card' } key={task.id} onDoubleClick={(e) => toggleDone(e, task)}>
      <div className="card-top">
        <div className="title-text">{task.taskTitle}</div>
        <div className="card-top-x" onClick={(e) => {deleteTask(e, dashboard, task)}}>x</div>
      </div>
      <div className="card-mid" onClick={(e) => toggleDescription(e)}>
        { showText ? task.taskDetails : "Click for details..."}
      </div>
      <div className="card-bot">
        <div className={`task-prio prio-${task.taskPriority}`} onClick={(e) => changePrio(e, task)}>{task.taskPriority} priority</div>
        <div className="task-edit" onClick={() => selectTask(dashboard, task)}><svg className="edit-logo" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg></div>
      </div>
    </div>
  )
}

export default Task
