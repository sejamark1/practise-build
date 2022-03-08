import React from 'react'
import TaskBox from './TaskBox';
import { useState, useEffect } from 'react';






//RETURN a TaskBox with relavent data. 
function returnTaskBox(tid, pName, tDetail,tDue, tPriority,tChecked, tLIUser, tTag){ 
    return <TaskBox key={tid} onClick={()=> console.log(tid)}
    uniqueKey={tid}
    projectName={pName}
    taskDetail={tDetail}
    taskDue={tDue}
    taskPriority={tPriority}
    taskChekced={tChecked}
    taskLoggedInUsername={tLIUser}
    taskTag={tTag}  
    />

}




// All the task fetched  pushed here in <TaskBox> Component. 
const todoTask = []; 
var item = [];
// Adds ALL task data to todoTask. CALLED FROM: AllTaskLists-/it fetches data/
function addTodoTask(outcome){
    for(var i = 0; i < outcome.length; i++){ 
        const o = outcome[i]
        todoTask.push(returnTaskBox(o.taskId, o.projectName, o.taskDetail, o.taskDue, o.taskPriority, (o.taskStatus==0 ? "false" : "true"), o.username, o.taskTags))
    }
}

//Based on conditon (projectChecked), it is filter and add to item array. Then <TaskBox> Component is printed. 
function printTask(condition){ 
    console.log(todoTask.length); 
    item = todoTask.filter(todo => todo.props.taskChekced===condition); 
    console.log(item.length); 

    return item.map(todo=>todo); 
}

// DON'T NEED
function displayData(taskCondition, backenddata) { // you can't access the props directly from a funciton, so parse it shall be. 
    if(backenddata.length < 0){ 
        <p>Loading </p>
    }else{ 
        printTask(taskCondition)
        
    }
}


function AllTaskLists(props) {

    
    const [backenddata, setBackendData] = useState([{}]); 

     useEffect(() => { 
         fetchData();
     }, [])

     const fetchData = async(data) =>{ 
        const response = await fetch("http://localhost:9000/api/user_task_data", { // return promise
            method: "GET", 
            // mode: "no-cors", 
            headers: {
                'Content-type' : "application/json"
            }, 
            body: JSON.stringify() // creeat obj of form 
        })
        const outcome = await response.json(); 
        addTodoTask(outcome);
        setBackendData(outcome); // If any changes occur in backEndData, then all related to this will go through a change. 

    }
  

    return (
        <div>  

            {backenddata.length < 0 ? <p>Loading </p> :printTask(props.taskCondition)}
            {props.taskCondition == "false" ? 
            <div id="progress-measure">
                <label style={{color: "white"}} for="Progress">Progress {Math.round(100 - ((item.length/todoTask.length) * 100))}% Done </label>
                <meter id="progress-meter" value={todoTask.length - item.length} min="0" max={todoTask.length}></meter><br/>
            </div> : 
            ""
                    }


        </div>
    )
}




export default AllTaskLists;

// if props.taskconditon  == ture show the progress_measure 
 