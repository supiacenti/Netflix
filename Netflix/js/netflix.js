$("#list").hide();
var c = document.querySelector("#conf");
c.addEventListener("mouseenter", function(){
    $("#list").show();
});
c.addEventListener("mouseleave", function(){
    $("#list").hide();
});