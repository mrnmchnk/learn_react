import React, { useState } from 'react'

function Carousel() {

  const disable = 'carousel-item'
  const active = 'carousel-item active'

  const [firstSliderClass, setFirstSliderClass] = useState(active)
  const [secondSliderClass, setSecondSliderClass] = useState(disable)
  const [thirdSliderClass, setThirdSliderClass] = useState(disable)

  const showPrev = () => {
    if (firstSliderClass == active) {
      setFirstSliderClass(disable)
      setThirdSliderClass(active)
    }
    if (secondSliderClass == active) {
      setSecondSliderClass(disable)
      setFirstSliderClass(active)
    }
    if (thirdSliderClass == active) {
      setThirdSliderClass(disable)
      setSecondSliderClass(active)
    }
  }

  const showNext = () => {
    if (firstSliderClass == active) {
      setFirstSliderClass(disable)
      setSecondSliderClass(active)
    }
    if (secondSliderClass == active) {
      setSecondSliderClass(disable)
      setThirdSliderClass(active)
    }
    if (thirdSliderClass == active) {
      setThirdSliderClass(disable)
      setFirstSliderClass(active)
    }
  }

  return (
    <div id="carousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class={firstSliderClass}>
          <img alt="" class="d-block w-100" src="https://via.placeholder.com/150"></img>
        </div>
        <div  class={secondSliderClass}>
          <img alt="" class="d-block w-100" src="https://via.placeholder.com/150/0000FF/808080"></img>
        </div>
        <div class={thirdSliderClass}>
          <img alt="" class="d-block w-100" src="https://via.placeholder.com/150/FF0000/FFFFFF"></img>
        </div>
      </div>
      <button onClick={showPrev} class="carousel-control-prev" data-bs-target="#carousel" type="button" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button onClick={showNext} class="carousel-control-next" data-bs-target="#carousel" type="button" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

  )
}

//

export default Carousel




// (!secondSliderClass && !thirdSliderClass) 
// ? 
// setSecondSliderClass(active) 
// : 
// (!firstSliderClass && !thirdSliderClass) 
// ? 
// setThirdSliderClass(active)
// :
// (!firstSliderClass && !secondSliderClass)
// ?
// setFirstSliderClass(active)
// :
// null