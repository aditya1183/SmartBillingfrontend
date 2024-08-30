import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div>
        <h1>404 not Found </h1>
        <h3>url not found</h3>
        <Link to="/">Go Home</Link>
    </div>
  )
}

export default Error