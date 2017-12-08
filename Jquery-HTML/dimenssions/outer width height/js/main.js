$(document).ready(function(){
    $("button").click(function(){
        var txt = "";
        txt += "Width of div: " + $("#div1").width() + "</br>";
        txt += "Height of div: " + $("#div1").height() + "</br>";
        txt += "Outer width of div: " + $("#div1").outerWidth() + "</br>";
        txt += "Outer height of div: " + $("#div1").outerHeight();
        $("#div1").html(txt);
    });
});