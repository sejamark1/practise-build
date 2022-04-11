import React from 'react'
import "./user_style.css"

// 0 == Team Member, 1 == Admin

function Users(props) {
  return (
    <div>
      <div  id="user-icon" style={{"margin-top" : "10px", "margin" : "0 auto", }}> 
        <p style={{"color" : "white"}}value={props.username}>{props.username.slice(0,4)}</p> 
      </div>

      <div id="userDetail">
      <p style={userdetail}> Username: {props.username}</p>
      <p style={userdetail}> First name: {props.fname}</p>
      <p style={userdetail}> Surname: {props.sname}</p>
      <p style={userdetail}> User Rank: {props.userRank === 1 ? "Team Leader": "Team Member"}</p>

      </div>


    
    
    
    
    
    
    </div>
  )
}


let userdetail = {"font-size" : "10px", "color" : "white",     "background": "#9b3838", "padding": "10px", "margin" : "10px"}; 

export default Users