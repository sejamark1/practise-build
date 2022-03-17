import React from 'react'
import "./addtask_style.css"

// class= addtask_X


function AddTask() {
    return (
        <div class="disabled" id="add_task">
            <form action="/add-task" method="post" >
                <div className="add_project_form">
                    <div className="detail_project">
                    <div id="input_cover_all">
                        <p> Project Name</p>
                        <div id="input_cover">
                        <input
                            type="text"
                            id="form_input"
                            name="projectName"
                            placeholder="Project Name"
                        />
                        </div>
                    </div>
            
                    <div id="input_cover_all">
                        <p> Project Leader</p>
                        <div id="input_cover">
                        <input
                            type="text"
                            id="form_input"
                            name="projectName"
                            placeholder="Project Name"
                        />
                        </div>
                    </div>
            
                    <div id="input_cover_all">
                        <p> Project Type</p>
                        <div id="input_cover">
                        <input
                            type="text"
                            id="form_input"
                            name="projectName"
                            placeholder="Project Name"
                        />
                        </div>
                    </div>
            
                    <div id="input_cover_all">
                        <p> Project Detail</p>
                        <div style={{ height: "215px", width: "350px" }} id="input_cover">
                        <textarea
                            style={{ height: "215px", width: "350px", resize: "none" }}
                            id="form_input"
                            name="w3review"
                            rows="4"
                            cols="50"
                        />
                        </div>
                    </div>
                    </div>
            
                    <div className="detail_project">
                    <div id="input_cover_all">
                        <p> Project Start Date</p>
                        <div id="input_cover">
                        <input
                            type="text"
                            id="form_input"
                            name="projectName"
                            placeholder="DD/MM/YYYY"
                        />
                        </div>
                    </div>
            
                    <div id="input_cover_all">
                        <p> Project End Date</p>
                        <div id="input_cover">
                        <input
                            type="text"
                            id="form_input"
                            name="projectName"
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
                            name="projectName"
                            placeholder="£19,202"
                        />
                        </div>
                    </div>
                    </div>
                    <div className="detail_project">
                    <div id="input_cover_all">
                        <p> Team Members</p>
                        <div style={{ height: "250px" }} id="input_cover">
                        <textarea
                            style={{ height: "250px", width: "350px", resize: "none" }}
                            id="form_input"
                            name="w3review"
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
                </div>   
                <a href="/task/todo"><input id="btn_add_task_submit" type="submit" value="Add" /></a>

            </form> 

            
        </div>
    )
}

export default AddTask; 

