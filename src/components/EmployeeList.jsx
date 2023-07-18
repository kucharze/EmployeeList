import React from 'react'
import EmployeeListItem from './EmployeeListItem'

function EmployeeList(props) {
  return (
    <div className='EmployeeList'>
        <h2>Our Employees</h2>
        {
            props.items.map((item)=>{
                return <EmployeeListItem name={item.name}/>
            })
        }
    </div>
  )
}

export default EmployeeList
