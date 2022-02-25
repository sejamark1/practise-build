import React from 'react'; 
import Project from './Project';
import './homestyle.css'



function Home(){ 
    return(

        <div id="home">
            <Project pName="Nodlehs" due="50" />
            <Project pName="Sputnix" due="40" />
        </div> 


    ); 
}


export default Home; 
