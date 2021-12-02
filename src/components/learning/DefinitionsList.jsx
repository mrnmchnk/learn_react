import React from 'react'


class DefinitionsList extends React.Component {
  render() {
    const {data} = this.props
    return (
      <dl>
        {data.map( item => 
          <>
            <dt>{ item.dt }</dt>
            <dd>{ item.dd }</dd>
          </>
          )}
      </dl>
    )

  }
}


// function DefinitionsList({data}) {
//   // console.log(data);
//   return (
//     <dl>
//       {data.map( item => 
//         <>
//           <dt>{ item.dt }</dt>
//           <dd>{ item.dd }</dd>
//         </>
//         )}
//     </dl>
//   )
// }

export default DefinitionsList
