$("#list").hide();

$("#video").hide();

$("#seta").hide();

var d = document.querySelector("#destaque");
var v = document.querySelector("#video");
var l = document.querySelector("#l");
var vc = document.getElementsByClassName("video");
var html = document.querySelector("#html");

$("#destaque").one("mouseenter", function(){
    $("#video").show();
    v.autoplay = true;
    v.load();
});
$("#destaque").one("click", function(){
    $("#video").hide();
    v.autoplay = false;
    v.load();
});

var c = document.querySelector("#conf");
var c2 = document.querySelector("#conf2");
c.addEventListener("mouseenter", function(){
    $("#list").show();
});
c.addEventListener("click", function(){
    $("#list").hide();
});
c2.addEventListener("mouseenter", function(){
    $("#list").show();
});
c2.addEventListener("click", function(){
    $("#list").hide();
});

var t1 = document.querySelector("#titulo1");
t1.addEventListener("mouseenter", function(){
    $("#seta").show();
});
t1.addEventListener("mouseleave", function(){
    $("#seta").hide();
});

var carrossel = document.querySelector("#carrossel");
