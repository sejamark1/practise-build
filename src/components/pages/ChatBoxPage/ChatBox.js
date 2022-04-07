import React, { useEffect } from 'react'
import "./chatbox_page.css"
import { useState } from 'react'





function ChatBox() {
    var array = []; 
    const [slide, setSlide] = useState("0"); 
    const [msgArray, setMsgArray] = useState(array); // Fetch data for this in real. 
    const [message, setMessage] = useState(""); 
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

    // useEffect(()=>{ 
    //     console.log("x"); 
    // }, [msgArray])

    // MSG function

    function Rmsg(msg, sr){ // sr=sendORreceive
        return (<div id={new Date().today}> 
            <p > {msg} </p>
        </div>)
    }


    // function addSendMsg(){ // TODO: 
    //     msgArray.push(Smsg("{new Date().today}", "send-msg"));
    //     setMsgArray(msgArray);
    //     console.log(msgArray)
    // }



    function Smsg(msg,sr){
        return (<div id={sr}> 
            <p > {msg} </p>
        </div>)
    }
  return (
    <div id="chatbox">
        <div id="chat-user-icon">
        <div onClick={slideBack} id="slider-back"> <img src="images/back_arrow.png" /> </div>
        <div style={{"width": "95%","overflow": "hidden"}}>
            <div style={{transform: "translateX("+slide+"px)"}} id="chat-users">
                <div id="user-icon"> <img src="https://twinfinite.net/wp-content/uploads/2021/12/Big-Bang-Theory.jpeg" /></div> // instead of image, fetch the user and use the first letter of their username. OR create component of users.
                <div id="user-icon"> <img src="https://twinfinite.net/wp-content/uploads/2021/12/Big-Bang-Theory.jpeg" /></div>


                
            </div>
        </div>
        <div onClick={slideForward} id="slider-forward"> <img src="images/forward_arrow.png" /> </div>
    </div>    
    
    <div id="chat-box-with-user">
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
