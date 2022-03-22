import React from 'react'
import "./chatbox_page.css"
import { useState } from 'react'




var array = []; 

function ChatBox() {
    const [slide, setSlide] = useState("0"); 
    const [msgArray, setMsgArray] = useState([]); // Fetch data for this in real. 

    function slideBack(){ 
        setSlide((parseInt(slide) + -100).toString()); 
        console.log(slide); 
    } 
    function slideForward(){ 
        setSlide((parseInt(slide) + 100).toString()); 
        console.log(slide); 

    }


    // MSG function

    function Rmsg(msg){
        return (<div id="receive-msg"> 
            <p > {msg} </p>
        </div>)
    }


    function addSendMsg(){ // TODO: 
        array.push(Smsg("asdfadsf"));
        setMsgArray(array);
    }



    function Smsg(msg){
        return (<div id="send-msg"> 
            <p > {msg} </p>
        </div>)
    }
  return (
    <div id="chatbox">
        <div id="chat-user-icon">
        <div onClick={slideBack} id="slider-back"> <img src="images/back_arrow.png" /> </div>
        <div style={{"width": "95%","overflow": "hidden"}}>
            <div style={{transform: "translateX("+slide+"px)"}} id="chat-users">
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
                <div id="user-icon"> <img src="https://twinfinite.net/wp-content/uploads/2021/12/Big-Bang-Theory.jpeg" /></div>
            </div>
        </div>
        <div onClick={slideForward} id="slider-forward"> <img src="images/forward_arrow.png" /> </div>
    </div>    
    
    <div id="chat-box-with-user">
        <div id="chat-box-user"> 
        <div id="receive-send"> 
            <div id="receive" > 
                <div id="receive-msg"> 
                    <p > Yo whats upYo whats upYo whats upYo whats upYo whats upYo whats up </p>
                </div>
            </div>
            <div id="send" > 
                {msgArray.map(msg=>msg)}
                {Smsg("Yo whats upYo whats upYo whats upYo whats upYo whats upYo whats up")}
                {Smsg("Yo whats upYo whats upYo whats upYo whats upYo whats upYo whats up")}
                {Smsg("Yo whats upYo whats upYo whats upYo whats upYo whats upYo whats up")}
            </div>
        </div>
        <div id="send-button"> 
            <input id="msg" type="text" placeholder="input your message here" /> 
            <button onClick={addSendMsg}> SEND </button>
        </div> 
        </div> 
    </div>

    
    


    
    
    
    
    
    
    
    
    </div>
  )
}

export default ChatBox; 
//TODO: instead of using two seperate thing, try with css left and right and put the msg there }
