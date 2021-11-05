import styled from "styled-components";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import NavBar from "./NavbarLayout/NavBar";
import Home from "../pages/HomePage/Home";
import TaskBar from "../pages/TaskPage/TaskBar";

function MiddleBar(){ 
  return(
     <MiddleBarLayout id="middle-bar">
     <NavBar />







  <Router>
    <Switch> 
    <Route path="/home">
        <Home />
      </Route>
      <Route path="/task/">
        <TaskBar /> 
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



export default MiddleBar; 
