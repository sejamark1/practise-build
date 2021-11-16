import React from 'react'
import TaskBox from './TaskBox';
import { useState, useEffect } from 'react';





// Collect the task 
// put it in to TaskBox Array 
// 

const todoTask = [
    <TaskBox 
    projectName="Nodlehs"
    projectDetail="We need a process that will track the inventory and status of components in the chassis.
              It should accept IPC requests from the various cards, maintain an internal database of what's currently available,
              respond to IPC queries from other components and have a CLI interface so that we can query its contents. We will be
              adding capabilities above and beyond this in the future."
    projectDue="Tomorrow"
    projectPriority="1"
    projectChekced="false"
    projectLoggedInIcon="/images/sheldon.jpg"
    projectLoggedInUsername="sheldcooper93"
    ProjectTag=""    // Make this array
    />,
    <TaskBox 
    projectName="Nodlehs"
    projectDetail="We need a process that will track the inventory and status of components in the chassis.
              It should accept IPC requests from the various cards, maintain an internal database of what's currently available,
              respond to IPC queries from other components and have a CLI interface so that we can query its contents. We will be
              adding capabilities above and beyond this in the future."
    projectDue="Tomorrow"
    projectPriority="1"
    projectChekced="false"
    projectLoggedInIcon="/images/sheldon.jpg"
    projectLoggedInUsername="sheldcooper93"
    ProjectTag=""    // Make this array
    />,
    <TaskBox 
    projectName="Nodlehs"
    projectDetail="We need a process that will track the inventory and status of components in the chassis.
              It should accept IPC requests from the various cards, maintain an internal database of what's currently available,
              respond to IPC queries from other components and have a CLI interface so that we can query its contents. We will be
              adding capabilities above and beyond this in the future."
    projectDue="Tomorrow"
    projectPriority="1"
    projectChekced="true"
    projectLoggedInIcon="/images/sheldon.jpg"
    projectLoggedInUsername="sheldcooper93"
    ProjectTag=""    // Make this array
    />,
    


]







function printTask(condition){

    
    var item = []; 
    todoTask.forEach(todo=>{ 
        if(todo.props.projectChekced===condition){ 
            item.push(todo); 
        }
    }); 

    return item.map(todo=>todo); 
    
}





function AllTaskLists(props) {
  
    const [backenddata, setBackendData] = useState([{}]); 
     useEffect(() => { 
         fetchData();
     }, [])

     const fetchData = async(data) =>{ 
        const response = await fetch("http://localhost:9000/api", { // return promise
            method: "GET", 
            // mode: "no-cors", 
            headers: {
                'Content-type' : "application/json"
            }, 
            body: JSON.stringify()
        })
        const outcome = await response.json(); 
        console.log(outcome.users);
        //console.log(data);
        setBackendData(outcome);

    }
  

    return (
        <div>
        {/* Get data from API  */}
        {typeof backenddata.users === "undefined" ? (
            <p> Loading... </p>
        ): (
            backenddata.users.map((user, i) => (
                <p key={i}>{user} </p>
            ))
        )}
        {printTask(props.projectCondition)}



                               
        </div>
    )
}




export default AllTaskLists;

