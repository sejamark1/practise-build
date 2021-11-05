import styled from "styled-components";
import TaskBox from "../pages/TaskBox";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import NavBar from "./NavbarLayout/NavBar";

function MiddleBar(){ 
  return(
     <MiddleBarLayout id="middle-bar">
      <NavBar />

          <div id="top-bar">
            <div>
            <a href="/todo">
              <MenuButton>Tasks</MenuButton>
            </a> 
            <a href="/done">
              <MenuButton>Done</MenuButton>
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

      <TaskBox 
        projectName="Nodlehs"
        projectDetail="We need a process that will track the inventory and status of components in the chassis.
                  It should accept IPC requests from the various cards, maintain an internal database of what's currently available,
                  respond to IPC queries from other components and have a CLI interface so that we can query its contents. We will be
                  adding capabilities above and beyond this in the future."
        projectDue="Tomorrow"
        projectPriority="1"
        projectChekced="true"
        projectLoggedInIcon="./images/sheldon.jpg"
        projectLoggedInUsername="sheldcooper93"
        ProjectTag=""    // Make this array
        />











      </Route>
    </Switch>
  </Router>

      <div id="progress-measure">
        <label style={{color: "white"}} for="Progress">Progress 17%</label>
        <meter id="progress-meter" value="1" min="0" max="6"></meter><br/>
      </div>
   








  
    </MiddleBarLayout>
  );
}

const MiddleBarLayout = styled.div``

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
`


export default MiddleBar; 
