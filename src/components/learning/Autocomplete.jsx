import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'

const Autocomplete = () => {
  const [inputVal, setInputVal] = useState('')
  const [resArr, setResArr] = useState([])
  const [filtered, setFiltered] = useState([])
  const inputRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('hello')
  }

  const fetchCountries = async (e) => {
    setInputVal(e.target.value.toLowerCase())
    await axios.get(`https://jsonplaceholder.typicode.com/comments?_limit=100`)
      .then( (res) => setResArr( res.data.map((item) => item.email) ) )
  }
  
  const filterRes = () => {
    setFiltered( resArr.filter( data => {
      return data.toLowerCase().startsWith(inputVal)
    }))
  }
  
  useEffect( () => {
    inputRef.current.focus()
    filterRes()
  }, [inputVal] )

  const onEnter = (e) => {
    e.key === 'Enter' && setInputVal(e.target.textContent)
  }

  const onInputEnter = (e) => {
    e.key === 'Enter' && setInputVal(filtered[0])
  }

  return (
    <div style={{ margin: '30px 0px' }} >
      <form>
        <input 
          onChange={fetchCountries} 
          onSubmit={handleSubmit}
          onKeyDown={(e) => onInputEnter(e)}
          value={inputVal}
          tabIndex={1}
          ref={inputRef}
          type="text" 
          className="form-control" 
          placeholder="Enter Email to search"></input>
      </form>
      <ul className='emailList' >
        { inputVal &&  filtered.map((item, index) => 
          <li 
          className='emailList__item'
          onClick={ (item) => setInputVal(item.target.textContent) } 
          onKeyDown={(e) => onEnter(e)} 
          tabIndex={index+2} 
          key={index}
          >
            {item}
          </li> 
        )}
      </ul>
    </div>
  )
}

export default Autocomplete
