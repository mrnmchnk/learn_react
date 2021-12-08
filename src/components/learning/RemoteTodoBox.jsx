import axios from 'axios'
import React, { useEffect, useState } from 'react'
import RemoteTodoItem from './RemoteTodoItem'
import update from 'immutability-helper'

const RemoteTodoBox = () => {

  const [task, setTask] = useState('')
  const [sorting, setSorting] = useState(false)
  const [submittedTask, setSubmittedTask] = useState('')
  const [tasksArr, setTasksArr] = useState([])

  const fetchTasks = async () => {
    await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then( res => setTasksArr( res.data ) )
  }
    
  const onInput = (e) => {
    setTask(e.target.value)
  }

  const onAdd = (e) => {
    e.preventDefault()
    setSubmittedTask(task)
    setTimeout(() => setTask(''), 500)
  }

  // const sortTasks = (task) => {
  //   setTasksArr( tasksArr.sort( (a,b) => a.completed - b.completed ) )
  // }

  // useEffect( () => {
  //   sortTasks()
  //   setSorting(false)
  // }, [sorting] )

  const onFinish = async (task) => {
    const res = await axios.patch(`https://jsonplaceholder.typicode.com/todos/${task.id}`, { completed: !task.completed })
    let index = task.id - 1
    setTasksArr( update(tasksArr, {[index]: { completed: {$set: res.data.completed} }}))
    // setSorting(true)
  }

  useEffect( () => {
    fetchTasks()
  }, [] )

  useEffect( async () => {
    submittedTask && await axios.post('https://jsonplaceholder.typicode.com/todos', {
      title: task,
    }).then( res => setTasksArr([...tasksArr, { id: res.data.id, title: res.data.title }]) )
  }, [submittedTask] )


  return (
    <div>
      <div className="mb-3">
        <form onSubmit={onAdd} className="todo-form mx-3">
          <div className="d-flex ">
            <input onChange={onInput} type="text" value={task}  required="" className="form-control me-3" placeholder="I am going..."></input>
            <button type="submit"  className="btn btn-primary">add</button>
          </div>
        </form>
      </div>
      { tasksArr.map( item => {
        return <RemoteTodoItem key={item.id} task={item}  onFinish={onFinish} />
      } ) }
    </div>
  )
}

export default RemoteTodoBox


//onRemove={onRemove}

// const [isSending, setIsSending] = useState(false)

// useEffect( async (task) => {
//   if (isSending) {const reSS = await axios.patch(`https://jsonplaceholder.typicode.com/todos/${task.id}`, { completed: true })
//   const index = task.id
//   setTasksArr( update(tasksArr, {index: { completed: {$set: true} }}))
//   setIsSending(false)}
// }, [isSending] )

// const onRemove = (task) => {
//   setTasksArr(tasksArr.filter(item => item.id !== task.id ))
// }