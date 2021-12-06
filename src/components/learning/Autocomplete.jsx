import axios from 'axios';
import React, { useState } from 'react'

const Autocomplete = () => {
  const [inputVal, setInputVal] = useState('')
  const [resArr, setResArr] = useState([])
  const [filtered, setFiltered] = useState([])

  const fetchCountries = async (e) => {
    e.preventDefault()
    setInputVal(e.target.value.toLowerCase())
    const res = await axios.get(`https://jsonplaceholder.typicode.com/comments?_limit=50`, { param: { term: `${inputVal}` } })
    console.log(res.data);
    setResArr(res.data.map((item) => item.email))
    filterRes()
  }
  
  const filterRes = () => {
    setFiltered( resArr.filter( data => {
      return data.toLowerCase().startsWith(inputVal)
    }))
    // console.log(filtered)
  }

  return (
    <div style={{ margin: '30px 0px' }} >
      <form>
        <input onChange={fetchCountries} value={inputVal} type="text" class="form-control" placeholder="Enter Country"></input>
      </form>
      <ul>
        {filtered.map((item, index) => <li key={index}>{item}</li> ) }
      </ul>
    </div>
  )
}

export default Autocomplete
