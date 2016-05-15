// zrno.js

var zr = [], zrno, i, gRunner, plotter;

function Zrno(name, spec, desc) {
	this.name = name;
	this.spec = spec;
	this.gluten = this.name + " ne sadrži gluten.";
	this.img = "/imgz/" + this.name + ".jpg";
	this.desc = desc;
	
};

Zrno.prototype.dispInfo = fuction () {
	zrno = document.getElementById("odgovor").value;
	for (i=0; i < zr.length; i++) {
		if (zrno == zr[i]) {
				document.getElementById("rotator").innerHTML = this.name + " je " + this.spec + ".";
		}
	}
	
}
//paleo ili ne prve sub klase








var grasak = new Zrno("Grašak", "Mahunarka", "Ovde ide opis graška", );

zr.push();