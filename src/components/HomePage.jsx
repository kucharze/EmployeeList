import React from 'react'
import Header from './Header'
import EmployeeList from './EmployeeList'

function HomePage() {
  return (
    <div className='home'>
      <h1>The Home page</h1>
      <Header text="Employee Directory"/>
      <h1>SearchBar</h1>
      <EmployeeList/>
    </div>
  )
}

export default HomePage
