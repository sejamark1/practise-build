import styled from "styled-components";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import NavBar from "./NavbarLayout/NavBar";
import Home from "../pages/HomePage/Home";
import TaskBar from "../pages/TaskPage/TaskBar";
import AddTask from "../pages/AddTaskPage/AddTask";
import Login from "../pages/LoginPage/Login";


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
      <Route path="/add-task">
        <AddTask /> 
      </Route>
      </Switch>
    </Router>

    <a href="/add-task">
      <button  id="addIcon"> + </button>
    </a> 
  </MiddleBarLayout>
  );
}

const MiddleBarLayout = styled.div``



export default MiddleBar; 
