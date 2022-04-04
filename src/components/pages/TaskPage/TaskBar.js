import React, { useState } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import styled from "styled-components";
import AllTaskLists from './AllTaskLists';




function TaskBar(props) {
    console.log(props.tOfUser);
    const [showFilter, setShowFilter] = useState("hideFilter"); 
    const [newPriority, setNewPriority] = useState("All")

    function showFilterUpdate() {
        showFilter == "hideFilter" ? setShowFilter("priority_dropdown") : setShowFilter("hideFilter"); 
    
    }



    return (

        <div> 

<TaskTopBar />
    <div  onClick={showFilterUpdate} id="top-bar-detail">
        <h6 className="col-title" style={{marginLeft: "2%"}}>Project Name</h6>
        <h6 className="col-title" style={{marginLeft: "14%"}}>Tasks Detail</h6>
        <h6 className="col-title filter-priority" style={{marginLeft: "21%"}}>Due
        <div className={showFilter}>
            <button onClick={() => setNewPriority("1")} className="priority-number">Latest</button>
            <button onClick={() => setNewPriority("2")} className="priority-number">Default</button>
        </div> 
        </h6>
        <h6 className="col-title filter-priority" style={{marginLeft: "9%"}}>Priority
            <div className={showFilter}>
                <button onClick={() => setNewPriority("1")} className="priority-number">1</button>
                <button onClick={() => setNewPriority("2")} className="priority-number">2</button>
                <button onClick={() => setNewPriority("3")} className="priority-number">3</button>
                <button onClick={() => setNewPriority("All")} className="priority-number">All</button>
            </div> 
        </h6>
        <h6 className="col-title" style={{marginLeft: "11%"}}>Status</h6>
        <h6 className="col-title" style={{marginLeft: "14%"}}>Allocated</h6>
        <h6 className="col-title" style={{marginLeft: "4%"}}>Tags</h6>
    </div>

            <Router> 
                <Switch> 
                <Route path="/task/todo"> 
                    <AllTaskLists tOfUser={props.tOfUser} taskCondition="false" priority= {newPriority} /> 
                </Route>
                <Route path="/task/done"> 
                    <AllTaskLists tOfUser={props.tOfUser} taskCondition="true" priority={newPriority} /> 
                </Route>
                <Route path="/task/hidden"> 
                    <AllTaskLists tOfUser={props.tOfUser} taskCondition="false" priority={newPriority} hidden={"0"}/> 
                </Route>
                </Switch>
            </Router>
            

            
        </div>


        

    )
}



function TaskTopBar(){ 
    
    return(
    <div id="top-bar">
        <div>
            <a href="/task/todo">
            <MenuButton>
                <img src="\images\todotask.png"/>
                Todo
            </MenuButton>
            </a> 
            <a href="/task/done">
            <MenuButton>
                <img src="\images\done.png"/>
                Done
            </MenuButton>
            </a> 
            <a href="/task/hidden">
            <MenuButton style ={{width: "130px"}}> 
                <img src="\images\done.png"/>
                Unpubished
                </MenuButton>
            </a> 
        </div> 
    </div>

    )
}






// whatever pressed on TaskBar.js at className=Priority-number into AllTaskList.js 


function TaskBarDetail(){ 
    const [showFilter, setShowFilter] = useState("hideFilter"); 
    const [newPriority, setNewPriority] = useState("All")

    function showFilterUpdate() {
        showFilter == "hideFilter" ? setShowFilter("priority_dropdown") : setShowFilter("hideFilter"); 
    
    }

    

    return(
    <div  onClick={showFilterUpdate} id="top-bar-detail">
        <h6 className="col-title" style={{marginLeft: "2%"}}>Project Name</h6>
            <h6 className="col-title" style={{marginLeft: "14%"}}>Tasks Detail</h6>
            <h6 className="col-title" style={{marginLeft: "21%"}}>Due</h6>
            <h6 className="col-title filter-priority" style={{marginLeft: "9%"}}>Priority
                <div className={showFilter}>
                    <button onClick={() => setNewPriority("1")} value={"1"} className="priority-number">1</button>
                    <button onClick={() => setNewPriority("2")} className="priority-number">2</button>
                    <button onClick={() => setNewPriority("3")} className="priority-number">3</button>
                    <button onClick={() => setNewPriority("All")} className="priority-number">All</button>
                </div> 
            </h6>
            <h6 className="col-title" style={{marginLeft: "11%"}}>Status</h6>
            <h6 className="col-title" style={{marginLeft: "14%"}}>Allocated</h6>
            <h6 className="col-title" style={{marginLeft: "4%"}}>Tags</h6>
    </div>

    )
}





const MenuButton = styled.button`
  color: white;
  background: #4a0078;
  height: 50px;
  width: 100px;
  outline: none;
  border: none;
  border-radius: 5px;
  margin: 5px 0 0 10px;
  cursor: pointer;
  img { 
    height: 20px;
    position: absolute;
    margin-left: -26px;
    margin-top: -1px;
    color: white;
  }

  &:hover{ 
      background: #400068;
  }

  
`

export default TaskBar;
