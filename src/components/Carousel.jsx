import React from 'react'
import { Button } from 'react-bootstrap';

function Carousel() {
  return (
    <div id="carousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img alt="" class="d-block w-100" src="https://via.placeholder.com/150"></img>
        </div>
        <div class="carousel-item">
          <img alt="" class="d-block w-100" src="https://via.placeholder.com/150"></img>
        </div>
        <div class="carousel-item">
          <img alt="" class="d-block w-100" src="https://via.placeholder.com/150"></img>
        </div>
      </div>
      <button class="carousel-control-prev" data-bs-target="#carousel" type="button" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" data-bs-target="#carousel" type="button" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    

    // <>
    //   <Button variant="primary">Primary</Button>{' '}
    //   <Button variant="secondary">Secondary</Button>{' '}
    //   <Button variant="success">Success</Button>{' '}
    //   <Button variant="warning">Warning</Button>{' '}
    //   <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
    //   <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
    //   <Button variant="link">Link</Button>
    // </>

  )
}

export default Carousel
