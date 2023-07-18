import React from 'react'
import { StaffContext } from '../context/StaffContext'
import { useContext } from 'react'

function Display(props) {
    let {emp} = useContext(StaffContext)
    console.log("emp:",emp)
  return (
    <div>
        <h1>Hello</h1>
      <h2>{emp.name}</h2>
      <h2>{emp.role}</h2>
    </div>
  )
}

export default Display
