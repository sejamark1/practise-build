import styled from "styled-components";
import TaskBox from "../pages/TaskBox";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
function MiddleBar(){ 
  return(
     <div id="middle-bar">
          <div id="top-bar">
            <div>
            <a href="/todo">
              <Button>Tasks</Button>
            </a> 
            <a href="/done">
              <Button>Done</Button>
            </a> 
            </div>




          </div>

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



  <Router>
    <Switch> 
      <Route path="/todo">
      <TaskBox projectName="Nodlehs"/>
      <TaskBox projectName="Nodlehs"/>
      </Route>
    </Switch>
  </Router>

      <div id="progress-measure">
        <label style={{color: "white"}} for="Progress">Progress 17%</label>
        <meter id="progress-meter" value="1" min="0" max="6"></meter><br/>
      </div>
   








  
    </div>
  );
}


const Button = styled.button`
  color: white;
  background: #4a0078;
  height: 50px;
  width: 100px;
  outline: none;
  border: none;
  border-radius: 5px;
  margin: 5px 0 0 10px;
  cursor: pointer;
`


export default MiddleBar; 
