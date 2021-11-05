import React from "react";
import styled from "styled-components";
import "./navbar_style.css";


function NavBar() {
    return (
      <div id="navbar">
       <a href="/home"> <button id="nav_button">Home</button> </a>
       <a href="/task"> <button id="nav_button">Task</button> </a>
       <a href="/home"> <button id="nav_button">Chat</button> </a>
       <a href="/home"> <button id="nav_button">Contact</button> </a>


      </div>
    );
  }
  
export default NavBar; 

  