import styled from "styled-components";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import NavBar from "./NavbarLayout/NavBar";
import Home from "../pages/HomePage/Home";
import TaskBar from "../pages/TaskPage/TaskBar";
import AddTask from "../pages/AddTaskPage/AddTask";
import Login from "../pages/LoginPage/Login";
import AddButton from "./UsefulComponenet/AddButton";
import ChatBox from "../pages/ChatBoxPage/ChatBox";


function MiddleBar(){ 
  return(
    <MiddleBarLayout id="middle-bar">
    <NavBar />

    <Router>
      <Switch> 

      <Route path="/home">
          <Home />
          <AddButton direct="/add-task" addWhat="Add Projects"/> 
      </Route>
      <Route path="/task/">
        <TaskBar /> 
        <AddButton direct="/add-task" addWhat="Add Tasks"/> 
      </Route>
      {/*TODO: Change so it works for task and project*/}
      <Route path="/add-task">
        <AddTask /> 
      </Route>
      <Route path="/chat-box"> 
        <ChatBox />
      </Route>
      </Switch>
    </Router>

  </MiddleBarLayout>
  );
}

const MiddleBarLayout = styled.div``



export default MiddleBar; 
