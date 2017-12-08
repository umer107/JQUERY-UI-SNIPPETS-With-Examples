$(document).ready(function(){
    $("a").focus(function(){
        $(this).css("background-color", "red");
    });
    $("a").blur(function(){
        $(this).css("background-color", "#549078");
    });
});