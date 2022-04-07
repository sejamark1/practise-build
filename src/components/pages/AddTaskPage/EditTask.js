import React, { useState, useEffect } from 'react'
import fetchProjectData, { fetchDataFromDatabase, fetchProjectDataWithParams } from '../../API';
import "./addtask_style.css"







function EditTask(props) { 


    const [taskDataToEdit, setTaskDataToEdit] = useState(null); 
    useEffect(()=>{ 
        fetchTaskDataToEdit(); 
    }, [])
  
  
  
    const fetchTaskDataToEdit = async () =>{ 
      console.log("Fetching edit task data"); 
      const outcome = await fetchDataFromDatabase("edit-task-data", "GET")
      setTaskDataToEdit(outcome); 
      console.log(outcome);
    }

    console.log(taskDataToEdit); 

  
  // IMPORTANT: Id id and some attribute are of Task. CSS resued for both AddTask.js and AddProject.js and EditTask.js 

  function returnSelected(){
    if(taskDataToEdit != null){ 
        if(taskDataToEdit[0].published == 1){ 
            return (<select name="tPublished" id="form_input">
                <option selected value={"Publish"}>Publish</option> 
                <option style={{"background":"red"}} value={"Hide"}>Hide</option> 
            </select>
            )
        }else if(taskDataToEdit[0].published == 0){ 
            return (<select name="tPublished" id="form_input">
            <option  value={"Publish"}>Publish</option> 
            <option selected style={{"background":"red"}} value={"Hide"}>Hide</option> 
            </select>
        )
        }
    }
    return (
        <select name="tPublished" id="form_input">
            <option value={"Publish"}>Publish</option> 
            <option style={{"background":"red"}} value={"Hide"}>Hide</option> 
        </select>
    )

}

function returnStatus(){
    if(taskDataToEdit != null){ 
        if(taskDataToEdit[0].taskStatus == 1){ 
            return (                <select name="tstatus" id="form_input">
                <option value={"Todo"}>Todo</option> 
                <option selected value={"Finished"}>Finished</option> 
            </select>
            )
        }else if(taskDataToEdit[0].published == 0){ 
            return (                <select name="tstatus" id="form_input">
                <option selected value={"Todo"}>Todo</option> 
                <option value={"Finished"}>Finished</option> 
            </select>
        )
        }
    }
    return (
        <select name="tstatus" id="form_input">
            <option value={"Todo"}>Todo</option> 
            <option value={"Finished"}>Finished</option> 
        </select>
    )

}

// find a way to get the key there. 

  
    return (
        <div class="disabled" id="add_task">

        
        <h1 id="add_title">Edit Task</h1>

        <form action="/update-task-details" method="post">
            <div className="add_project_form">
                <div className="detail_project">
                    
                <div style={{display: "none"}} id="input_cover_all">
                    <p> Task ID </p>
                    <div id="input_cover">
                    {taskDataToEdit == null ? 
                    <input type="text" id="form_input" name="tId" placeholder="ProjectName" />
                    : 
                    <input type="text" id="form_input" name="tId" placeholder="ProjectName" 
                    value={taskDataToEdit[0].taskId} />
                    }

                    </div>
                </div> 
                    <div id="input_cover_all">
                        <p> Project Name</p>
                        <div id="input_cover">
                        {taskDataToEdit == null ? 
                        <input type="text" id="form_input" name="projectName" placeholder="ProjectName" />
                        : 
                        <input type="text" id="form_input" name="projectName" placeholder="ProjectName" 
                        value={taskDataToEdit[0].projectName} />
                        }

                        </div>
                    </div> 
                    
           
            
                <div id="input_cover_all">
                <p> Allocated To</p>
                <div id="input_cover">
                {taskDataToEdit == null ? 
                <input 
                    type="text"
                    id="form_input"
                    name="allocatedTo"
                    placeholder="Allocated To"
                /> : 
                
                <input 
                    type="text"
                    id="form_input"
                    name="allocatedTo"
                    placeholder="Allocated To"
                    value={taskDataToEdit[0].username}
                />
            }
                </div>
            </div> 
    

 
                <div id="input_cover_all">
                <p> Task Tag</p>
                <div id="input_cover">
                {taskDataToEdit == null ? 
                <input
                    type="text"
                    id="form_input"
                    name="taskTag"
                    placeholder="Task Tags"
                />
                : 
                <input
                type="text"
                id="form_input"
                name="taskTag"
                placeholder="Task Tags"
                value={taskDataToEdit[0].taskTags}
            />
                }
                </div>
            </div>
        


     
                <div id="input_cover_all">
                <p> Task Detail</p>
                <div style={{ height: "215px", width: "350px" }} id="input_cover">
                {taskDataToEdit == null ? 
                <textarea
                    style={{ height: "215px", width: "350px", resize: "none" }}
                    id="form_input"
                    name="taskDetail"
                    rows="4"
                    cols="50"
                />
                :
                <textarea
                style={{ height: "215px", width: "350px", resize: "none" }}
                id="form_input"
                name="taskDetail"
                rows="4"
                cols="50"
                value={taskDataToEdit[0].taskDetail}
            />}
                </div>
            </div>
        

                </div>
        
                <div className="detail_project">

            
                <div id="input_cover_all">
                <p> Task Due Date</p>
                <div id="input_cover">
                {taskDataToEdit == null ? 
                <input
                    type="text"
                    id="form_input"
                    name="tduedate"
                    placeholder="DD/MM/YYYY"
                />
                : 
                <input
                    type="text"
                    id="form_input"
                    name="tduedate"
                    placeholder="DD/MM/YYYY"
                    value={taskDataToEdit[0].taskDue}
                />
                }

                </div>
            </div>
        

     
                <div id="input_cover_all">
                <p> Task Priority </p>
                <div id="input_cover">
                {taskDataToEdit == null ? 
                    <input
                    type="text"
                    id="form_input"
                    name="tpriority"
                    placeholder="1,2,3"
                />
                : 
                <input
                    type="text"
                    id="form_input"
                    name="tpriority"
                    placeholder="1,2,3"
                    value={taskDataToEdit[0].taskPriority}
                />}
                </div>
            </div>

                   
                <div id="input_cover_all">
                <p> Task Status</p>
                <div id="input_cover">

                    {returnStatus()}
                </div>
            </div>


                             
                <div id="input_cover_all">
                <p> Task Status</p>
                <div id="input_cover">
                    {returnSelected()}
                </div>
            </div>


                </div>
                    

            </div>   
            <a className="no_href_property" href="/task/todo"><input id="btn_add_task_submit" type="submit" value="Update" /></a>

        </form> 

        
    </div>
    )
}





export default EditTask; 

