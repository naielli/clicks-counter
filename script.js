
var counter = document.querySelector("#clicksCounter");

var btn = document.querySelector("#btn-click");
btn.addEventListener("click", function(){
    var clicks = parseInt(counter.textContent) + 1;
    counter.textContent = clicks;

});

var reset = document.querySelector("#btn-reset");
reset.addEventListener("click", function(){
    counter.textContent = "0";
});