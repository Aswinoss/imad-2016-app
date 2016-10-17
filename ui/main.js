console.log('the page is primed and ready to go!!!');


//AJAX CALLS AND COUNTER

var button=document.getElementById("counter");
button.onclick=function(){
  
    //create new request object
    
    var request=new XMLHttpRequest();
    
    //capturing response and updating html
    
    request.onreadystatechange = function(){
        if(request.readyState===XMLHttpRequest.DONE){ 
        if(request.status===200)                              //to check if the request is done and it is successful one.
        {
            var counter=request.responseText;
            var span=document.getElementById("call");
            span.innerHTML =counter.toString();
            
        }
        }
    };
    
    //sending request
    request.open('GET',"http://aswinoss.imad.hasura-app.io/counter",true);
    request.send(null);
    
};



//DYNAMIC DATA SUBMISSION AND RESPONSE similar to search in gmail webpage



var submit=document.getElementById("submit_btn");

submit.onclick=function(){
     //create new request object
    
    var request=new XMLHttpRequest();
    
    //capturing response and updating html
    
    request.onreadystatechange = function(){
        if(request.readyState===XMLHttpRequest.DONE){ 
        if(request.status===200)                              //to check if the request is done and it is successful one.
        {
        
         var names=request.responseText;
         names=JSON.parse(names);                               //to convert response String into array     
    var list=' ';
    for(var i=0;i<names.length;i++){
        list+='<li>'+names[i]+'</li>';
    }
    var ul=document.getElementById("ul_list");
    ul.innerHTML=list;
        
            
        }
        }
    };
    var query=document.getElementById("name").value;
    //sending request
    request.open('GET',"http://aswinoss.imad.hasura-app.io/submit_name?name="+query,true);
    request.send(null);
    
   
    
};


//Animation in our webpage


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



