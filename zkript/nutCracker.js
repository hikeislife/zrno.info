var xhr,
	contents = document.getElementById("content"),
	wrap = document.getElementById("wrapper"),
	xhrt,
	K,
	bcgH,
	descBox
	searched = document.getElementById("query").value;

if (window.XMLHttpRequest) {
	xhr = new XMLHttpRequest();
}
else {
	contents.innerHTML = "Da li ste već čuli da je sada " + Date().getFullYear() + "?<p>Kako bi bilo da pređeš na neki bolji browser?";
}

xhr.open("GET", "zkript/zrnevlje.json");
xhr.onreadystatechange = function () {
	xhrt = xhr.responseText;

	if ((xhr.status === 200) && (xhr.readyState === 4)) {
				
		var zrna = JSON.parse(xhrt),
			brna = zrna.length;
		K = Math.floor(Math.random()*brna);
		console.log(K);
		var kernelName, latinName, engName,
			glutenB, gluten, glutenUp, glutenDown, glutenStUp,
			//screenWidth = screen.width,
			bcg, 
			paleo, paleoBox, paleoBoxText,
			descBox =  document.createElement("div");

		contents.innerHTML = "<img src='imgz/" + zrna[K].name + ".jpg' id='bcg-img' alt='ovo je " + zrna[K].name + "'>";

/* adds name of selected kernel to the page */
		kernelName = document.createElement("div");
		contents.appendChild(kernelName);
		kernelName.innerHTML = zrna[K].name;
		kernelName.id = "title";
/* adds kernel's latin name */
		latinName = document.createElement("div");
		contents.appendChild(latinName);
		latinName.innerHTML = "lat: <em>" + zrna[K].latin + "</em>";
		latinName.id = "latin";
/* adds kernel's english name*/
		engName = document.createElement("div");
		contents.appendChild(engName);
		engName.innerHTML = "eng: <em>" + zrna[K].english + "</em>";
		engName.id = "eng";

/* adds gluten button wrapper */
		glutenB = document.createElement("div");
		contents.appendChild(glutenB);
		glutenB.setAttribute("class", "glut");
/* adds upper bit of gluten button */
		glutenUp = document.createElement("div");
		glutenB.appendChild(glutenUp);
		glutenStUp = document.createTextNode("GLUTEN");
		glutenUp.appendChild(glutenStUp);
/* adds lower bit of gluten button */
		glutenDown = document.createElement("div");
		glutenB.appendChild(glutenDown);
/* pics formatting of gluten button */
		gluten = zrna[K].gluten;
		if (gluten === null) {
			glutenB.id = "gluten_polluted_button";
			glutenUp.id ="upper_gluten_polluted";
			glutenDown.id ="lower_glutten_polluted";
			glutenStDown = document.createTextNode("polluted");
			glutenDown.appendChild(glutenStDown);
		}
		else if (!gluten) {
			glutenB.id = "gluten_free_button";
			glutenUp.id ="upper_gluten_free";
			glutenDown.id ="lower_glutten_free";			
			glutenStDown = document.createTextNode("free");
			glutenDown.appendChild(glutenStDown);
		}
		else {
			glutenB.id = "gluten_button";
			glutenUp.id ="upper_gluten";
		};
		glutenB.onclick = loadComposition;
/* ending of gluten button */

/* adds paleo button */
		paleoBox = document.createElement("div");
		paleoBoxText = document.createTextNode(zrna[K].type);
		contents.appendChild(paleoBox);
		paleoBox.appendChild(paleoBoxText);
		paleoBox.setAttribute("class", "paleo_button");
		paleo = zrna[K].paleo;
/* pics formatting of paleo button */
		if (paleo) {
			paleoBox.id = "paleo_friendly";
		}
		else if (!paleo) {
			paleoBox.id = "not_paleo";
		}
		else {
			paleoBox.id ="up_to_you";
		}
		paleoBox.onclick = loadDescription;
/* ending of paleo button */

		contents.appendChild(descBox);
		descBox.id = "description";

	function loadComposition() {
		var d = document.getElementById("description");
		if (d.style.display.match("inline") && (descBox.innerHTML === zrna[K].nutr)) {
			d.style.display="none";
		}
		else if (d.style.display.match("inline") && (descBox.innerHTML === zrna[K].desc)) {
			descBox.innerHTML = zrna[K].nutr;
		}
		else {
			d.style.display="inline";
			descBox.innerHTML = zrna[K].nutr;
		}
	}

	function loadDescription() {
		var d = document.getElementById("description");
		if (d.style.display.match("inline") && (descBox.innerHTML === zrna[K].desc)) {
			d.style.display="none";
		}
		else if ((d.style.display.match("inline") && descBox.innerHTML === zrna[K].nutr)) {
			descBox.innerHTML = zrna[K].desc;
		}
		else {
			d.style.display="inline";
			descBox.innerHTML = zrna[K].desc;
		}
	}

	}
	
}
xhr.send();

