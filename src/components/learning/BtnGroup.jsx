import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react'

// class BtnGroup extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { active: false }
//   }
  
//   onChangeClass = () => {
//     this.setState( (active) => ({ active: !active }) )
//   }

//   render() {
//     const buttonClass = classNames([
//       'btn', 'btn-secondary',  
//       this.state.active ? 'active' : ''
//     ]);
//     return (
//       <div class="btn-group" role="group">
//         <button type="button" className={buttonClass} onClick={this.onChangeClass} >Left</button>
//         <button type="button" class="btn btn-secondary right">Right</button>
//       </div>
//     )
//   }
// }


function BtnGroup() {
  const [ activeLeft, setActiveLeft ] = useState(false);
  const [ activeRight, setActiveRight ] = useState(false);

  const onLeftClick = () => {
    setActiveRight(false)
    setActiveLeft(true);
  }
  const onRightClick = () => {
    setActiveLeft(false)
    setActiveRight(true);
  }

  return (
    <div class="btn-group" role="group">
      <Button 
        type="button"
        variant='primary'
        className={ activeLeft? 'btn btn-secondary left active' : 'btn btn-secondary left' } 
        onClick={onLeftClick} 
      >
        {activeLeft? 'Active' : 'Not Active' }
      </Button>
      <Button 
        type="button" 
        className={ activeRight? 'btn btn-secondary right active' : 'btn btn-secondary right' } 
        onClick={onRightClick} 
      >
        {activeRight? 'Active' : 'Not Active' }
      </Button>
    </div>
  )
}


export default BtnGroup
