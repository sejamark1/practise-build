import React from 'react'
import { fetchDataFromDatabase } from '../../API';
import { useEffect, useState } from 'react'
import { currentUser } from '../../../App';
import { returnHTMLOptionsSelected } from '../../RefactorFunction';

function AddProject() {


    const [teamLeaders, setTeamLeaders] = useState([{}]); 
    let teamLeaderArrays = teamLeaders.map(user => user.username)
    useEffect(() => { 
        fetchProjectLeaders(); 

    }, [])


    

    const fetchProjectLeaders = async() => { 
        console.log("fetching project leaders"); 
        const outcome = await fetchDataFromDatabase("teamleader_data", "GET"); 
        setTeamLeaders(outcome); 
    }


    

  return (
    <div class="disabled" id="add_task">
    <h1 id="add_title">Add Project</h1>
    <form action="/add-projects" method="post">
        <div className="add_project_form">
            <div className="detail_project">                
                <div id="input_cover_all">
                <p> Project Name</p>
                <div id="input_cover">
                <input
                    type="text"
                    id="form_input"
                    name="pname"
                    placeholder="Project Name"
                />
                </div>
            </div>
  
            <div id="input_cover_all">
                <p> Project Leader</p>
                <div id="input_cover">
                <select name="pleader" id="form_input">
                    {returnHTMLOptionsSelected(teamLeaderArrays, currentUser)}
                </select>

                </div>
            </div>
   


            <div id="input_cover_all">
                <p> Project Type</p>
                <div id="input_cover">
                <input
                    type="text"
                    id="form_input"
                    name="ptype"
                    placeholder="Project Name"
                />
                </div>
            </div>
            
    

            <div id="input_cover_all">
                <p> Project Detail</p>
                <div style={{ height: "215px", width: "98%" }} id="input_cover">
                <textarea
                    style={{ height: "215px", width: "100%", resize: "none" }}
                    id="form_input"
                    name="pdetail"
                    rows="4"
                    cols="50"
                />
                </div>
            </div>
            </div>
            </div>
            <div className="detail_project">


            <div id="input_cover_all">
                <p> Start Date</p>
                <div id="input_cover">
                <input
                    type="DATE"
                    id="form_input"
                    name="pstartDate"
                    placeholder="DD/MM/YYYY"
                />
                </div>
            </div>
   


            <div id="input_cover_all">
                <p> End Date</p>
                <div id="input_cover">
                <input
                    type="DATE"
                    id="form_input"
                    name="pEndDate"
                    placeholder="DD/MM/YYYY"
                />
                </div>
            </div>
           

   
            <div id="input_cover_all">
                <p> Project Budget</p>
                <div id="input_cover">
                <input
                    type="text"
                    id="form_input"
                    name="pbudget"
                    placeholder="£19,202"
                />
                </div>
            </div>
           


  
                
    
            <div id="input_cover_all">
                <p> Team Members</p>
                <div style={{ height: "250px" }} id="input_cover">
                <textarea
                    style={{ height: "250px", width: "100%", resize: "none" }}
                    id="form_input"
                    name="teammembers"
                    rows="4"
                    cols="50"
                />
                </div>
                <p id="p_warning">
                * NOTE: if team member username entered wrongly, unless added,
                they will not be added to the team.{" "}
                </p>
            </div>


        </div>   
        <a className="no_href_property" href="/task/todo"><input id="btn_add_task_submit" type="submit" value="Add Project" /></a>

    </form> 

    
</div>
  )
}

export default AddProject