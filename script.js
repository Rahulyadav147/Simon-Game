// $("h1").css("color","red");

// adding eventListener to tags
$("h1").click(function(){

    $("h1").css("color","red");}  );

//adding click eventlistener to all the buttens without uisng for loop unlike javascript

$("button").click(function(){
    $("h1").css("color","green");
});

// adding keyboard press 
$("input").keydown(function(event){// input could be document or body:  so while hovering mouse cursor over it and typing we can get keys pressed in console using console.log
   $("h1").text(event.key); // changes the h1 to key value 
});

//flexible way of adding eventListener

$("h1").on("mouseover",function(){ // first parameter is event type
    $("h1").css("color","purple");
})
$("h1").before("<button>NewButton</button>");

$("h1").on("click",function(){ // first parameter is event type
    $("h1").animate({opacity:0.5}); //reduce color intensity 
})