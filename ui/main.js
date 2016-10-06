console.log('the page is primed and ready to go!!!');

var button=document.getElementById("counter");
button.onclick=function(){
    //create new request object
    
    var request=new XMLHttpRequest();
    
    //capturing response and updating html
    
    request.onreadystatechange = function(){
        if(readystatechange==XmlHttpRequest.DONE && request.status==200)
        {
            var counter=request.resposeText;
            var span=document.getElementById("count");
            span.innerHtml = counter.toString();
            
        }
    };
    
    //sending request
    request.open('GET','https://aswinoss.imad.hasura-app.io/counter',true);
    request.send(null);
    
    
    
};







/*var rep=window.prompt("Enter password");
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
    
    marginRight = marginRight + 20;
    img.style.marginRight = marginRight + 'px';
    
}

img.onclick=function()
{
    
    var interval=setInterval(moveLeft,50);
};
*/



