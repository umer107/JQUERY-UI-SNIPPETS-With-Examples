x = 0;
$(document).ready(function(){
    $("div").scroll(function(){
        $("span").text( x+= 1);
    });
});