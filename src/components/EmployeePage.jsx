import React from 'react'
import Header from './Header'
import Display from './Display'

function EmployeePage(props) {
    //console.log("Employee",props.item)
  return (
    <div className='employee'>
      <Header text="Employee"/>
      <h1>The display section</h1>
      <Display item={props.item}/>
    </div>
  )
}

export default EmployeePage
