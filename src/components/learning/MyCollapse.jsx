import React, { useState } from 'react'

const MyCollapse = ({opened}) => {

  const [isShown, setIsShown] = useState(opened)

  const toggleShow = () => {
    setIsShown( !isShown )
  }
  console.log(opened)

  return (
    <div style={{marginTop: 30}} >
      <p>
        <a 
          onClick={toggleShow} 
          class="btn btn-primary" 
          data-bs-toggle="collapse" 
          href="#" 
          role="button" 
          aria-expanded={isShown ? 'true' : 'false'}
          >
            {isShown ? 'Collapse!' : 'Show!'}
          </a>
      </p>
      <div class={isShown ? 'collapse show' : 'collapse'}>
        <div class="card card-body">
          collapse me!
        </div>
      </div>
    </div>
  )
}

export default MyCollapse

