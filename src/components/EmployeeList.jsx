import React from 'react'
import EmployeeListItem from './EmployeeListItem'
import { useContext } from 'react'
import { StaffContext } from '../context/StaffContext'

function EmployeeList(props) {
    let {employees, setEmp} = useContext(StaffContext)
  return (
    <div className='EmployeeList'>
        <h2>Our Employees</h2>
        {
            employees.map((item)=>{
                return <EmployeeListItem 
                key={item.name} name={item.name} role={item.role}
                onClick={()=>{setEmp(item)}}/>
            })
        }
    </div>
  )
}

export default EmployeeList
