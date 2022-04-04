import React from 'react'; 
import Project from './Project';
import './homestyle.css'
import {useState} from "react";
import {useEffect} from "react";



function Home(){ 


    function returnProject(pId, pName, pProgress){
        return (<Project key={pId} uniquePId={pId} pName={pName} due={pProgress} />)
    }

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



    return(
        <div> 
        <p id="page_title"> My Projects </p>
            <div id="home">

            {backenddata.map(project=>returnProject(project.id, project.projectName, "40"))} 
                
            </div> 
        </div>


    ); 
}





export default Home; 
