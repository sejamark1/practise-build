import React from 'react'

function ContactUs() {
  function setSendEmailTo(){ 
    console.log("send");
  }







  return (
    <div class="disabled" id="add_task">
    <h1 id="add_title">Contact Us</h1>
    <form action="mailto:a@example.com" method="post">
        <div className="add_project_form">
            <div className="detail_project">                
                <div id="input_cover_all">
                <p> Enter email to send to:</p>
                <div id="input_cover">
                <input onChange={setSendEmailTo()}
                    type="text"
                    id="form_input"
                    name="emailto"
                    placeholder="example@email.com"
                />
                </div>
            </div>
  

    

            <div id="input_cover_all">
                <p> Message </p>
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
            
          <div style={{"font-size" : "10px", "padding" :"30px "}} id="comapny_info">
            <p> Contact</p>
            <p> 209-211 City Road</p>
            <p> London EC1V 1JN</p>
            <p> General enquiries: 020 7608 8700</p>
            <p> Email: infotimely@contact.org.uk</p>        
          </div>
            
        <a className="no_href_property" href="/task/todo"><input id="btn_add_task_submit" type="submit" value="Send" /></a>


    </form> 

    
</div>
  )
}

export default ContactUs