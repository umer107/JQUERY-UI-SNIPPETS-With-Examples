$(document).ready(function(){
    $("a").mouseenter(function(){
        $(this).css("background-color", "red");
    });
    $("a").mouseleave(function(){
    $(this).css("background-color", "#549078");
     });
});