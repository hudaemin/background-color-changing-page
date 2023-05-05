
let renkler = ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "black", "white", "gray"];
let indeks = 0;

function degistir() {
document.body.style.backgroundColor = renkler[indeks];			
indeks = (indeks + 1) % renkler.length;
}
	