import React, { useEffect, useRef, useState } from 'react'

const Log = () => {
  const [log, setLog] = useState(0)
  const [count, setcount] = useState(0)
  const [logArr, setLogArr] = useState([])
  

  const plusLog = () => {
    setLog( log + 1 )
    setcount(count + 1)
  }
  const minusLog = () => {
    setLog( log - 1 )
    setcount(count + 1)
  }
  const updateLogArr = () => {
    count && setLogArr([{id: count, val: log}, ...logArr])
  }
  useEffect(() => {
    updateLogArr()
  }, [log])

  const deleteLog = (el) => {
    setLogArr(logArr.filter(item => item.id !== el.target.id ))
    console.log(el.target.id);
  }

  // console.log(log);
  // console.log(logArr);

  return (
    <div>
      <div className="btn-group font-monospace" role="group">
        <button onClick={plusLog} type="button" className="btn btn-outline-success">+</button>
        <button onClick={minusLog} type="button" className="btn btn-outline-danger">-</button>
      </div>
      <div className="list-group">
        {logArr.map(item => {
          return(
              <button onClick={deleteLog} id={item.id} type="button" className="list-group-item list-group-item-action">{item.val}</button>
              )
            })}
      </div>
    </div>
    
  )
}

export default Log