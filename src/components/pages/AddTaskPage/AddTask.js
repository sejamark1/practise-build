import React from 'react'
import "./addtask_style.css"

// class= addtask_X


function AddTask(props) { // IMPORTANT: Reusable for both ADDING PROJECT & TASK

    console.log("From AddTask.js " + (props.typeAdd));  
    var sendAction = "/add-task"; 
    props.typeAdd=="projects" ? sendAction = "/add-projects" : sendAction = "/add-task";

    return (
        <div class="disabled" id="add_task">

        
        <form action={sendAction} method="post">

            <div className="add_project_form">
                <div className="detail_project">
                    { // Project Name OR  Allocated To 
                        props.typeAdd=="project" ?  "": 
                        
                            <div id="input_cover_all">
                            <p> Project Name</p>
                            <div id="input_cover">
                            <input
                                type="text"
                                id="form_input"
                                name="projectName"
                                placeholder="ProjectName"
                            />
                            </div>
                        </div> 
                    }
                { // Project Name OR  Allocated To 
                    props.typeAdd=="project" ?                  
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
                </div> : 
            
                <div id="input_cover_all">
                <p> Allocated To</p>
                <div id="input_cover">
                <input
                    type="text"
                    id="form_input"
                    name="allocatedTo"
                    placeholder="Allocated To"
                />
                </div>
            </div> 
        }

        
        { // Project Leader OR  Task Tag 
            props.typeAdd=="project" ?   
                <div id="input_cover_all">
                    <p> Project Leader</p>
                    <div id="input_cover">
                    <input
                        type="text"
                        id="form_input"
                        name="pleader"
                        placeholder="Project Name"
                    />
                    </div>
                </div>
        :
                <div id="input_cover_all">
                <p> Task Tag</p>
                <div id="input_cover">
                <input
                    type="text"
                    id="form_input"
                    name="taskTag"
                    placeholder="Task Tags"
                />
                </div>
            </div>
        }

        { // Project Leader OR  Task Tag 
            props.typeAdd=="project" ? 
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
                : 
            <div> </div>}
        
            { // Project Leader OR  Task Tag 
                props.typeAdd=="project" ? 
                <div id="input_cover_all">
                    <p> Project Detail</p>
                    <div style={{ height: "215px", width: "350px" }} id="input_cover">
                    <textarea
                        style={{ height: "215px", width: "350px", resize: "none" }}
                        id="form_input"
                        name="pdetail"
                        rows="4"
                        cols="50"
                    />
                    </div>
                </div>
                :
                <div id="input_cover_all">
                <p> Task Detail</p>
                <div style={{ height: "215px", width: "350px" }} id="input_cover">
                <textarea
                    style={{ height: "215px", width: "350px", resize: "none" }}
                    id="form_input"
                    name="taskDetail"
                    rows="4"
                    cols="50"
                />
                </div>
            </div>
        }

                </div>
        
                <div className="detail_project">
              { // Project Leader OR  Task Tag 
                props.typeAdd=="project" ? 

                <div id="input_cover_all">
                    <p> Start Date</p>
                    <div id="input_cover">
                    <input
                        type="text"
                        id="form_input"
                        name="pstartDate"
                        placeholder="DD/MM/YYYY"
                    />
                    </div>
                </div>
        :
            
                <div id="input_cover_all">
                <p> Task Due Date</p>
                <div id="input_cover">
                <input
                    type="text"
                    id="form_input"
                    name="tduedate"
                    placeholder="DD/MM/YYYY"
                />
                </div>
            </div>
        }

            { // Project Leader OR  Task Tag 
            props.typeAdd=="project" ? 
                <div id="input_cover_all">
                    <p> End Date</p>
                    <div id="input_cover">
                    <input
                        type="text"
                        id="form_input"
                        name="pEndDate"
                        placeholder="DD/MM/YYYY"
                    />
                    </div>
                </div>
                :
                <div id="input_cover_all">
                <p> Task Priority </p>
                <div id="input_cover">
                <input
                    type="text"
                    id="form_input"
                    name="tpriority"
                    placeholder="1,2,3"
                />
                </div>
            </div>}

            { // Project Leader OR  Task Tag 
            props.typeAdd=="project" ? 
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
                :                    
                <div id="input_cover_all">
                <p> Task Status</p>
                <div id="input_cover">

                <select name="tstatus" id="form_input">
                    <option value={"Todo"}>Todo</option> 
                    <option value={"Finished"}>Finished</option> 
                </select>
                </div>
            </div>}


            { // Project Leader OR  Task Tag 
                props.typeAdd=="project" ? null
                :                    
                <div id="input_cover_all">
                <p> Task Status</p>
                <div id="input_cover">

                <select name="tPublished" id="form_input">
                    <option value={"Publish"}>Publish</option> 
                    <option style={{"background":"red"}} value={"Hide"}>Hide</option> 
                </select>
                </div>
            </div>}


                </div>
                    
            { // Project Leader OR  Task Tag 
            props.typeAdd=="project" ?      
                <div className="detail_project">
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
                :
            <div></div>}

            </div>   
            <a className="no_href_property" href="/task/todo"><input id="btn_add_task_submit" type="submit" value="Add" /></a>

        </form> 

        
    </div>
    )
}

export default AddTask; 

