import styled from "styled-components";
function TaskBox(props){ 
    return (
        <div id="task-bar">
                <div className="project project-name">{props.projectName}</div>
                <div className="project project-detail project-detail-cover">We need a process that will track the inventory and status of components in the chassis.
                  It should accept IPC requests from the various cards, maintain an internal database of what's currently available,
                  respond to IPC queries from other components and have a CLI interface so that we can query its contents. We will be
                  adding capabilities above and beyond this in the future.
    
                  </div>
                  <div className="project project-due">Tomorrow</div>
                  <div className="dot project project-priority" style={{backgroundColor: "rgb(177, 5, 66)"}}>1</div>
                  <div className="project project-detail">
                    <input type="checkbox" id="task-done" name="scales" checked=""/>
                </div>      
                <div id="task-belongs-to-user">
                  <img src="./images/sheldon.jpg"alt="User Image"/>
                </div>
                <div id="task-belongs-to-username">
                  <div id="">sheldcooper93</div>  
                </div>
                <div id="project-tags">
                  <button id="btn_tags" style={{backgroundColor: "rgb(255, 50, 0)"}} >Design</button>
                  <button id="btn_tags" style={{backgroundColor: "rgb(85, 255, 0)"}} >Develop</button>
                </div>
            </div>
        

        
    ); 
}

export default TaskBox; 

// fix taks-bar > p   
const TaskBarBox = styled.div`
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
`