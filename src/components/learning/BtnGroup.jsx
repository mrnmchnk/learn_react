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
  // а можно использовать одно состояние и в проверке просто подставить ! --  но только если вначале обе не были бы неактивны? 

  const [activeBtn, setactiveBtn] = useState(null)

  const onLeftClick = () => {
    setactiveBtn('left')
  }
  const onRightClick = () => {
    setactiveBtn('right')
  }
  

  return (
    <div class="btn-group" role="group">
      <Button 
        type="button"
        variant='primary'
        className={activeBtn === 'left' ? 'btn btn-secondary left active' : 'btn btn-secondary left' }
        onClick={onLeftClick} 
        >
        {/* {activeLeft? 'Active' : 'Not Active' } */}
        Left
      </Button>
      <Button 
        type="button" 
        className={activeBtn === 'right' ? 'btn btn-secondary right active' : 'btn btn-secondary right' }
        // className={ activeRight? 'btn btn-secondary right active' : 'btn btn-secondary right' } 
        onClick={onRightClick} 
      >
        {/* {activeRight? 'Active' : 'Not Active' } */}
        Right
      </Button>
    </div>
  )
}


export default BtnGroup
