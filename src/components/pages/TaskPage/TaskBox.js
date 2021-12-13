import styled from "styled-components";
import { useState, useEffect } from "react";
import PromptBox from "../../layout/PromptBoxLayout/PromptBox";


function TaskBox(props){ 
    // function handleClick() { 
    //     var allow_to_expand = true; 
    //     var task_bar = document.querySelectorAll("#task-bar"); 
    //     task_bar.forEach(taskBar =>{ 
    //         if(allow_to_expand == true){
    //             taskBar.addEventListener("click", function(){ 
    //                 if(taskBar.classList.contains("barExpand")){ 
    //                     taskBar.classList.remove("barExpand"); 
    //                     taskBar.style.height = "50px"; 
    //                     taskBar.children[1].classList.add("task-detail-cover")


    //                 }else{
    //                     taskBar.style.height = "100%"; 
    //                     taskBar.classList.add("barExpand"); 
    //                     taskBar.children[1].classList.remove("task-detail-cover")
    //                 }


    //             })
    //         }
    //     })

    // }

    //useState 
    

    // Change width of UserTask to 50% when clicked. And Vice versa.  

    

    

    function keyCon(){ 
        console.log(props.uniqueKey); 
    }
    
    //TODO: Use Js effect on these html below. 
    //TODO: add effect on react js. 
    return (
       
    <> 
    
    <UserTask className="" id="task-bar" > 
        <div className="project project-name">{props.projectName}</div>
        <div className={"project task-detail task-detail-cover"}>{props.taskDetail}</div>
        <div className="project task-due">{props.taskDue}</div>
        <div className="dot project task-priority" style={{backgroundColor: "rgb(177, 5, 66)"}}>{props.taskPriority}</div>
        <div className="project task-check">
            <input type="checkbox" id="task-done" name="scales" checked={props.taskChekced}/>
        </div>
        <div id="task-belongs-to-username">
            <div id="">{props.taskLoggedInUsername}</div>
        </div>
        <div id="project-tags">
            <button id="btn_tags" style={{backgroundColor: "rgb(255, 50, 0)"}} >Design</button>
            <button id="btn_tags" style={{backgroundColor: "rgb(85, 255, 0)"}} >Develop</button>
        </div>
        <form id="btn_task_delete" action="/deletetask" method="post">
        <a href="/task/todo"> <button  name="UniqueKey" value={props.uniqueKey} onClick={keyCon} type="submit"> <img type="submit"  class="btn_delete" src="/images/delete.png"/> </button> </a>
        </form>


        
    </UserTask>

    
   </>    

    ); 
}

export default TaskBox; 

// fix taks-bar > p   
const UserTask = styled.div`
    width: 98%;
    height: 50px;
    background: linear-gradient(#474747, #272626,#000000);
    position: absolute;
    margin: 4px;
    left: 1%;
    display: flex; 
    overflow: hidden;  
    position: relative;
    transition: 0.4s;
    border-radius: 5px;
    cursor: pointer;
    &.p{ 
        color: green;
        padding-left: 50px; 
    }
    &:hover{ 
        transform: scale(1.02);
    }
`


