$(document).ready(function(){
    $("a").hover(function(){
        $(this).css("background-color", "red");
    },
    function(){
        $(this).css("background-color", "#549078");
    }); 
});
/*$(document).ready(function(){
    $("a").mouseenter(function(){
        $(this).css("background-color", "red");
    });
    $("a").mouseleave(function(){
    $(this).css("background-color", "#549078");
     });
});