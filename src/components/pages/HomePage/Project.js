import React, { useState } from 'react'
import ProgressBar from "@ramonak/react-progress-bar";
import PromptBox from '../../layout/PromptBoxLayout/PromptBox';



function Project(props) {
    const [promptBox, setPromptBox] = useState(null); 
    function showPromptBox(){ 
        if(promptBox == null){
            setPromptBox(<PromptBox promptMessage="WARNING: Deleting project will delete all task associated with this project."yesFunction={deleteProject} />);
        }else{ 
            setPromptBox(); 
        }
    }
    function deleteProject() {

        fetch(`http://localhost:9000/api/deleteproject/${props.uniquePId}`, {
            method: "DELETE"
        }).then((result)=> { 
            console.log(result);    
            result.json().then((resp)=>{ 
            })
        })
        window.location.reload();
    
    
    }
    var pName = "/task/" + props.pName; 
    return (
        <>

        <div id="project" >
            <a href={pName}>
             <h1 id="p_title"> {props.pName} </h1>
            </a>
            <ProgressBar
                completed={"0"}
                className="wrapper"
                barContainerClassName="container"
                completedClassName="barCompleted"
                labelClassName="label"
                />
                <button onClick={showPromptBox} style={{"right":"7", "right" : "15px"}} id="del_button" name="UniqueKey" value="124" type="submit"> <img src="/images/delete.png"/>
                {promptBox}
                </button>

        </div>


        </>
    )
}

export default Project
