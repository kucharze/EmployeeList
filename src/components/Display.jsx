import React from 'react'
import { StaffContext } from '../context/StaffContext'
import { useContext } from 'react'

function Display(props) {
    let {emp} = useContext(StaffContext)
  return (
    <div>
      <h1>{emp.name}</h1>
      <h2>{emp.role}</h2>
      <h2>{emp.phone}</h2>
      <h2>{emp.email}</h2>
    </div>
  )
}

export default Display
