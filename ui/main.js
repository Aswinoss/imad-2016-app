console.log('the page is primed and ready to go!!!');
var rep=window.prompt("Enter password");
if(rep=="12345")
{
window.alert("Welcome Aswinos");
var element=document.getElementById("mainText");
element.innerHTML=`<pre>
                   <center>
                   We are Legion
                   We dont Forget
                   We dont Forgive
                   Expect us!
                   </center
                   </pre>`;
}
