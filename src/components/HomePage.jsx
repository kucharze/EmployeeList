import React from 'react'
import Header from './Header'
import EmployeeList from './EmployeeList'
import SearchBar from './SearchBar'

function HomePage(props) {
  return (
    <div className='home'>
      <h1>The Home page</h1>
      <Header text="Employee Directory"/>
      <SearchBar/>
      <EmployeeList items={props.items}/>
    </div>
  )
}

export default HomePage
