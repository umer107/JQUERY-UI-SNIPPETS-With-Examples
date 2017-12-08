$(document).ready(function(){
    $("#btn1").click(function(){
        $("img").before("<b>Before</b>");
    });

    $("#btn2").click(function(){
        $("img").after("<i>After</i>");
    });
});