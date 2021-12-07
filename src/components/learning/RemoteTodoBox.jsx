import axios from 'axios'
import React, { useEffect, useState } from 'react'
import RemoteTodoItem from './RemoteTodoItem'

const RemoteTodoBox = () => {

  const [task, setTask] = useState('')
  // const [index, setIndex] = useState(0)
  const [submittedTask, setSubmittedTask] = useState('')
  const [tasksArr, setTasksArr] = useState([])


  const fetchTasks = async () => {
    await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then( res => setTasksArr( res.data ) )
  }
    
  const onInput = (e) => {
    setTask(e.target.value)
  }

  const onRemove = (task) => {
    setTasksArr(tasksArr.filter(item => item.id !== task.id ))
  }

  const onAdd = async (e) => {
    e.preventDefault()
    setSubmittedTask(task)
    console.log(submittedTask)
  }

  useEffect( () => {
    fetchTasks()
  }, [] )


  useEffect(  () => {
     axios.post('https://jsonplaceholder.typicode.com/todos?_limit=5', {
      title: task
    }).then( res => console.log(res.data) )
  }, [submittedTask] )

  return (
    <div>
      <div className="mb-3">
        <form className="todo-form mx-3">
          <div className="d-flex ">
            <input onChange={onInput} type="text" value={task} required="" className="form-control me-3" placeholder="I am going..."></input>
            <button type="submit" onSubmit={onAdd} className="btn btn-primary">add</button>
          </div>
        </form>
      </div>
      { tasksArr.map( item => {
        return <RemoteTodoItem key={item.id} task={item} onRemove={onRemove} />
      } ) }
    </div>
  )
}

export default RemoteTodoBox
