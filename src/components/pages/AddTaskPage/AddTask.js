import React from 'react'
import "./addtask_style.css"

// class= addtask_X


function AddTask(props) { 

  // IMPORTANT: Id id and some attribute are of Task. CSS resued for both AddTask.js and AddProject.js and EditTask.js 

    return (
        <div class="disabled" id="add_task">
        <h1 id="add_title">Add Task</h1>

        <form action="/add-task" method="post">

            <div className="add_project_form">
                <div className="detail_project">
        
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
        

                </div>
        
                <div className="detail_project">

            
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
            </div>

                   
                <div id="input_cover_all">
                <p> Task Status</p>
                <div id="input_cover">

                <select name="tstatus" id="form_input">
                    <option value={"Todo"}>Todo</option> 
                    <option value={"Finished"}>Finished</option> 
                </select>
                </div>
            </div>


                             
                <div id="input_cover_all">
                <p> Task Status</p>
                <div id="input_cover">

                <select name="tPublished" id="form_input">
                    <option value={"Publish"}>Publish</option> 
                    <option style={{"background":"red"}} value={"Hide"}>Hide</option> 
                </select>
                </div>
            </div>


                </div>
                    

            </div>   
            <a className="no_href_property" href="/task/todo"><input id="btn_add_task_submit" type="submit" value="Add" /></a>

        </form> 

        
    </div>
    )
}

export default AddTask; 

