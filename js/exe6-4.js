let oBtn_all = document.getElementById("all");
let oBtn_no = document.getElementById("no");
let oBtn_reverse = document.getElementById("reverse");
let oBtn_choose = document.getElementsByTagName("input");

oBtn_all.onclick = function() {
    for(let i=0;i<oBtn_choose.length;i++)
    {
        oBtn_choose[i].checked = true;
    }
}

oBtn_no.onclick = function() {
    for(let i=0;i<oBtn_choose.length;i++)
    {
        oBtn_choose[i].checked = false;
    }
}

oBtn_reverse.onclick = function() {
    for(let i=0;i<oBtn_choose.length;i++)
    {
        if(oBtn_choose[i].checked==false) oBtn_choose[i].checked=true;
        else oBtn_choose[i].checked=false;
    }
}