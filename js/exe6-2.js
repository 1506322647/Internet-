let oBtn = document.getElementById("changeSkin");
let oImgs = document.getElementById("chooseImgs");
let oChangeImg = document.getElementsByTagName("img");
let oSetting = document.getElementById("setting");
let oBody = document.getElementById("beijing");

oBtn.onclick = function(){
    oImgs.style.top = "100px";
}

oSetting.onclick = function(){
    oImgs.style.top = "-200px";
    // oSetting.style.display = "block";
}

function changeImgs(num){
    oChangeImg[num].onclick = function(){
        oBody.style.backgroundImage = 'url(../../images/scenery-'+(num+1)+'.jpg)';
        // oSetting.style.display = "none";
    }
}
    
for(let i=0;i<oChangeImg.length;i++)
{
    changeImgs(i);
}