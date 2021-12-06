import React, { useEffect, useState } from 'react'

const Clock = () => {
  const [time, setTime] = useState(new Date())

  useEffect( () => {
    setInterval(setTime(new Date()), 1000)
  } )

  return (
    <div>
      <h2>{time.toLocaleTimeString()}</h2>
    </div>
  )
}

export default Clock
