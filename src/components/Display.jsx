import React from 'react'

function Display(props) {
    console.log(props.item)
  return (
    <div>
        <h1>Hello</h1>
      <h2>{props.item.name}</h2>
      <h2>{props.item.role}</h2>
    </div>
  )
}

export default Display
