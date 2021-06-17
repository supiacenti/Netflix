$("#list").hide();

$("#video").hide();
var d = document.querySelector("#destaque");
var v = document.querySelector("#video");
var vc = document.getElementsByClassName("video");
d.addEventListener("mouseenter", function(){
    $("#video").show();
    v.autoplay = true;
    v.load();
});
d.addEventListener("mouseleave", function(){
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
var carrossel = document.querySelector("#carrossel");
carrossel.addEventListener("mouseenter", function(){
    $("#video").hide();
});