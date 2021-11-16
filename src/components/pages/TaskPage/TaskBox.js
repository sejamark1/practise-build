import styled from "styled-components";
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
    //                     taskBar.children[1].classList.add("project-detail-cover")


    //                 }else{
    //                     taskBar.style.height = "100%"; 
    //                     taskBar.classList.add("barExpand"); 
    //                     taskBar.children[1].classList.remove("project-detail-cover")
    //                 }


    //             })
    //         }
    //     })

    // }

    //useState 
    




    
    return (
       
    <> 
    
    <UserTask id="task-bar old">
        <div className="project project-name">{props.projectName}</div>
        <div className={"project project-detail project-detail-cover"}>{props.projectDetail}</div>
        <div className="project project-due">{props.projectDue}</div>
        <div className="dot project project-priority" style={{backgroundColor: "rgb(177, 5, 66)"}}>{props.projectPriority}</div>
        <div className="project project-detail">
            <input type="checkbox" id="task-done" name="scales" checked={props.projectChekced}/>
        </div>
        <div id="task-belongs-to-user">
            <img src={props.projectLoggedInIcon} alt="User Image"/>
        </div>
        <div id="task-belongs-to-username">
            <div id="">{props.projectLoggedInUsername}</div>
        </div>
        <div id="project-tags">
            <button id="btn_tags" style={{backgroundColor: "rgb(255, 50, 0)"}} >Design</button>
            <button id="btn_tags" style={{backgroundColor: "rgb(85, 255, 0)"}} >Develop</button>
        </div>
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
`


