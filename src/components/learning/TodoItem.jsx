import React from 'react'

const TodoItem = ({task, onRemove}) => {
  return (
    <>
      <div class="row">
        <div class="col-auto">
          <button onClick={() => onRemove(task)} type="button" class="btn btn-primary btn-sm">-</button>
        </div>
        <div class="col">{task.val}</div>
      </div>
      <hr></hr>
    </>
  )
}

export default TodoItem
