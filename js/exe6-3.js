let oBag = document.getElementById("bag");
let oBagContent = document.getElementById("bag_content");

oBag.addEventListener("click",function(){
    oBagContent.style.visibility = "visible";
    window.event.cancelBubble = true;
})

document.addEventListener("click",function(){
    oBagContent.style.visibility = "hidden";
})

