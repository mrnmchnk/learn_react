import React from 'react'

const TodoItem = ({task, onRemove}) => {
  return (
    <>
      <div className="row">
        <div className="col-auto">
          <button onClick={() => onRemove(task)} type="button" className="btn btn-primary btn-sm">-</button>
        </div>
        <div className="col">{task.val}</div>
      </div>
      <hr></hr>
    </>
  )
}

export default TodoItem
