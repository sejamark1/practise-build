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
        <TaskBarBoxRow id="task-bar">
                <ProjectName className="project project-name">{props.projectName}</ProjectName>
                <ProjectDetail className={"project project-detail project-detail-cover"}>{props.projectDetail}</ProjectDetail>
                  <ProjectDue className="project project-due">{props.projectDue}</ProjectDue>
                  <ProjectPriority className="dot project project-priority" style={{backgroundColor: "rgb(177, 5, 66)"}}>{props.projectPriority}</ProjectPriority>
                  <ProjectChecker className="project project-detail">
                    <input type="checkbox" id="task-done" name="scales" checked={props.projectChekced}/>
                  </ProjectChecker>      
                <TaskBelongToIcon id="task-belongs-to-user">
                  <img src={props.projectLoggedInIcon} alt="User Image"/>
                </TaskBelongToIcon>
                <TaskBelongTo id="task-belongs-to-username">
                  <div id="">{props.projectLoggedInUsername}</div>  
                </TaskBelongTo>
                <ProjectTag id="project-tags">
                  <button id="btn_tags" style={{backgroundColor: "rgb(255, 50, 0)"}} >Design</button>
                  <button id="btn_tags" style={{backgroundColor: "rgb(85, 255, 0)"}} >Develop</button>
                </ProjectTag>
            </TaskBarBoxRow>
        

        
    ); 
}

export default TaskBox; 

// fix taks-bar > p   
const TaskBarBoxRow = styled.div`
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

const ProjectName = styled.div``
const ProjectDetail = styled.div``
const ProjectDue = styled.div``
const ProjectPriority = styled.div``
const ProjectChecker = styled.div``
const ProjectTag = styled.div``
const TaskBelongToIcon = styled.div``
const TaskBelongTo = styled.div``
