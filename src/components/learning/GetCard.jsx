import React from "react";
import { Card } from "react-bootstrap";


const GetCard = (obj) => {
  return(
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">{obj.title || 'title'}</h4>
        <p className="card-text">{obj.text || 'text'}</p>
        <button type="button" className="btn btn-primary">Go somewhere</button>
      </div>
    </div>
  )
}


export default GetCard;