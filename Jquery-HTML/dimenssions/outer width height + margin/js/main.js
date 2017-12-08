$(document).ready(function(){
    $("button").click(function(){
        var txt = "";
        txt += "Width of div: " + $("#div1").width() + "</br>";
        txt += "Height of div: " + $("#div1").height() + "</br>";
        txt += "Outer width of div (margin included): " + $("#div1").outerWidth(true) + "</br>";
        txt += "Outer height of div (margin included): " + $("#div1").outerHeight(true);
        $("#div1").html(txt);
    });
});