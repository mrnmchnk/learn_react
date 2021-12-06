import React from 'react'

const Card_functional = ({children}) => {
  return (
    <div className='card'>
      <div className='card-body'>
        {children}
      </div>
    </div>
  )
}

export default Card_functional