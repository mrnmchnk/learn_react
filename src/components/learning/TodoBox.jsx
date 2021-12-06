import React, { useState } from 'react'
import TodoItem from './TodoItem'

const TodoBox = () => {

  const [task, setTask] = useState('')
  const [index, setIndex] = useState(0)
  const [postArr, setPostArr] = useState([])

  const onInput = (e) => {
    setTask(e.target.value)
  }

  const onSubmitForm = (e) => {
    e.preventDefault()
    setIndex(index + 1)
    setPostArr([{id: index, val: task}, ...postArr])
    setTask('')
  }

  const onRemove = (task) => {
    setPostArr(postArr.filter(item => item.id !== task.id ))
  }

  return (
    <div>
      <div class="mb-3">
        <form onSubmit={onSubmitForm} class="d-flex">
          <div class="me-3">
            <input onChange={onInput} type="text" value={task} required="" class="form-control" placeholder="I am going..."></input>
          </div>
          <button type="submit" class="btn btn-primary">add</button>
        </form>
      </div>
      {postArr.map( item => {
        return <TodoItem key={item.id} task={item} onRemove={onRemove} />
      } )}
    </div>
  )
}

export default TodoBox
