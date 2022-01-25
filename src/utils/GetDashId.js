let dashId = 0
const GetDashId = () => {
  return dashId++
}

export default (GetDashId)
