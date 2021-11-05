import React, {useState, useRef} from "react";


function SideBar(props){ 
    const loggedInUserButton = useRef();
    function ShowHideAccountButtons(e){

        
    }
    
    return(
        <div id="side-bar"> 
            <p className="side-text-detail logo"> TIMEly </p> 
            <p className="side-text-detail p-name"> Nodlehs </p> 
            <p className="side-text-detail p-name"> Sputnix </p> 
            <div ref={loggedInUserButton} id="user-bar">
                <button>Log out</button>
                <button>Account</button>
            </div>



            <div id="bottom-side-bar">
                <div onClick={ShowHideAccountButtons} id="user-image">
                    <img src="./images/sheldon.jpg" alt="User Image"/>
                </div>
            </div>

        </div>

        //{props.children}; 

        


    );


    
    
}



export default SideBar; 
