import React from 'react'
import "./addbutton.css"

function AddButton(props) {
  return (
    <div className='add_project_cover' >
        <a className="no_href_property" href={props.direct}>
        <div className="add_project noselect">
        <h1> + </h1>
        <p> {props.addWhat} </p>
        </div>
        </a>
    </div>
  )
}

export default AddButton