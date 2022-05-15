// 最上方的轮播图设置开始
let top_left = document.querySelector(".top_button_left");
let top_right = document.querySelector(".top_button_right");
let top_square = document.querySelectorAll(".top_square");
let top_imgs = document.querySelector(".ten_topbanner_ul");
let top_text = document.querySelectorAll(".ten_topbanner_text");

let top_index = 0;
let top_time;
let scrollTop = document.documentElement.scrollTop||document.body.scrollTop;;

window.onload = function() {
    changeColor();
    top_position();
    type2_position();
    home_l_pre[0].style.display = "block";
    home_l_text[0].style.color = "white";
    home_l_text[0].style.left = "0px";
    home_l_icon[0].style.visibility = "visible";
    oLang_kind[0].style.color = "rgb(255, 255, 255)";
    for(let i=1;i<oLang_kind.length;i++)
        oLang_kind[i].style.color = "rgb(180, 180, 181)";
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0)
        $oToTOP.css("bottom","40px");
    else
        $oToTOP.css("bottom","-200px");
    top_timer();
    type2_timer();
}

function top_position() {
    top_imgs.style.left = (top_index * -100) + "%";
    top_text[top_index].style.WebkitAnimationName = "text_float";
    top_square[top_index].style.width = "30px";
    top_square[top_index].style.backgroundColor = "rgb(0,82,217)";
    for(let j=0;j<top_square.length;j++)
        if(top_index!=j)
        {
            top_square[j].style.width = "10px";
            top_square[j].style.backgroundColor = "white";
            top_text[j].style.WebkitAnimationName = "none";
        }
}

function top_add() {
    if(top_index >= top_square.length - 1)
    {
        top_index = 0;
    } 
    else    
        top_index ++;
}

function top_reverse() {
    if(top_index < 1)
        top_index = top_square.length - 1;
    else    
        top_index --;
}

function top_timer() {
    top_time = setInterval(()=>{
        top_index ++;
        top_reverse();
        top_add();
        top_position();
    },10000);
}

top_left.addEventListener("click",function(){
    top_reverse();
    top_position();
    clearInterval(top_time);
    top_timer();
})

top_right.addEventListener("click",function(){
    top_add();
    top_position();
    clearInterval(top_time);
    top_timer();
})

for(let i = 0;i<top_square.length;i++)
{
    top_square[i].addEventListener('click',function(){
        top_index = i;
        top_position();
        clearInterval(top_time);
        top_timer();
    })
}

// 最上方的轮播图设置结束

// 中间的轮播图设置开始
let type1_img = document.querySelector(".type1_imgs_ul");
let type1_li = document.querySelectorAll(".type1_imgs");
let type1_button = document.querySelector(".type1_button0");
let type1_left = document.querySelector(".type1_button_left");
let type1_right = document.querySelector(".type1_button_right");
let type1_button1 = document.querySelector(".type1_button");
let type1_h2 = document.querySelector(".type1_button_h2");

let type1_index = 0;

type1_button1.addEventListener("mouseover",function(){
    type1_h2.style.color = "rgb(0,82,217)";
})

type1_button1.addEventListener("mouseout",function(){
    type1_h2.style.color = "black";
})

type1_button.addEventListener("mouseover",function(){
    type1_button.style.opacity = "1";
})

type1_button.addEventListener("mouseout",function(){
    type1_button.style.opacity = "0";
})

for(let i=0;i<type1_li.length;i++)
{
    type1_li[i].addEventListener("mouseover",function(){
        type1_button.style.opacity = "1";
    })
    
    type1_li[i].addEventListener("mouseout",function(){
        type1_button.style.opacity = "0";
    })
}

function type1_position() {
    type1_img.style.left = (type1_index * -100) + "%";
    type1_li[type1_index].style.WebkitAnimationName = "breath";
    for(let j=0;j<type1_li.length;j++)
        if(type1_index!=j)
        {
            type1_li[j].style.WebkitAnimationName = "none";
        }
}

function type1_add() {
    if(type1_index >= type1_li.length - 1)
    {
        type1_index = 0;
    }
    else type1_index ++;
}

function type1_reverse() {
    if(type1_index < 1)
    {
        type1_index = type1_li.length - 1;
    }
    else type1_index --;
}

type1_left.addEventListener("click",function(){
    type1_reverse();
    type1_position();
})

type1_right.addEventListener("click",function(){
    type1_add();
    type1_position();
})

// 中间的轮播图设置结束

