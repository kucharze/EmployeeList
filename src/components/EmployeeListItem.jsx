import React from 'react'

function EmployeeListItem(props) {
  return (
    <div className='empitem' onClick={props.func}>
      <img src={props.img} alt="" className='icon'/>
      <h2>{props.name}</h2>
      <h3>{props.role}</h3>
    </div>
  )
}

export default EmployeeListItem
