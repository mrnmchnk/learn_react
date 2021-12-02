import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'

function Progress({percentage}) {
  return (
    <div style={{width: 300, height: 10}} >
      <ProgressBar now={percentage} />
    </div>
  )
}

export default Progress
