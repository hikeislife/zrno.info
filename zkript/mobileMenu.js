var menu = document.getElementById("mobile_menu"),
	n = document.getElementById("nav");

menu.addEventListener("click", function(){
    if (n.style.display.match("inline")) {
    	n.style.display = "none";
    }
    else {
    	n.style.display = "inline";
    }
});
var afla = document.getElementById("afla"),
	germ = document.getElementById("germ"),
	cont = document.getElementById("cont"),
	wrap = document.getElementById("wrapper");

afla.onclick = function() {
	console.log("afla");
};
afla.onclick = function() {
	console.log("germ");
};
afla.onclick = function() {
	console.log("cont");
};
