// zrno.js
	
	document.getElementById("search_holder").addEventListener('submit', fja);
	
	function fja(event) {
		event.preventDefault();
		krckoOrascic();
	}
		
	document.getElementById("button").addEventListener('click', krckoOrascic);
	
function krckoOrascic() {
	
  	var text,
		nuts = document.getElementById("odgovor").value,
		nut = nuts.toLowerCase();
 
  	switch(nut) {
    	case "kikiriki":
      	text = "Kikiriki je mahunarka.";
      	break;
    	case "pirinač":
      	text = "Pirinač je žitarica.";
      	break;
		case "riža":
      	text = "Riža je žitarica.";
      	break;
      	case "heljda":
      	text = "Heljda je voće.";
      	break;
      	case "pasulj":
      	text = "Pasulj je mahunarka.";
      	break;
      	case "indijski orah":
      	text = "Indijski orah je voće.";
      	break;
      	case "soja":
      	text = "Soja je mahunarka koja se metaboliše u komponente koje simuliraju ženske hormone, iz kog razloga je jako opasna po zdravlje (telo proizvodi hormone koliko mu treba, svako prekoračenje je vezano s bolešću, bilo da bolesno telo počne da proizvodi veće ili manje količine hormona, ili da usled preteranog unosa hormona ishranom, telo postaje bolesno). Ako obratite pažnju, skoro svi proizvodi sa bar kodom, sadrže soju u nekom obliku.";
      	break;
    	default:
      	text = "Ne znam ovo zrno.";
  }
  document.getElementById("rotator").innerHTML = text;
  
}