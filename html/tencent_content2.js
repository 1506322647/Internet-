let home_l_text = document.querySelectorAll(".ten_home_l_text");
let home_l_icon = document.querySelectorAll(".ten_home_icon");
let home_r_div = document.querySelectorAll(".ten_home_r_div");
let home_r_img = document.querySelectorAll(".ten_home_r_img");
let home_r_text = document.querySelectorAll(".ten_home_r_text");
let $r_icon = $(".ten_home_r_text");

window.onload = function() {
    home_l_text[0].style.color = "white";
    home_l_text[0].style.left = "0px";
    home_l_icon[0].style.visibility = "visible";
}

for(let i=0;i<home_l_text.length;i++)
{
    home_l_text[i].addEventListener("mouseover",function(){
        home_r_div[i].style.visibility = "visible";
        home_r_div[i].style.order = "0";
        home_l_text[i].style.color = "white";
        home_l_text[i].style.left = "0px";
        home_l_icon[i].style.visibility = "visible";
        for(let j=0;j<home_l_text.length;j++)
        {
            if(j!=i)
            {
                home_r_div[j].style.visibility = "hidden";
                home_r_div[j].style.order = "1";
                home_l_text[j].style.color = "rgb(141,143,146)";
                home_l_text[j].style.left = "-20px";
                home_l_icon[j].style.visibility = "hidden";
            }
        }
    })
}

for(let i=0;i<home_r_img.length;i++)
{
    home_r_img[i].addEventListener("mouseover",function(){
        home_r_text[i].style.top = "-170px";
        for(let j=0;j<home_r_img.length;j++)
        {
            if(i!=j)
            {
                home_r_text[j].style.top = "-120px";
            }
        }
    })
}