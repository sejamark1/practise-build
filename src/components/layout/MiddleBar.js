import styled from "styled-components";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import NavBar from "./NavbarLayout/NavBar";
import Home from "../pages/HomePage/Home";
import TaskBar from "../pages/TaskPage/TaskBar";
import AddTask from "../pages/AddTaskPage/AddTask";
import Login from "../pages/LoginPage/Login";
import AddButton from "./UsefulComponenet/AddButton";
import ChatBox from "../pages/ChatBoxPage/ChatBox";
import AddProject from "../pages/AddTaskPage/AddProject";
import EditTask from "../pages/AddTaskPage/EditTask";
import { useEffect, useState } from "react";
import fetchProjectData, { fetchDataFromDatabase, fetchProjectDataWithParams } from "../API";
import Users from "../pages/AllUsers/Users";



function MiddleBar(props){ 
  const [editId, setEditId] = useState(-1); 

  function alterEditId(id) {  
    console.log(id)
    setEditId(id) 
  }

  const [taskDataToEdit, setTaskDataToEdit] = useState({}); 
  useEffect(()=>{ 
    if(editId > 0){
      fetchTaskDataToEdit(); 
    }
  }, [editId])



  const fetchTaskDataToEdit = async () =>{ 
    console.log("Fetching edit task data"); 
    const outocme = await fetchProjectDataWithParams("edit-task-data", "GET", editId)
    setTaskDataToEdit(outocme); 
  }

  const [allUsers, setAllUsers] = useState([]);
  let usernames = allUsers.map(m => m.username)
  useEffect(() => { 
      fetchUsers(); 
  }, [])

  
  const fetchUsers = async() => { 
      console.log("fetching users"); 
      const outcome = await fetchDataFromDatabase("get-users-data", "GET"); 
      setAllUsers(outcome); 
  }


  

  
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
        <TaskBar tOfUser={props.tOfUser} funcEditId={alterEditId} /> 
        <AddButton tOfUser={props.tOfUser} direct="/add-task" addWhat="Add Tasks"/> 
      </Route>
      {/*TODO: Change so it works for task and project*/}
      <Route path="/add-project">
        <AddProject tOfUser={props.tOfUser} />
      </Route>
      <Route path="/add-task">
        <AddTask tOfUser={props.tOfUser}/> 
       </Route>
       <Route path="/edit-task">
       <EditTask tOfUser={props.tOfUser} editData={taskDataToEdit[0]}/>
      </Route>
      <Route path="/chat-box"> 
        <ChatBox tOfUser={props.tOfUser} />
      </Route>

      


      {allUsers.map((user) => { 
        console.log(user.username); 
        return (
            <Route path={"/username/"+user.username}> 
              <Users key={user.userId} fname={user.firstName} sname={user.surname} username={user.username} userRank={user.userRank}/>
            </Route>
        )
    })}
      

      </Switch>
    </Router>

  </MiddleBarLayout>
  );
}

const MiddleBarLayout = styled.div``



export default MiddleBar; 
