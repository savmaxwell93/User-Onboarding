import React from 'react'

function User({ details }) {
  if (!details) {
    return <h3>Working fetching user details...</h3>
  }

  return (
    <div className='user-container'>
      <p>Name: {details.first_name} {details.last_name}</p>
      <p>Email: {details.email}</p>

    </div>
  )
}

export default User