// 最下方的轮播图设置开始
let type2_left = document.querySelector(".type2_button_left");
let type2_right = document.querySelector(".type2_button_right");
let squares = document.querySelectorAll(".square");
let type2_imgs = document.querySelector(".type2_imgs_ul");
let type2_index = 0;
let type2_time;

function type2_position() {
    type2_imgs.style.left = (type2_index * -100) + "%";
    for(let j=0;j<squares.length;j++)
        if(type2_index!=j)
        {
            squares[j].style.width = "10px";
            squares[j].style.backgroundColor = "white";
        }
    squares[type2_index].style.width = "30px";
    squares[type2_index].style.backgroundColor = "rgb(0,82,217)";
}

function type2_add() {
    if(type2_index>=squares.length-1)
    {
        type2_index = 0;
    }
    else 
        type2_index += 1;
}

function type2_reverse() {
    if(type2_index<1)
    {
        type2_index = squares.length - 1;
    }
    else
        type2_index -= 1;
}

function type2_timer() {
    type2_time = setInterval(()=>{
        type2_index ++;
        type2_reverse();
        type2_add();
        type2_position();
    },10000);
}

type2_left.addEventListener("click",function(){
    type2_reverse();
    type2_position();
    clearInterval(type2_time);
    type2_timer();
})

type2_right.addEventListener("click",function(){
    type2_add();
    type2_position();
    clearInterval(type2_time);
    type2_timer();
})

for(let i = 0;i < squares.length;i++)
{
    squares[i].addEventListener("click",function(){
        type2_index = i;
        type2_position();
        clearInterval(type2_time);
        type2_timer();
    })
}

// 最下方的轮播图设置结束

// 中间的黑色悬浮内容设置开始

let home_l_text = document.querySelectorAll(".ten_home_l_text");
let home_l_icon = document.querySelectorAll(".ten_home_icon");
let home_r_div = document.querySelectorAll(".ten_home_r_div");
let home_r_img = document.querySelectorAll(".ten_home_r_img");
let home_r_text = document.querySelectorAll(".ten_home_r_text");
let home_l_pre = document.querySelectorAll(".h2_pre");

