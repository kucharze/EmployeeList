import React from 'react'
import { StaffContext } from '../context/StaffContext'
import { useContext } from 'react'

function Display() {
    let {emp} = useContext(StaffContext)
  return (
    <div>
      <img src={emp.icon} alt="" className='displayPic'/>
      <h1 className='display_name'>{emp.name}</h1>
      <h2 className='display'>{emp.role}</h2>
      <h2 className='display'>{emp.phone}</h2>
      <h2 className='display'>{emp.email}</h2>
    </div>
  )
}

export default Display
