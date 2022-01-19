
let taskId = 0
const getTaskId = () => {
  taskId++
  // console.log(taskId)
  return taskId
}


let dashId = 0
const getDashId = () => {
  dashId++
  // console.log("dashID: " + dashId)
  return dashId
}

export default (getTaskId, getDashId)