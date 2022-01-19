import React from 'react'
import GetDashId from '../utils/GetDashId.js'

function NewDashboard({ onCreate }) {

// ADD NEW DASHBOARD
const newDash = () => {
  let newDash = {id: GetDashId(), dashName: "Undefined", tasks: []}
  onCreate(newDash)
}
// END of ADD NEW DASHBOARD

  return (
    <>
      <button className="board-create" onClick={newDash}>+ Create board</button>
    </>
  )
}

export default NewDashboard
