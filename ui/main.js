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

var img=document.getElementById("anonymous");                            //trying to move image right gradually
marginRight='0';
function moveLeft()
{
    
    marginRight=marginRight + 1;
    marginRight=marginRight + 'px';
    img.style.marginRight = marginRight;
}

img.onclick=function()
{
    
    setInterval(moveLeft,1000);
};

