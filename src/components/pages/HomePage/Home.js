import React from 'react'; 
import Project from './Project';
import './homestyle.css'
import {useState} from "react";
import {useEffect} from "react";



function Home(){ 

    const [backendProjectData, setBackEndProjectData] = useState([{}]); 

    useEffect(() => { 
        fetchProjectData();
    }, [])
    const fetchProjectData = async(data)=>{ 
        const response = await fetch("http://localhost:9000/api/user_task_data", { 
            method:"GET", 
            headers: {
                'Content-type' : "application/json"
            }, 
            body: JSON.stringify()
        })
        const outcome = await response.json(); 
        setBackEndProjectData(outcome); 
        console.log(backendProjectData); 
    }



    return(

        <div id="home">
            <Project pName="Nodlehs" due="50" />
            <Project pName="Sputnix" due="40" />
        </div> 


    ); 
}


export default Home; 
