console.log('the page is primed and ready to go!!!');
var rep=window.prompt("Enter password");
if(rep=="12345")
{
window.alert("Welcome Aswinos");
var element=document.getElementById("mainText");
element.innerHTML=
                 
                   `We are a Legion<br />
                    We don't Forget<br />
                    We don't Forgive<br />
                    Expect us!!!`;
}

var img=document.getElementById("anonymous");     
var  marginRight=0;//trying to move image right gradually
function moveLeft()
{
    
    marginRight=marginRight+2;
    marginRight=marginRight+'px';
    img.style.marginRight=marginRight;
}

img.onclick=function()
{
    var Interval=setInterval(moveLeft,50);
}

