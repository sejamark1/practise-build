import React from 'react'
import TaskBox from './TaskBox';
import { useState, useEffect } from 'react';






// Collect the task 
// put it in to TaskBox Array 
// 
function keyCon(){ 
    console.log(this); 
}


function returnTaskBox(tid, pName, tDetail,tDue, tPriority,tChecked, tLIUser, tTag){ 
    return <TaskBox key={tid} onClick={()=> console.log(tid)}
    uniqueKey={tid}
    projectName={pName}
    taskDetail={tDetail}
    taskDue={tDue}
    taskPriority={tPriority}
    taskChekced={tChecked}
    taskLoggedInUsername={tLIUser}
    taskTag={tTag}    // Make this array
    />

}

const todoTask = []


function addTodoTask(outcome){
    // for(var i = 0; i < outcome.length; i++){ 
    //     const o = outcome[i]
    //     todoTask.push(returnTaskBox(o.data[0], o.data[1], o.data[2], o.data[3], o.data[4], o.data[5], o.data[6], o.data[7]))
    // }

    for(var i = 0; i < outcome.length; i++){ 
        const o = outcome[i]
        console.log(o);
        todoTask.push(returnTaskBox(o.taskId, o.projectName, o.taskDetail, o.taskDue, o.taskPriority, (o.taskStatus==0 ? "false" : "true"), o.username, o.taskTags))
        console.log(todoTask);
    }
    
    

}
// Based on the conditon given (for projectChekced in each task ) that task will be printed. 
// It will be printed based on todo/done.
function printTask(condition){ 
    var item = []; 
    // Get the task detail from todoTask and push it to item for it to print later.
    todoTask.forEach(todo=>{ 
        if(todo.props.taskChekced===condition){ 
            item.push(todo); 
        }
    }); 

    // return printed task. 
    return item.map(todo=>todo); 
    
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
            body: JSON.stringify()
        })
        const outcome = await response.json(); 
        addTodoTask(outcome);
        //console.log(outcome[0].data[1]);
        setBackendData(outcome);

    }
  

    return (
        <div>
        {/* Get data from API  */}

        
        {printTask(props.taskCondition)}

        

                               
        </div>
    )
}




export default AllTaskLists;

