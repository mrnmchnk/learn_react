import React, { useState } from 'react'

function Carousel() {
  const [activeSlide, setactiveSlide] = useState(1)
  
  const disable = 'carousel-item'
  const active = 'carousel-item active'

  const showPrev = () => {
    setactiveSlide(activeSlide - 1)
    if ( activeSlide < 2 ) {
      setactiveSlide(3)
    }
  }

  const showNext = () => {
    setactiveSlide(activeSlide + 1)
    if ( activeSlide > 2 ) {
      setactiveSlide(1)
    }
  }

  return (
    <div id="carousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className={activeSlide == 1 ?  active : disable} id='1'>
          <img alt="" className="d-block w-100" src="https://via.placeholder.com/150"></img>
        </div>
        <div className={activeSlide == 2 ?  active : disable} id='2'>
          <img alt="" className="d-block w-100" src="https://via.placeholder.com/150/0000FF/808080"></img>
        </div>
        <div className={activeSlide == 3 ?  active : disable} id='3'>
          <img alt="" className="d-block w-100" src="https://via.placeholder.com/150/FF0000/FFFFFF"></img>
        </div>
      </div>
      <button onClick={showPrev} className="carousel-control-prev" data-bs-target="#carousel" type="button" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button onClick={showNext} className="carousel-control-next" data-bs-target="#carousel" type="button" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

  )
}

//

export default Carousel

