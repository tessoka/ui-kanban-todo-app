import React from 'react'

function AddTask({dashboard, addTask}) {
  return (
    <button className="add-task" onClick={() => addTask(dashboard)}>
      <div className="add-task-sign">+</div>
      <p>Add Task</p>
    </button>
  )
}

export default AddTask
