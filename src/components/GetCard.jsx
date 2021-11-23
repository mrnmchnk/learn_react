import React from "react";

// { title: 'hi', text: 'how are you?' }



const GetCard = ({...obj}) => {

  // const title = ( this.title && <h4 className="card-title">{this.title}</h4> )
  // const text = ( this.text && <p className="card-text">{this.text}</p> )

  const vcard = (
    <div className="card">
      <div className="card-body">
        {obj.title && <h4 className="card-title">{obj.title}</h4>}
        {obj.text && <p className="card-text">{obj.text}</p>}
        <button type="button" className="btn btn-primary">Go somewhere</button>
      </div>
    </div>
  )
  
  return((obj.title && obj.text) ? vcard : null)

  // return (
  //   <div className="card">
  //     <div className="card-body">
  //       {obj.title && <h4 className="card-title">{obj.title}</h4>}
  //       {obj.text && <p className="card-text">{obj.text}</p>}
  //       <button type="button" className="btn btn-primary">Go somewhere</button>
  //     </div>
  //   </div>
  // )
}


export default GetCard;