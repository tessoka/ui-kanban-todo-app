import React from 'react'

function NewDashboard({getDashId, onCreate}) {

// ADD NEW DASHBOARD
const newDash = () => {
  let newDash = {id: getDashId, dashName: "Undefined", tasks: []}
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
