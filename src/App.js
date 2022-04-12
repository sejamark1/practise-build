import React, { useRef } from "react";
import MiddleBar from "./components/layout/MiddleBar";
import SideBar from "./components/layout/SidebarLayout/SideBar";
import { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import Login from "./components/pages/LoginPage/Login";

// USEFUL: 
///412: Mapping data to components. 


var typeOfUser = "Admin"; 
export var currentUser = "sheldoncooper20"; 

function App(){ 


    


    
    function changeType(){ 
        typeOfUser=="Admin" ? typeOfUser="User" : typeOfUser="Admin"
        console.log(typeOfUser);
    }
      

    return(
        <div> 
        <Router> 
            <Switch> 
                <Route path="/login"> 
                    <Login tOfUser={typeOfUser}/> 
                </Route>
                <Route path="/"> 
                    <SideBar tOfUser={typeOfUser}/> 
                    <MiddleBar swtichAdmin={changeType} tOfUser={typeOfUser}/> 
                </Route>
                
            </Switch>
        </Router>

        


           
            
    
        </div>
    ); 
}
export function returnTypeOfUser(){ 
    return typeOfUser; 
}


export default App; 
