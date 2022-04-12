import React from 'react'

function AddUsers() {
  return (
    <div class="disabled" id="add_task">

        
    <h1 id="add_title">Add Users</h1>

    <form action="/add-new-users" method="post">
        <div className="add_project_form">
            <div className="detail_project">
                
                <div id="input_cover_all">
                    <p> First Name </p>
                    <div id="input_cover">                   
                    <input type="text" min="1" id="form_input" name="fname" placeholder="First Name" />
                    </div>
                </div> 
                
       
        
            <div id="input_cover_all">
            <p> Surname </p>
            <div id="input_cover">
                    <input type="text" min="1" id="form_input" name="sname" placeholder="Surname" />

            </div>
        </div> 
  

            </div>
    
            <div className="detail_project">

        
            <div id="input_cover_all">
            <p> Username</p>
            <div id="input_cover">

            <input type="text" min="1" id="form_input" name="uname" placeholder="Username" />

            </div>
        </div>
    

 
            <div id="input_cover_all">
            <p> User Rank </p>
            <div id="input_cover">
            <select name="userRank" id="form_input"> 
                <option value="Team Leader"> Team Member</option>
                <option value="Team Leader"> Team Leader</option>

            </select>


            </div>
        </div>



                         
 

            </div>
                

        </div>   
        <a className="no_href_property" href="/task/todo"><input id="btn_add_task_submit" type="submit" value="Add Users" /></a>

    </form> 

    
</div>
  )
}

export default AddUsers