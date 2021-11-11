import React from "react";
import MiddleBar from "./components/layout/MiddleBar";
import SideBar from "./components/layout/SidebarLayout/SideBar";
import { useState, useEffect } from 'react';

function App(){ 
      

    return(
        <div> 
            <SideBar/> 
            <MiddleBar/> 

        </div>
    ); 
}


export default App; 
