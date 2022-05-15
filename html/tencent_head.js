let oBig_hover = document.getElementById("big_hover");
let oNavigation_menu_list_a = document.getElementsByClassName("navigation-menu-list-a");
let oNavigation_menu_list_ul_a = document.getElementsByClassName("navigation-menu-list-ul-a");
let oLogo = document.getElementById("h1_logo");
let oNavigation_menu_list = document.getElementsByClassName("navigation-menu-list");
let oNavigation = document.getElementById("navigation");
let oLang_kind = document.getElementsByClassName("lang_kind");

let scrollTop = 0;

window.onload = changeColor();

window.onscroll = function() {
    scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
    console.log(scrollTop);
    if(scrollTop===0)
    {
        for(let j=0;j<oNavigation_menu_list_a.length;j++)
            oNavigation_menu_list_a[j].style.color="white";
        oLogo.style.color = "white";
        changeColor();
        for(let i = 0;i<oLang_kind.length;i++)
            {
                oLang_kind[i].onmouseover = function () {
                    oLang_kind[i].style.color = "rgb(243,243,244)";
                }
                oLang_kind[i].onmouseout = function () {
                    oLang_kind[i].style.color = "rgb(180,180,181)";
                }
            }
    }
}

window.addEventListener("wheel",function(e) {
    let evt = e || window.event;
    scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
    if(evt.deltaY > 0)
    {
        oNavigation.style.position = "absolute";
        oNavigation.style.height = "0px";
        // console.log("向下滚动");
    }
    else if(evt.deltaY < 0 && scrollTop !== 0)
    {
        oNavigation.style.position = "fixed";
        oNavigation.style.background = "white";
        oNavigation.style.height = "72px";
        for(let i = 0;i < oNavigation_menu_list.length;i++)
        {
            oNavigation_menu_list_a[i].style.color="black";
        }
        oLogo.style.color = "rgb(0,82,217)";
        for(let i = 0;i < oNavigation_menu_list.length;i++)
        {
            oNavigation_menu_list[i].onmouseover = function() {
                for(let j=0;j<oNavigation_menu_list_a.length;j++)
                    oNavigation_menu_list_a[j].style.color="black";
                oLogo.style.color = "rgb(0,82,217)";
                oBig_hover.style.opacity = "1";
                oBig_hover.style.transform = "translateY(0)";
            }
            oNavigation_menu_list[i].onmouseout = function() {
                for(let j=0;j<oNavigation_menu_list_a.length;j++)
                    oNavigation_menu_list_a[j].style.color="black";
                oLogo.style.color = "rgb(0,82,217)";
                oBig_hover.style.opacity = "0";
                oBig_hover.style.transform = "translateY(-50vh)";
            }
            for(let i = 0;i<oLang_kind.length;i++)
            {
                oLang_kind[i].onmouseover = function () {
                    oLang_kind[i].style.color = "rgb(125,127,127)";
                }
                oLang_kind[i].onmouseout = function () {
                    oLang_kind[i].style.color = "rgb(180,180,181)";
                }
            }
        }    
        // console.log("向上滚动");
    }
    else 
    {
        oNavigation.style.background = "rgb(0,0,0,0)";
    }
})

// 当页面处于顶部的时候需要使用
function changeColor() {
    oNavigation.style.background = "";
    for(let i = 0;i < oNavigation_menu_list.length;i++)
    {
        oNavigation_menu_list[i].onmouseover = function() {
            for(let j=0;j<oNavigation_menu_list_a.length;j++)
                oNavigation_menu_list_a[j].style.color="black";
            oLogo.style.color = "rgb(0,82,217)";
            oBig_hover.style.opacity = "1";
            oBig_hover.style.transform = "translateY(0)";
        }
        oNavigation_menu_list[i].onmouseout = function() {
            for(let j=0;j<oNavigation_menu_list_a.length;j++)
                oNavigation_menu_list_a[j].style.color="white";
            oLogo.style.color = "white";
            oBig_hover.style.opacity = "0";
            oBig_hover.style.transform = "translateY(-50vh)";
        }
    }
    
    for(let i = 0;i<oNavigation_menu_list_ul_a.length;i++)
    {
        oNavigation_menu_list_ul_a[i].onmouseover = function() {
            oNavigation_menu_list_ul_a[i].style.color="rgb(44,47,47)";
        }
        oNavigation_menu_list_ul_a[i].onmouseout = function() {
            oNavigation_menu_list_ul_a[i].style.color="rgb(107,109,109)";
        }
    }
}