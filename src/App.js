// import Dashboards from './Dashboards'
import { useEffect, useState } from 'react'
import NewDashboard from './components/NewDashboard.jsx'
import AddTask from './components/AddTask'
import Task from './components/Task'
import TaskDetails from './components/TaskDetails.jsx'
import GetTaskId from './utils/GetTaskId.js'
import GetDashId from './utils/GetDashId.js'




function App() {
  
  const [ dataBank, setDataBank] = useState([])

  useEffect(() => {
    setDataBank([{id: GetDashId(), dashName: "Today", tasks: [
      {id: GetTaskId(), status: "pending", taskPriority: "high", taskTitle: "Some random text", taskDetails: "The detailed description of the specific task max 255 chars."},
      {id: GetTaskId(), status: "progress", taskPriority: "low", taskTitle: "Do loundry", taskDetails: "Ever have that feeling where you're not sure if you're awake or dreaming?"},
      {id: GetTaskId(), status: "pending", taskPriority: "med", taskTitle: "He who controls the Spice controls the Universe!", taskDetails: "Let's face it, this is not the worst thing you've caught me doing."},
    ]},
    {id: GetDashId(), dashName: "Tomorrow", tasks: [
      {id: GetTaskId(), status: "done", taskPriority: "low", taskTitle: "Long live the emperor for two rows", taskDetails: "The detailed description of the specific task max 255 chars."},
      {id: GetTaskId(), status: "pending", taskPriority: "low", taskTitle: "Doctor Who?", taskDetails: "The universe is big. It’s vast and complicated and ridiculous. And sometimes, very rarely, impossible things just happen and we call them miracles."},
      {id: GetTaskId(), status: "pending", taskPriority: "med", taskTitle: "Hello There", taskDetails: "May the force be with you, young padawan."},
      {id: GetTaskId(), status: "pending", taskPriority: "high", taskTitle: "Why so serious?", taskDetails: "The detailed description of the specific task max 255 chars."},
    ]}])
  }, [])
    
  
  console.log(dataBank)


// DASH NAME CHANGE
  const changeDashName = (dashboard, e) => {
    dashboard.dashName = e.target.value
    console.log("check it happened")
    setDataBank([...dataBank])
  }
// END of DASH NAME CHANGE


// UPDATE DASHBOARD
  const updDashboard = (newDash) => {
    console.log("check it happened new dash")
    setDataBank([...dataBank, newDash])
  }
// END of UPDATE DASHBOARD


// MARK TASK AS DONE
  const toggleDone = (e, task) => {
    let tempData = [...dataBank]
    if (task.status === "pending") {
      task.status = "progress"
    } else if (task.status === "progress") {
      task.status = "done"  
    } else {
      task.status = "pending"
    }
    console.log("check it happened")
    setDataBank(tempData)
    e.stopPropagation() /// NOT WORKING YET !!!!!!!!!!!!!!!
  }
// END of MARK TASK AS DONE


// ADD NEW TASK
  const addTask = (dashboard) => {
    let tempData = dashboard.tasks
    tempData.push({id: GetTaskId(), status: "pending", taskPriority: "low", taskTitle: "Undefinded", taskDetails: " "})
    console.log("check it happened")
    setDataBank([...dataBank])
    }
// END of ADD NEW TASK


// CHANGE PRIO
  const changePrio = (e, task) => {
    if (task.taskPriority === "low") {
      task.taskPriority = "med"
    } else if (task.taskPriority === "med") {
      task.taskPriority = "high"
    }
    else {
      task.taskPriority = "low"
    }
    console.log("check it happened")
    setDataBank([...dataBank])

    e.stopPropagation()
  }
// END of CHANGE PRIO


// DELETE TASK
  const deleteTask = (e, dashboard, task) => {
    for (let i in dashboard.tasks) {
      if (dashboard.tasks[i] === task) {
        dataBank[dashboard.id-1].tasks.splice(i, 1)
      }
    }
    console.log("check it happened")
    setSelectedTask(null)
    setDataBank([...dataBank])
    e.stopPropagation()
  }
// END of DELETE TASK


// SELECT TASK 
  const [selectedTask, setSelectedTask] = useState(null)
  const [selectedTaskPrev, setSelectedTaskPrev] = useState(null)

  const selectTask = (dashboard, task) => {
    
    console.log(task.id)
    console.log(selectedTaskPrev)

    if (task.id === selectedTaskPrev) {
      setSelectedTaskPrev(null)
      setShowTaskDesc(false)
    } else {
      setShowTaskDesc(true)
    }
    
    setSelectedTask([dashboard, task])
    setSelectedTaskPrev(task.id)
  }

  const [ showTaskDesc, setShowTaskDesc] = useState(false)
  const [ showCloseButton, setShowCloseButton] = useState(true)


// DELETED DASHBOARD
  const deleteDash = (dashboard) => {
    setDataBank(dataBank.filter(dash => dash !== dashboard))
  }
// END of DELETE DASHBOARD



// UPDATE TASK
  const updTask = (taskTitle, taskDetails) => {
    selectedTask[1].taskTitle = taskTitle
    selectedTask[1].taskDetails = taskDetails
    setDataBank([...dataBank])
  }
// END of UPDATE TASK


  return (
    <div className="App">
      <div className="dashboard-container">
        <div className="todo-container">
          <div className="header-box">
            <h1>To Do Board</h1>
            <NewDashboard onCreate={updDashboard} />
          </div>
          <div className="dashboard-box">
            {
              dataBank.map(dashboard => { return (
                <div className="board" key={dashboard.id}>
                  <div className="board-header">
                    <input type="text" name="dashname" id="dashname" onChange={(e) => changeDashName(dashboard, e)} value={dashboard.dashName} onFocus={() => setShowCloseButton(false)} onBlur={() => setShowCloseButton(true)}/>
                    {showCloseButton && <div className="board-delete" onClick={() => deleteDash(dashboard)}>x</div>}
                  </div>

                  {dashboard.tasks.map(task => 
                    <Task key={task.id} dashboard={dashboard} task={task} deleteTask={deleteTask} changePrio={changePrio} toggleDone={toggleDone} selectTask={selectTask}/>
                  )}
                  <AddTask dashboard={dashboard} addTask={addTask} />
                </div>
              )})
            }
          </div>
        </div>
        
        { showTaskDesc && <TaskDetails selectedTask={selectedTask} updTask={updTask}/>}

      </div>
    </div>
  );
}

export default App;
