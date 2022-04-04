import styled from "styled-components";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import NavBar from "./NavbarLayout/NavBar";
import Home from "../pages/HomePage/Home";
import TaskBar from "../pages/TaskPage/TaskBar";
import AddTask from "../pages/AddTaskPage/AddTask";
import Login from "../pages/LoginPage/Login";
import AddButton from "./UsefulComponenet/AddButton";
import ChatBox from "../pages/ChatBoxPage/ChatBox";


function MiddleBar(props){ 
  return(
    <MiddleBarLayout id="middle-bar">
    <NavBar changeAdmin={props.swtichAdmin} tOfUser={props.tOfUser} />

    <Router>
      <Switch> 
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/home">
          <Home tOfUser={props.tOfUser} />
          <AddButton tOfUser={props.tOfUser} direct="/add-project" addWhat="Add Projects"/> 
      </Route>
      <Route path="/task/">
        <TaskBar tOfUser={props.tOfUser} /> 
        <AddButton tOfUser={props.tOfUser} direct="/add-task" addWhat="Add Tasks"/> 
      </Route>
      {/*TODO: Change so it works for task and project*/}
      <Route path="/add-project">
        <AddTask tOfUser={props.tOfUser} typeAdd="projects"/> 
      </Route>
      <Route path="/add-task">
        <AddTask tOfUser={props.tOfUser} typeAdd="task"/> 
       </Route>
      <Route path="/chat-box"> 
        <ChatBox tOfUser={props.tOfUser} />
      </Route>
      </Switch>
    </Router>

  </MiddleBarLayout>
  );
}

const MiddleBarLayout = styled.div``



export default MiddleBar; 
