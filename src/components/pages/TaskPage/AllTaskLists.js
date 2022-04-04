import React from 'react'
import TaskBox from './TaskBox';
import { useState, useEffect } from 'react';




//COLLECTION of all TaskBoxes aka TaskBox.js 

//RETURN a TaskBox with relavent data. 
function returnTaskBox(tOfUser, tid, pName, tDetail,tDue, tPriority,tChecked, tLIUser, tTag, tPublish){ 
    return <TaskBox tOfUser={tOfUser} key={tid} onClick={()=> console.log(tid)}
    uniqueKey={tid}
    projectName={pName}
    taskDetail={tDetail}
    taskDue={tDue}
    taskPriority={tPriority}
    taskChekced={tChecked}
    taskLoggedInUsername={tLIUser}
    taskTag={tTag}  
    taskPublish={tPublish}
    />

}




// All the task fetched  pushed here in <TaskBox> Component. 
const todoTask = []; 
var item = [];
// Adds ALL task data to todoTask. CALLED FROM: AllTaskLists-/it fetches data/
function addTodoTask(outcome, tOfUser){
    for(var i = 0; i < outcome.length; i++){ 
        const o = outcome[i]
        todoTask.push(returnTaskBox(tOfUser, o.taskId, o.projectName, o.taskDetail, o.taskDue, o.taskPriority, (o.taskStatus==0 ? "false" : "true"), o.username, o.taskTags, o.published.toString()))
    }
}

//Based on conditon (projectChecked), it is filter and add to item array. Then <TaskBox> Component is printed. 
// NOTE: 0 mean task is not published, 1 otherwise. 
function printTask(condition, priority="All", hidden="1"){ 
    let filterByPublish = (todo) => todo.props.taskPublish===hidden
    let filterByCondition = (todo) => todo.props.taskChekced===condition
    let filterByPriority = (todo) => priority==="All" ? todo.props.taskPriority : todo.props.taskPriority===priority; 
    // If going to do show lastest task by date then sort the array out before mapping based on date. 
    if(hidden==="0"){
        item = todoTask.filter(todo => (((filterByPriority(todo) && filterByPublish(todo))))); 

    }else{ 
        item = todoTask.filter(todo => ((filterByCondition(todo)) && (filterByPriority(todo) && filterByPublish(todo) ))); 
    }
    //item = todoTask.filter(todo => ((todo.props.taskChekced===condition) && (todo.props.taskPriority===priority))); 
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

    console.log("From AllTaskList "+ props.priority);
    const [backenddata, setBackendData] = useState([{}]); 

     useEffect(() => { 
         fetchData();
     }, [])

     const fetchData = async(data) =>{ 
        const response = await fetch("http://localhost:9000/api/user_task_data", { 
            method: "GET", 
            // mode: "no-cors", 
            headers: {
                'Content-type' : "application/json"
            }, 
            body: JSON.stringify() 
        })
        const outcome = await response.json(); 
        addTodoTask(outcome, props.tOfUser);
        setBackendData(outcome); 
        console.log("from alltasklist");
        console.log( outcome[0].published); 

    }
  

    return (
        <div>  

            {backenddata.length < 0 ? <p>Loading </p> :printTask(props.taskCondition, props.priority, props.hidden)}
            {(item.length) > 0  ?  "" : <h1 className='no-task-to-show'>No task to show...</h1>}
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

// {(todoTask.length - item.length) <= 0  ? "": <h1 className='no-task-to-show'>No task to show...</h1>\\}




export default AllTaskLists;

// if props.taskconditon  == ture show the progress_measure 
 