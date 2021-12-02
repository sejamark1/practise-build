import React from 'react'
import "./prompt_style.css"

function PromptBox() {
    return (
        <div id="prompt_button">
            <p> Are you sure you want to delete? </p> 
            <div> 
            <button>Yes</button>
            <button>No</button>
            </div>
        </div>
    )
}

export default PromptBox; 

