import React, {useState, useRef, useEffect} from "react";

function SideBar(props){ 
    const [backenddata, setBackendData] = useState([{}]); 


    useEffect(() => { 
        fetchData();
    }, [])

    const fetchData = async(data) =>{ 
       const response = await fetch("http://localhost:9000/api/user_project_data", { 
           method: "GET", 
           // mode: "no-cors", 
           headers: {
               'Content-type' : "application/json"
           }, 
           body: JSON.stringify() 
       })
       const outcome = await response.json(); 
       setBackendData(outcome); 

       
   }





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

    function returnProject(pName){ 
        return(<p className="side-text-detail p-name"> {pName} </p>);
    }



    return(
        <div id="side-bar"> 
            <p className="side-text-detail logo"> TIMEly </p> 
            {backenddata.map(project=>returnProject(project.projectName))}
            <div style={{"display": display}}ref={loggedInUserButton} id="user-bar">
                <button> <a style={aNormalDecoration}href="/login" >Log out</a></button>
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


export const aNormalDecoration = {"color" : "white", "text-decoration" : "none"}; 

export default SideBar; 
