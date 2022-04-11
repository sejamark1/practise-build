import React, { useEffect } from 'react'
import "./chatbox_page.css"
import { useState } from 'react'
import { fetchDataFromDatabase } from '../../API';





function ChatBox() {
    var array = []; 
    const [slide, setSlide] = useState("0"); 
    const [msgArray, setMsgArray] = useState(array); // Fetch data for this in real. 
    const [message, setMessage] = useState(""); 
    var [currentUser, setCurrentUser] = useState("None"); 

    function slideBack(){ 
        setSlide((parseInt(slide) + -100).toString()); 
        console.log(slide); 
    } 
    function slideForward(){ 
        setSlide((parseInt(slide) + 100).toString()); 
        console.log(slide); 

    }

    
    function addSendMsg(){ // TODO:

        const newMsgArray = [ Smsg(message, "send-msg"), ...msgArray ];  
        if(message != ""){ 
            setMsgArray(newMsgArray);
        }
    
    }

    function addReceiveMsg(){ // TODO:

        const newMsgArray = [ ...msgArray, Smsg(message, "receive-msg") ];  
        setMsgArray(newMsgArray);
    
    }


    

    function Rmsg(msg, sr){ // sr=sendORreceive
        return (<div id={new Date().today}> 
            <p > {msg} </p>
        </div>)
    }

    function Smsg(msg,sr){
        return (<div id={sr}> 
            <p > {msg} </p>
        </div>)
    }

    function getValueOfElement(clickedUser){
        setCurrentUser(clickedUser); 

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

    function returnUsers(){ 
        return (
            usernames.map(user =><div id="user-icon"> <p value={user} on  onClick={() => getValueOfElement(user)}>{user.slice(0,4)}</p> </div> ) 
        )

    }
    console.log(allUsers); 
  return (
    <div id="chatbox">
        <div id="chat-user-icon">
        <div onClick={slideBack} id="slider-back"> <img src="images/back_arrow.png" /> </div>
        <div style={{"width": "95%","overflow": "hidden"}}>
            <div style={{transform: "translateX("+slide+"px)"}} id="chat-users">
            {returnUsers()}


                
            </div>
        </div>
        <div onClick={slideForward} id="slider-forward"> <img src="images/forward_arrow.png" /> </div>
    </div>    
    
    <div id="chat-box-with-user">    
    {currentUser === "None" ? 
    <p style={{"color": "white"}}>You are chatting with: {currentUser} </p>
    : 
    <a href={"username/" + currentUser}> <p style={{"color": "white"}}>You are chatting with: {currentUser} </p> </a> 
    }
        <div id="chat-box-user"> 
        <div id="receive-send"> 
            <div id="send" > 
            {msgArray.map(msg=>msg)}
            </div>
        </div>
        <div id="send-button"> 
            <input onChange={event => setMessage(event.target.value)} id="msg-bar" type="text" placeholder="input your message here" /> 
            <button onClick={addSendMsg}> SEND </button>
            <button onClick={addReceiveMsg}> RECEIVE </button>
        </div> 
        </div> 
    </div>

    
    


    
    
    
    
    
    
    
    
    </div>
  )
}

export default ChatBox; 
//TODO: instead of using two seperate thing, try with css left and right and put the msg there }
