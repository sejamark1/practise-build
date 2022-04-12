import styled from "styled-components";
import { useState, useEffect } from "react";
import PromptBox from "../../layout/PromptBoxLayout/PromptBox";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../LoginPage/Login";
import { alterEditIds } from "../AddTaskPage/EditTask";



function TaskBox(props){ 
    //console.log("Return TaskBox " + props.funcEditId);

    const [taskBoxExpander, setTaskBoxExpander] = useState("deactive-expand"); 
    const [showTaskDetail, setShowTaskDetail] = useState("task-detail-cover")
    const [promptBox, setPromptBox] = useState(<div></div>)

    // Change width of UserTask to 50% when clicked. And Vice versa.  

    //TODO: 
        // I need to click on taskbox DIV and make .task-detail-cover text-overflow: revert




        
function deleteTaskBox(){ 
    //setPromptBox(<PromptBox />)

    
    fetch(`http://localhost:9000/api/deletetask/${props.uniqueKey}`, {
        method: "DELETE"
    }).then((result)=> { 
        console.log(result);    
        result.json().then((resp)=>{ 
        })
    })
    window.location.reload();


    
    
}


function updateStatus(){ 
    fetch(`http://localhost:9000/api/updatestatus/${props.uniqueKey}/${props.taskChekced}`, {
        method: "put"
    }).then((result)=> { 
        console.log(result);    
        result.json().then((resp)=>{ 

        })
    })
    window.location.reload();


}
    
function expandTaskBox() { 
    if(taskBoxExpander == "active-expand"){ 
        setTaskBoxExpander("deactive-expand");
        setShowTaskDetail("task-detail-cover")
    }else{ 
        setTaskBoxExpander("active-expand");
        setShowTaskDetail("task-detail-show")

    }
}

function taskShowOrHide(){
    let taskShowOrHide= props.taskPublish=="1" ? "Hide" : "Publish"; 

    fetch(`http://localhost:9000/api/update-publish/${props.uniqueKey}/${taskShowOrHide}`, { 
        method: "post"
    }).then((result)=> { 
        console.log(result); 
        result.json().then((resp)=>{ 
        })
    })


    
    window.location.reload();

}
const priorityColours  = {
    RED: "#B10542", 
    YELLOW: "#CC6666", 
    GREEN: "#4EF500", 



}



function updateIdOnAPI(){
    console.log("Update Id for task is called.");
    fetch(`http://localhost:9000/api/update_editId/${props.uniqueKey}`, { 
        method: "post"
    }).then((result)=> { 
        console.log(result); 
        result.json().then((resp)=>{ 
        })
    })


    

}


function chnagePath(){ 
    <Router> 
    <Switch> 
        <Route path="/login"> 
            <Login tOfUser={"typeOfUser"}/> 
        </Route>
        </Switch>
    </Router> 
    
}



function priorityColourChanger_HTML(){ 
    if(props.taskPriority==1){ 
        return <div className="dot project task-priority" style={{backgroundColor: priorityColours.RED}}> {props.taskPriority}</div>
    }else if(props.taskPriority==2){ 
        return <div className="dot project task-priority" style={{backgroundColor: priorityColours.YELLOW}}> {props.taskPriority}</div>
    }else if(props.taskPriority==3){ 
        return <div className="dot project task-priority" style={{backgroundColor: priorityColours.GREEN}}> {props.taskPriority}</div>
    }
    return <div> ERROR </div>
}


    //del_button right 28% for admin. 
    return (
       
    <> 

    
    
    
    <UserTask className={"task-bar " + taskBoxExpander} id="task-bar" > 
        <div className="project project-name">{props.projectName}</div>
        <div onClick={expandTaskBox} className={"project task-detail " + showTaskDetail}>{props.taskDetail}</div>
        <div className="project task-due">{props.taskDue}</div>
        <div style={{"width": "3.5%"}}> 
            {priorityColourChanger_HTML()}
        </div>
        <div style={{marginTop: "9px"}}className="project task-check">
            {props.taskChekced=="true" ? 
                <input type="checkbox" id="task-done" name="scales" onClick={updateStatus}  checked/> : <input type="checkbox" id="task-done" name="scales" onClick={updateStatus}/> }
        </div>
        <div id="task-belongs-to-username">
            <div id="">{props.taskLoggedInUsername}</div>
        </div>
        <div style={{position : "absolute", right :"300px"}}id="project-tags">
            <button id="btn_tags" style={{backgroundColor: "rgb(255, 50, 0)"}} >Design</button>
            <button id="btn_tags" style={{backgroundColor: "rgb(85, 255, 0)"}} >Develop</button>
        </div>
        {props.tOfUser=="Admin"?  
        <button id="del_button"  name="UniqueKey" value={props.uniqueKey} onClick={deleteTaskBox} type="submit"> <img src="/images/delete.png"/> </button>
        :null}
        {props.tOfUser=="Admin"?  
        <div class="edit_hide">
            <a href="/edit-task" ><button  class="btn"  name="UniqueKey" value={props.uniqueKey} onClick={updateIdOnAPI} > Edit </button></a>
            {props.taskPublish=="1" ? 
            <button class="btn"  name="UniqueKey" value={props.uniqueKey} onClick={taskShowOrHide} > Hide </button>
            : 
            <button class="btn"  name="UniqueKey" value={props.uniqueKey} onClick={taskShowOrHide} > Publish </button>
            }
        </div> : 
        null} 
        
    
        
    </UserTask>
    {promptBox}


    
   </>    

    ); 
}

export default TaskBox; 

// fix taks-bar > p   
const UserTask = styled.div`
    &.p{ 
        color: green;
        padding-left: 50px; 
    }
    &:hover{ 
        transform: scale(1.02);
    }
`






