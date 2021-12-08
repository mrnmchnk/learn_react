import React from 'react'
import { Button } from 'react-bootstrap'

const RemoteTodoItem = ({task, onRemove, onFinish}) => {
  return (
    <>
      <div className="row">
        <div style={{marginRight: 20}} className="col-1">{task.id}</div>
        <div className="col col-md-7">
          <h4 href='#' className="todo-task">{task.title}</h4>
          <div className="todo-task">{task.completed ? 'Completed!' : 'In work...'}</div>
          <Button variant={task.completed ? 'success' : 'primary'} onClick={() => onFinish(task)}>{task.completed ? 'Start task' : 'Finish task' }</Button>
        </div>
      </div>
      <hr></hr>  
    </>
  )
}

export default RemoteTodoItem
