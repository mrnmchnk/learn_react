import React from 'react'


// на классовом

// class ListGroup extends React.Component {
//   render() {
//     const { children } = this.props
//     return (
//       <ul class="list-group">
//         {children.map( child =>  <li>{child}</li> )}
//       </ul>
//     )
//   }
// }

// на функциональном

const ListGroup = (props) => {
  return (
    <ul class="list-group">
      {props.children.map( child =>  <li>{child}</li> )}
    </ul>
  )
}

export default ListGroup
