import React, {useState, useRef} from "react";


function SideBar(props){ 
    const loggedInUserButton = useRef();
    // Toggle between showing Logout and account button based on clicks on userIcon.
    const [display, setDisplay] = useState(""); 
    function ShowHideAccountButtons(){
        if(display=="none"){ 
            setDisplay(""); 
        }else if(display==""){ 
            setDisplay("none"); 
        }

    }
   // Return Side bar with PROJECT DETAIL and USER DETAIL. 
    return(
        <div id="side-bar"> 
            <p className="side-text-detail logo"> TIMEly </p> 
            <p className="side-text-detail p-name"> Nodlehs </p> 
            <p className="side-text-detail p-name"> Sputnix </p> 
            <div style={{"display": display}}ref={loggedInUserButton} id="user-bar">
                <button>Log out</button>
                <button>Account</button>
            </div>
            <div id="bottom-side-bar">
                <div onClick={ShowHideAccountButtons} id="user-image">
                    <img src="/images/sheldon.jpg" alt="User Image"/>
                </div>
            </div>

        </div>

        //{props.children}; 
    );


    
    
}



export default SideBar; 
