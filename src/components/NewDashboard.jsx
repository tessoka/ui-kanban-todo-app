import React from 'react'
import GetDashId from '../utils/GetDashId.js'

function NewDashboard({ dashLimit, onCreate }) {

  // ADD NEW DASHBOARD
  const newDash = () => {
    let newDash = {id: GetDashId(), dashName: "", tasks: []}
    onCreate(newDash)
  }
  // END of ADD NEW DASHBOARD

  return (
    <>
      {
        dashLimit ? 
        <button disabled className="btn-disabled">Reached maximum</button>
        :
        <button className="btn-board-create" onClick={newDash}>+ Create board</button>
      }
    </>
  )
}

export default NewDashboard
