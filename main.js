function changeAside(){
    let icon = document.querySelector(".icon"); 
    let aside = document.getElementById("aisde");
    if(icon.className == "icon"){
        icon.setAttribute("class", "icon iconcliked"); 
        aside.setAttribute("class", "content contentvisible"); 
    } else if(icon.className == "icon iconcliked"){
        icon.setAttribute("class", "icon"); 
        aside.setAttribute("class", "content"); 
    }
}
function changeOp(item){
    let elements = document.querySelectorAll(".item");
    let show = document.getElementsByClassName(item)[0];
    for (let i = 0; i < elements.length; i++){
        elements[i].style.opacity = 0;
    }
    show.style.opacity = 1;
}