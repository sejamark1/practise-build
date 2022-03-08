import React from "react";
import MiddleBar from "./components/layout/MiddleBar";
import SideBar from "./components/layout/SidebarLayout/SideBar";
import { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import Login from "./components/pages/LoginPage/Login";

// USEFUL: 
///412: Mapping data to components. 



function App(){ 
      

    return(
        <div> 
        <Router> 
            <Switch> 
                <Route path="/login"> 
                    <Login /> 
                </Route>
                <Route path="/"> 
                    <SideBar/> 
                    <MiddleBar/> 
                </Route>
                
            </Switch>
        </Router>

        


           
            
    
        </div>
    ); 
}


export default App; 
