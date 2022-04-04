import React from 'react'
import "./addtask_style.css"

// class= addtask_X


function AddTask() {
    return (
        <div class="disabled" id="add_task">
            <form action="/add-task" method="post" >
                <div class="add_task_side_form"> 
                    <label for="projectName"> Project Name <br />
                        <input name="projectName" type="text" id="addtask_projectName" placeholder="e.g Sputnix"/> <br />
                    </label><br />
                    <label for="taskDue"> Task Due <br />
                        <input name="taskDue" type="text" id="addtask_taskDue" placeholder="e.g 26 November 2029"/> <br />
                    </label><br />
                    <label for="tastPriority"> Task Priority <br />
                        <select name="priority" id="addtask_taskPriority">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </label><br />
                    <label name="taskStatus" class="addtask_taskSatus" for="taskStatus"> Task Status <br />
                        <p style={{"color": "grey"}} > false </p><br />
                    </label><br />
                    <label for="allocatedTo"> Allocated To <br />
                        <input name="allocatedTo" type="text" id="addtask_allocatedTo" placeholder="e.g @graemeusername"/> <br />
                    </label><br />
                    <label for="projectTags"> Tags <br />   
                        <input name="taskTags" type="text" id="addtask_projectDue" placeholder="Web, Research"/>    <br />             
                    </label><br />
                </div>    
                <div class="add_task_middle_form"> 
                    <label for="taskDetail"> Task Detail <br />
                        <textarea name="taskDetail" type="text" id="addtask_taskDetail" placeholder="Detail..."/> <br />
                    </label><br /> 

                    <a href="/task/todo"><input id="btn_add_task_submit" type="submit" value="Add" /></a>

                </div>           
            </form> 

            <div class="disabled" id="add_task">
            <form action="/add-projects" method="post" >

                <div className="add_project_form">
                    <div className="detail_project">
                    { // Project Name OR  Allocated To 
                        props.typeAdd="project" ?                  
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
                props.typeAdd="project" ?   
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
                props.typeAdd="project" ? 
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
                    props.typeAdd="project" ? 
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
                    props.typeAdd="project" ? 

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
                props.typeAdd="project" ? 
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
                props.typeAdd="project" ? 
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
                    <input
                        type="text"
                        id="form_input"
                        name="tstatus"
                        placeholder="Status"
                    />
                    </div>
                </div>}




                    </div>
                        
                { // Project Leader OR  Task Tag 
                props.typeAdd="project" ?      
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
            
        </div>
    )
}

export default AddTask; 

