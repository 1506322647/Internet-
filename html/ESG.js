let oBig_hover = document.getElementById("big_hover");
let oNavigation_menu_list_a = document.getElementsByClassName("navigation-menu-list-a");
let oNavigation_menu_list_ul_a = document.getElementsByClassName("navigation-menu-list-ul-a");
let oLogo = document.getElementById("h1_logo");
let oNavigation_menu_list = document.getElementsByClassName("navigation-menu-list");
let oNavigation = document.getElementById("navigation");
let oLang_kind = document.getElementsByClassName("lang_kind");
let $oToTOP = $('.ten_totop');
let $oNav = $('.mod-nav');
let $oNav_li = $('.mod-nav ul li');
let $line = $(".line");

let scrollTop = 0;
var NavHeight = $oNav.offset().top;
var h = 100;
var EnvHeight = $(".environment").offset().top;
var SocHeight = $(".society").offset().top - h;
var GovHeight = $(".govern").offset().top - h;
var EsgHeight = $(".ESG_grade").offset().top - h;
var RepHeight = $(".mod-report").offset().top - h;
var flag = 0;


window.onload =    function() {
    changeColor();
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0)
        $oToTOP.css("bottom","40px");
    else
        $oToTOP.css("bottom","-200px");
}

window.onscroll = function() {
    scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
    if(scrollTop >= NavHeight)
    {
        $oNav.css({
            "position":"fixed",
            "top":"20px",
        });
        $oNav_li.css({
            "top": "50%",
            "transform": "translateY(-120%)",
        })
    }
    else 
    {
        $oNav.css({
            "position":"relative",
            "top":"72px",
        });
        $oNav_li.css({
            "top": "50%",
            "transform": "translateY(50%)",
        })
    } 
    if(scrollTop > 0)
    {
        // $oToTOP.css("display","block");
        $oToTOP.css("bottom","40px");
    }
    else
    {
        if(scrollTop===0)
        {
            changeColor();
            // for(let j=0;j<oNavigation_menu_list_a.length;j++)
            //     oNavigation_menu_list_a[j].style.color="black";
            // oLogo.style.color = "rgb(0,82,217)";
            // for(let i = 0;i<oLang_kind.length;i++)
            // {
            //     oLang_kind[i].onclick = function() {
            //         oLang_kind[i].style.color = "black";
            //         for(let j = 0;j < oLang_kind.length;j ++)
            //         {
            //             if(i!=j)    oLang_kind[j].style.color = "rgb(180,180,181)";
            //         }
            //     }
            // }
            // $oToTOP.css("display","none");
            $oToTOP.css("bottom","-200px");
        }
    }
    if(scrollTop < SocHeight)
    {
        $line.css("width","32px");
        $line.css("left","151px");
    }
    else if(scrollTop < GovHeight)
    {
        $line.css("width","32px");
        $line.css("left","256px");
    }
    else if(scrollTop < EsgHeight)
    {
        $line.css("left","361px");
        $line.css("width","32px");
    }
    else if(scrollTop < RepHeight)
    {
        $line.css("left","462px");
        $line.css("width","66px");
    }
    else if(scrollTop >= RepHeight)
    {
        $line.css("left","600px");
        $line.css("width","32px");
    }
}


$oToTOP.on("click",function() {
    // let timer = setInterval(function(){
    //     let osTop = document.documentElement.scrollTop || document.body.scrollTop;
    //     //减小的速度
    //     let isSpeed = Math.floor(-osTop/6);
    //     document.documentElement.scrollTop = document.body.scrollTop = osTop+isSpeed; 
    //     //判断，然后清除定时器
    //     if (osTop == 0) {
    //         clearInterval(timer);
    //     } 
    // },30);        
    $("html,body").animate({scrollTop:0},400,'linear');
})

$(".a_environment").on("click",function() {
    $("html,body").animate({scrollTop:EnvHeight-150},300,'linear');
    oNavigation.style.position = "absolute";
    oNavigation.style.height = "0px";
})

$(".a_society").on("click",function() {
    $("html,body").animate({scrollTop:SocHeight},300,"linear");
    oNavigation.style.position = "absolute";
    oNavigation.style.height = "0px";
})

$(".a_gover").on("click",function() {
    $("html,body").animate({scrollTop:GovHeight},300,'linear');
    oNavigation.style.position = "absolute";
    oNavigation.style.height = "0px";
})

$(".a_esg").on("click",function() {
    $("html,body").animate({scrollTop:EsgHeight},300,"linear");
    oNavigation.style.position = "absolute";
    oNavigation.style.height = "0px";
})

$(".a_report").on("click",function() {
    $("html,body").animate({scrollTop:RepHeight},300,"linear");
    oNavigation.style.position = "absolute";
    oNavigation.style.height = "0px";
})

window.addEventListener("wheel",function(e) {
    let evt = e || window.event;
    scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
    if(evt.deltaY > 0)
    {
        oNavigation.style.position = "absolute";
        oNavigation.style.height = "0px";
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
                oLang_kind[i].onclick = function() {
                    oLang_kind[i].style.color = "rgb(43,46,46)";
                    for(let j = 0;j < oLang_kind.length;j ++)
                        if(i!=j)    oLang_kind[j].style.color = "rgb(180,180,181)";
                }
            }
        }    
    }
    else 
    {
        oNavigation.style.background = "rgb(0,0,0,0)";
    }
})

// 当页面处于顶部的时候需要使用
function changeColor() {
    if(flag==0)
        oLang_kind[0].style.color = "rgb(43,46,46)",flag = 1;
    // oNavigation.style.background = "";
    for(let j=0;j<oNavigation_menu_list_a.length;j++)
        oNavigation_menu_list_a[j].style.color="black";
    oLogo.style.color = "rgb(0,82,217)";
    for(let i = 0;i < oNavigation_menu_list.length;i++)
    {
        oNavigation_menu_list[i].onmouseover = function() {
            oBig_hover.style.opacity = "1";
            oBig_hover.style.transform = "translateY(0)";
        }
        oNavigation_menu_list[i].onmouseout = function() {
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
    for(let i = 0;i<oLang_kind.length;i++)
    {
        oLang_kind[i].onclick = function() {
            oLang_kind[i].style.color = "rgb(43,46,46)";
            for(let j = 0;j < oLang_kind.length;j ++)
                if(i!=j)    oLang_kind[j].style.color = "rgb(180,180,181)";
        }
    }
}