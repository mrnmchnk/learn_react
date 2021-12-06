import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'

const ModalLearn = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleClass = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <Button variant="primary" onClick={toggleClass}>Open</Button>
      <Modal show={isOpen} onHide={toggleClass}>
        <Modal.Header closeButton>Modal title</Modal.Header>
        <Modal.Body>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={toggleClass}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ModalLearn

// <div>
// <button type="button" className="modal-open-button btn btn-danger" onClick={toggleClass}>Open</button>
// <Modal isOpen={isOpen} >
//   <Modal.Header toggle={toggleClass}>Modal title</Modal.Header>
//   <Modal.Body>
//     Lorem ipsum dolor sit amet, consectetur adipisicing elit
//   </Modal.Body>
//   <Modal.Footer>
//     <button type="button" className="modal-close-button btn btn-secondary" onClick={toggleClass}>Cancel</button>
//   </Modal.Footer>
// </Modal>
// </div>  

// <div>
// <button type="button" class="modal-open-button btn btn-danger">Open</button>
// <div class="modal" style={{display: 'block'}} role="dialog">
//   <div class="modal-dialog">
//     <div class="modal-content">
//       <div class="modal-header">
//         <div class="modal-title">Modal title</div>
//         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
//         </button>
//       </div>
//       <div class="modal-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit</div>
//       <div class="modal-footer">
//         <button type="button" class="modal-close-button btn btn-default">Cancel</button>
//       </div>
//     </div>
//   </div>
// </div>
// </div>