for(let i=0;i<home_l_text.length;i++)
{
    home_l_text[i].addEventListener("mouseover",function(){
        home_l_pre[i].style.display = "block";
        home_r_div[i].style.visibility = "visible";
        home_r_div[i].style.order = "0";
        home_l_text[i].style.color = "white";
        home_l_text[i].style.left = "0px";
        home_l_icon[i].style.visibility = "visible";
        for(let j=0;j<home_l_text.length;j++)
        {
            if(j!=i)
            {
                home_l_pre[j].style.display = "none";
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
    home_r_img[i].addEventListener("mouseout",function() {
        home_r_text[i].style.top = "-120px";
    })
}

// 中间的黑色悬浮内容设置结束

// 返回顶层设置开始

let $oToTOP = $('.ten_totop');


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


// 返回顶层设置结束

let oBig_hover = document.getElementById("big_hover");
let oNavigation_menu_list_a = document.getElementsByClassName("navigation-menu-list-a");
let oNavigation_menu_list_ul_a = document.getElementsByClassName("navigation-menu-list-ul-a");
let oLogo = document.getElementById("h1_logo");
let oNavigation_menu_list = document.getElementsByClassName("navigation-menu-list");
let oNavigation = document.getElementById("navigation");
let oLang_kind = document.getElementsByClassName("lang_kind");


window.onscroll = function() {
    scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
    if(scrollTop===0)
    {
        changeColor();
        for(let j=0;j<oNavigation_menu_list_a.length;j++)
            oNavigation_menu_list_a[j].style.color="white";
        oLogo.style.color = "white";
    }
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0)
    {
        $oToTOP.css("bottom","40px");
        for(let j=0;j<oLang_kind.length;j++)
        {
            if(window.getComputedStyle(oLang_kind[j]).color === "rgb(255, 255, 255)")
                oLang_kind[j].style.color = "black";
        }
    }
    else
    {
        $oToTOP.css("bottom","-200px");
        for(let j=0;j<oLang_kind.length;j++)
        {
            if(window.getComputedStyle(oLang_kind[j]).color === "rgb(0, 0, 0)")
                oLang_kind[j].style.color = "white";
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
                // for(let j=0;j<oLang_kind.length;j++)
                // {
                //     if(window.getComputedStyle(oLang_kind[j].color==="rgb(255, 255, 255)"))
                //     {
                //         oLang_kind[j].style.color = "black";
                //     }
                // }
            }
            oNavigation_menu_list[i].onmouseout = function() {
                for(let j=0;j<oNavigation_menu_list_a.length;j++)
                    oNavigation_menu_list_a[j].style.color="black";
                oLogo.style.color = "rgb(0,82,217)";
                oBig_hover.style.opacity = "0";
                oBig_hover.style.transform = "translateY(-50vh)";
            }
        }    
    }
    else 
    {
        // for(let j=0;j<oLang_kind.length;j++)
        // {
        //     if(window.getComputedStyle(oLang_kind[j]).color === "rgb(0, 0, 0)")
        //         oLang_kind[j].style.color = "white";
        // }
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
            // for(let j=0;j<oLang_kind.length;j++)
            // {
            //     if(window.getComputedStyle(oLang_kind[j]).color === "rgb(255, 255, 255)")
            //     {
            //         oLang_kind[j].style.color = "black";
            //     }
            // }
        }
        oNavigation_menu_list[i].onmouseout = function() {
            for(let j=0;j<oNavigation_menu_list_a.length;j++)
                oNavigation_menu_list_a[j].style.color="white";
            oLogo.style.color = "white";
            oBig_hover.style.opacity = "0";
            oBig_hover.style.transform = "translateY(-50vh)";
            // for(let j=0;j<oLang_kind.length;j++)
            // {
            //     if(window.getComputedStyle(oLang_kind[j]).color === "rgb(0, 0, 0)")
            //     {
            //         oLang_kind[j].style.color = "white";
            //     }
            // }
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

let oVideoDiv = document.querySelector(".ten_row_video");
let oVideo = document.querySelector(".video");
let oVImg = document.querySelector(".ten_row_video>img")
let oPlay = document.querySelector(".ten_img_play");
let oText = document.querySelector(".ten_card_row4_text");

oVideoDiv.addEventListener("click",function() {
    oVideo.style.opacity = "1";
    oVImg.style.opacity = "0";
    oPlay.style.opacity = "0";
    oText.style.opacity = "0";
})

// 鼠标悬浮语言框的不同状态时的显示

let a = setInterval(LangHover,0);

function LangHover()
{
    for(let i = 0;i < oLang_kind.length;i ++)
    {
        let idx = 0;
        for(let j = 0;j < oLang_kind.length;j ++)
        {
            if(window.getComputedStyle(oLang_kind[j]).color === "rgb(255, 255, 255)" || window.getComputedStyle(oLang_kind[j]).color === "rgb(0, 0, 0)")
            {
                idx = j;break;
            }
        }
        function modifyColor_1()
        {
            if(window.getComputedStyle(oNavigation).backgroundColor === "rgb(255, 255, 255)")
            {
                oLang_kind[i].style.color = "black";
            }
            else
            {
                oLang_kind[i].style.color = "white";
            }
        }
        function modifyColor_2()
        {
            if((window.getComputedStyle(oLang_kind[i]).color === "rgb(255, 255, 255)" || window.getComputedStyle(oLang_kind[i]).color === "rgb(0, 0, 0)") && idx != i)
                oLang_kind[i].style.color = "rgb(180, 180, 181)";
        }
        oLang_kind[i].addEventListener("mouseover",modifyColor_1,false);
        oLang_kind[i].addEventListener("mouseout", modifyColor_2,false);
        oLang_kind[i].addEventListener("click",function() {
            if(window.getComputedStyle(oNavigation).backgroundColor === "rgb(255, 255, 255)")
            {
                oLang_kind[i].style.color = "black";
                for(let j = 0;j < oLang_kind.length; j++)
                {
                    if(i != j)  oLang_kind[j].style.color = "rgb(180, 180, 181)";
                }
            }
            else
            {
                oLang_kind[i].style.color = "white";
                for(let j = 0;j < oLang_kind.length; j++)
                {
                    if(i != j)  oLang_kind[j].style.color = "rgb(180, 180, 181)";
                }
            }
            oLang_kind[i].removeEventListener("mouseout", modifyColor_2,false);
        })
    }
}

let b = setInterval(checkLang,0);

function checkLang()
{
    for(let i = 0;i < oLang_kind.length;i ++)
    {
        if(window.getComputedStyle(oLogo).color === "rgb(0, 82, 217)" && window.getComputedStyle(oLang_kind[i]).color === "rgb(255, 255, 255)")
        {
            oLang_kind[i].style.color = "black";
        }
        else if(window.getComputedStyle(oLogo).color === "rgb(255, 255, 255)" && window.getComputedStyle(oLang_kind[i]).color === "rgb(0, 0, 0)")
        {
            oLang_kind[i].style.color = "white";
        }
    }
}

