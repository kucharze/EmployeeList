import React from 'react'
import EmployeeListItem from './EmployeeListItem'

function EmployeeList() {
  return (
    <div className='EmployeeList'>
        <h2>Our Employees</h2>
      <EmployeeListItem name='Steven'/>
    </div>
  )
}

export default EmployeeList
