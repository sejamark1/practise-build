import React from "react";
import styled from "styled-components";
import "./navbar_style.css";


function NavBar(props) {
    return (
      <div id="navbar">
      <ExpandImage href=""> <button id="nav_button"><img src="/images/expand.png"/></button> </ExpandImage>
      <a href="/home"> <button id="nav_button">Home</button> </a>
      <a href="/task"> <button id="nav_button">Task</button> </a>
       <a href="/chat-box"> <button id="nav_button">Chat</button> </a>
       <a href="/home"> <button id="nav_button">Contact</button> </a>
       <button onClick={props.changeAdmin} id="nav_button">Admin</button>
       

      </div>
    );
  }
  
const ExpandImage = styled.a`
  button{ 
    display: none
  }
  img{
    height: 20px;
    margin: -4px;
  }
`
export default NavBar; 

// {props.tOfUser == "Admin"? 
// <a href="/home"> <button id="nav_button">Admin</button> </a>
// : ""}