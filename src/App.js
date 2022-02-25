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
            <Login />
            <SideBar/> 
            <MiddleBar/> 

           
            
    
        </div>
    ); 
}


export default App; 
