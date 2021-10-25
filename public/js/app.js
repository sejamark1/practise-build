//Showing the bar when user clicks on the user-image.
var user_image = document.getElementById("user-image"); 
var user_bar = document.getElementById("user-bar"); //Contains Logout and Account button
var bar_showing = true; 
user_image.addEventListener("click",function(){ 
    if(bar_showing){ 
        user_bar.style.display = "none"; 
        bar_showing=false; 
    }else{ 
        user_bar.style.display = "grid"; 
        bar_showing=true
    }
})



// EXPAND #task-bar when clicked on  #task-expand when clicked 
var allow_to_expand = true; 
var task_bar = document.querySelectorAll("#task-bar"); 
task_bar.forEach(taskBar =>{ 
    if(allow_to_expand == true){
        taskBar.addEventListener("click", function(){ 
            if(taskBar.classList.contains("barExpand")){ 
                taskBar.classList.remove("barExpand"); 
                taskBar.style.height = "50px"; 
                taskBar.children[1].classList.add("project-detail-cover")


            }else{
                taskBar.style.height = "100%"; 
                taskBar.classList.add("barExpand"); 
                taskBar.children[1].classList.remove("project-detail-cover")
            }


        })
    }
})

var progress_measure = document.querySelectorAll("#progress-measure"); 
var task_done_checked = 0; 
var task_done = document.querySelectorAll("#task-done"); 
var progress_meter = document.getElementById("progress-meter"); 
task_done.forEach(taskDone =>{ 
    checkIfTaskIsChecked(taskDone, "firstLoop");
    taskDone.addEventListener("click", function(){ 
        checkIfTaskIsChecked(taskDone);
    }); 
})



// Add percentage 

function checkIfTaskIsChecked(taskDone, l){ 
    progress_meter.max = task_bar.length; 
    if(taskDone.checked){ 
        task_done_checked +=1; 
        progress_meter.value = task_done_checked; 
    } else if(taskDone.checked == false){ 
        if(l != "firstLoop") {task_done_checked -=1}; 
        progress_meter.value = task_done_checked;    
    }
    var per_progress = Math.round((task_done_checked/progress_meter.max) * 100); 
    progress_measure[0].firstElementChild.innerText = "Progress " + per_progress.toString() +"%";

}

function progressMeterUpdate(progressMeter){ 
    progressMeter.value = task_done_checked; 

}




var priority_number = document.querySelectorAll(".priority-number"); 
var current_p_number= "1"; 
priority_number.forEach(pfn =>{ 
    pfn.addEventListener("click", function() { 
        priorityColourAssign(priority, pfn.textContent); 
    })
});


// Change colour based on number 
var priority = document.querySelectorAll(".project-priority"); 

const colour = { 
    RED: "#B10542", 
    YELLOW: "#CC6666", 
    GREEN: "#4EF500", 
}
priorityColourAssign(priority, current_p_number); 


function priorityColourAssign(priority, cmn){
    console.log(cmn); 
    priority.forEach(p =>{ 
        if(p.textContent == "1"){p.style.backgroundColor = colour.RED; }
        if(p.textContent == "2"){p.style.backgroundColor = colour.YELLOW; }
        if(p.textContent == "3"){p.style.backgroundColor = colour.GREEN; }
        if(cmn == "All"){ 
            p.parentElement.style.display ="";
        }else{
            if(p.textContent != cmn){
                p.parentElement.style.display="none";
            }else{ 
                p.parentElement.style.display=""
            }
        }
    })
}





// Change tags colour 
const tags = { 
    DESIGN: "#FF3200", 
    WEB: "#00DCFF", 
    RESEARCH: "#00A2FF", 
    DEVELOP: "#55FF00"
}

var document_tags = document.querySelectorAll("#btn_tags");
document_tags.forEach(Tags => { 
    if(Tags.textContent == "Design"){Tags.style.backgroundColor = tags.DESIGN}
    if(Tags.textContent == "Web"){Tags.style.backgroundColor = tags.WEB}
    if(Tags.textContent == "Research"){Tags.style.backgroundColor = tags.RESEARCH}
    if(Tags.textContent == "Develop"){Tags.style.backgroundColor = tags.DEVELOP}
})
