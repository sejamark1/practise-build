var priority_filter = document.querySelectorAll(".filter-priority"); 
priority_filter.forEach(pf => { 
    pf.addEventListener("click", function(){
        var pf_style = pf.firstElementChild.style.display; 
        if(pf_style == "none"){ 
            pf.firstElementChild.style.display = "grid";
        }else{ 
            pf.firstElementChild.style.display = "none";

        }
    })
}); 

