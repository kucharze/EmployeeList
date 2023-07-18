import React from 'react'
import EmployeeListItem from './EmployeeListItem'

function EmployeeList(props) {
  return (
    <div className='EmployeeList'>
        <h2>Our Employees</h2>
        {
            props.items.map((item)=>{
                return <EmployeeListItem key={item.name} name={item.name} role={item.role}/>
            })
        }
    </div>
  )
}

export default EmployeeList
