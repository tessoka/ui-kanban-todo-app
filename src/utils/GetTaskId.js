let taskId = 0
const GetTaskId = () => {
  return taskId++
}

export default (GetTaskId)
