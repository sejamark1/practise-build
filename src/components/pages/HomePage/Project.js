import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";



function Project(props) {
    return (
        <div id="project">
            <h1> {props.pName} </h1>
            <ProgressBar
                completed={props.due}
                className="wrapper"
                barContainerClassName="container"
                completedClassName="barCompleted"
                labelClassName="label"
                />
     
                
        </div>
    )
}

export default Project
