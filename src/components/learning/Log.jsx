import React, { useEffect, useState } from 'react'

const Log = () => {
  const [log, setLog] = useState(0)
  const [index, setindex] = useState(0)
  const [logArr, setLogArr] = useState([])

  const plusLog = () => {
    setLog( log + 1 )
    setindex(index + 1)
  }
  const minusLog = () => {
    setLog( log - 1 )
    setindex(index + 1)
  }
  const updateLogArr = () => {
    index && setLogArr([{id: index, val: log}, ...logArr])
  }
  useEffect(() => {
    updateLogArr()
  }, [log])

  const deleteLog = (id) => {
    setLogArr(logArr.filter(item => item.id !== id ))
    console.log(id);
  }

  // console.log(log);
  // console.log(logArr);

  return (
    <div style={{margin: '30px 0px'}}>
      <div className="btn-group font-monospace" role="group">
        <button onClick={plusLog} type="button" className="btn btn-outline-success">+</button>
        <button onClick={minusLog} type="button" className="btn btn-outline-danger">-</button>
      </div>
      <div className="list-group">
        {logArr.map(item => {
          return(
              <button onClick={() => deleteLog(item.id)} key={item.id} type="button" className="list-group-item list-group-item-action">{item.val}</button>
              )
            })}
      </div>
    </div>
    
  )
}

export default Log