import React from "react";
import styled from "styled-components";
import "./navbar_style.css";


function NavBar() {
    return (
      <div id="navbar">
        <button id="nav_button">Home</button>
        <button id="nav_button">Task</button>
        <button id="nav_button">Chat</button>
        <button id="nav_button">Contact</button>
      </div>
    );
  }
  
export default NavBar; 

  