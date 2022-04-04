import React from 'react'
import "./prompt_style.css"

function PromptBox(props) {
    function removePromptBox(){ 
        console.log(this.parentNode); 
    }
    return (
        <div id="prompt_button">
            <p> Are you sure you want to delete? </p> 
            <p> {props.promptMessage} </p> 
        <div> 
            <button onClick={props.yesFunction}>Yes</button>
            <button onClick={removePromptBox}>No</button>
            </div>
        </div>
    )
}

export default PromptBox; 

