import React from 'react'
function Alert(props) { 
  return (
    <div className='' style={{height: '50px'}} ><div className={`alert alert-${props.alert.value} py-2 h-5`} role="alert">
   <strong>{props.alert.message1}</strong> {`${props.alert.message}`}
  </div>
  </div>
  )
}
export default Alert
