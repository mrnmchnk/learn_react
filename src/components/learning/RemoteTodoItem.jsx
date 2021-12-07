import React from 'react'

const RemoteTodoItem = ({task, onRemove}) => {
  return (
    <>
      <div className="row">
        <div className="col-1">{task.id}</div>
        <div className="col col-md-7">
          <a href='#' onClick={() => onRemove(task)} className="todo-task">{task.title}</a>
          <div className="todo-task">{task.completed.toString()}</div>
        </div>
      </div>
      <hr></hr>  
    </>
  )
}

export default RemoteTodoItem
