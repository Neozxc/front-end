import React from 'react'
import { Link } from 'react-router-dom'
import "./messagePage.css"

export const Messages = () => {
  return (
    <div>
        <h1 className='title'>You don't have any messages =(</h1>
        <p>Please send someone a message =)</p>
        <Link to="/"><button>Go back to main page</button></Link>
    </div>
  )
}
