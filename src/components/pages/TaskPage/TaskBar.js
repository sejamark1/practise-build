import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import styled from "styled-components";
import AllTaskLists from './AllTaskLists';






function TaskBar() {
    return (

        <div> 

<TaskTopBar />
<TaskBarDetail />

            <Router> 
                <Switch> 
                <Route path="/task/todo"> 
                    <AllTaskLists taskCondition="false" /> 
                </Route>
                <Route path="/task/done"> 
                    <AllTaskLists taskCondition="true" /> 
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
                Tasks
            </MenuButton>
            </a> 
            <a href="/task/done">
            <MenuButton>
                <img src="\images\done.png"/>
                Done
            </MenuButton>
            </a> 
        </div> 
    </div>

    )
}
function TaskBarDetail(){ 
    return(
      <div id="top-bar-detail">
        <h6 className="col-title" style={{marginLeft: "2%"}}>Project Name</h6>
            <h6 className="col-title" style={{marginLeft: "14%"}}>Tasks Detail</h6>
            <h6 className="col-title" style={{marginLeft: "21%"}}>Due</h6>
            <h6 className="col-title filter-priority" style={{marginLeft: "9%"}}>Priority
{/*             <div className="priority_dropdown">
            <button className="priority-number">1</button>
            <button className="priority-number">2</button>
            <button className="priority-number">3</button>
            <button className="priority-number">All</button>
           </div> */}
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
`

export default TaskBar;
