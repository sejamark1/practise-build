import React, { useEffect } from 'react'
import "./chatbox_page.css"
import { useState } from 'react'





function ChatBox() {
    var array = [Smsg("Graemes test message", "receive-msg")]; 
    const [slide, setSlide] = useState("0"); 
    const [msgArray, setMsgArray] = useState(array); // Fetch data for this in real. 

    function slideBack(){ 
        setSlide((parseInt(slide) + -100).toString()); 
        console.log(slide); 
    } 
    function slideForward(){ 
        setSlide((parseInt(slide) + 100).toString()); 
        console.log(slide); 

    }

    
function addSendMsg(){ // TODO:
    // const newMsgArray = msgArray.filter(msg => {
    //     if(msg.id != deleteID){ 
    //         return true; 
    //     }else{ 
    //         return false
    //     }
    // }); 
    const newMsgArray = [ ...msgArray, Smsg("asdfadsf", "send-msg") ];  
    setMsgArray(newMsgArray);
    console.log(msgArray)

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
                <div id="user-icon"> <img src="https://twinfinite.net/wp-content/uploads/2021/12/Big-Bang-Theory.jpeg" /></div>
                <div id="user-icon"> <img src="https://twinfinite.net/wp-content/uploads/2021/12/Big-Bang-Theory.jpeg" /></div>
                <div id="user-icon"> <img src="https://twinfinite.net/wp-content/uploads/2021/12/Big-Bang-Theory.jpeg" /></div>
                <div id="user-icon"> <img src="https://twinfinite.net/wp-content/uploads/2021/12/Big-Bang-Theory.jpeg" /></div>
                <div id="user-icon"> <img src="https://twinfinite.net/wp-content/uploads/2021/12/Big-Bang-Theory.jpeg" /></div>
                <div id="user-icon"> <img src="https://twinfinite.net/wp-content/uploads/2021/12/Big-Bang-Theory.jpeg" /></div>
                <div id="user-icon"> <img src="https://twinfinite.net/wp-content/uploads/2021/12/Big-Bang-Theory.jpeg" /></div>
                <div id="user-icon"> <img src="https://twinfinite.net/wp-content/uploads/2021/12/Big-Bang-Theory.jpeg" /></div>
                <div id="user-icon"> <img src="https://twinfinite.net/wp-content/uploads/2021/12/Big-Bang-Theory.jpeg" /></div>
                <div id="user-icon"> <img src="https://twinfinite.net/wp-content/uploads/2021/12/Big-Bang-Theory.jpeg" /></div>
                <div id="user-icon"> <img src="https://twinfinite.net/wp-content/uploads/2021/12/Big-Bang-Theory.jpeg" /></div>
                <div id="user-icon"> <img src="https://twinfinite.net/wp-content/uploads/2021/12/Big-Bang-Theory.jpeg" /></div>
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
            {msgArray.map(msg=>console.log(msg))}
            {Smsg("Yo whats upYo whats upYo whats upYo whats upYo whats upYo whats up", "send-msg")}
                {Smsg("Yo whats upYo whats upYo whats upYo whats upYo whats upYo whats up", "receive-msg")}
                {Smsg("Yo whats upYo whats upYo whats upYo whats upYo whats upYo whats up", "send-msg")}
            </div>
        </div>
        <div id="send-button"> 
            <input id="msg-bar" type="text" placeholder="input your message here" /> 
            <button onClick={addSendMsg}> SEND </button>
        </div> 
        </div> 
    </div>

    
    


    
    
    
    
    
    
    
    
    </div>
  )
}

export default ChatBox; 
//TODO: instead of using two seperate thing, try with css left and right and put the msg there }
