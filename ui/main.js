
var  button= document.getElementById('counter');
var counter =0;
button.onclick = function() 
{
    var request = XMLHttpRequest();
    request.onreadystatechange = function(){
    // Process the server response here.
    if(request.readyState===XMLHttpRequest.DONE)
    {
        if(request.status==200)
        {
         var counter = request.responseText;
          var span = document.getElementById('count');
    span.innerHTML= counter.toString();
        }
    }
};

request.open('GET', 'http://ashishjha10001.imad.hasura-app.io/counter', true);
request.send();
};
