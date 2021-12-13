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

            
        </div>
    )
}

export default AddTask; 

