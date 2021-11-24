let contenedor = document.getElementById('anuncios');

function getColor(){
	let simbolos = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
	let color = "#";

	for (var i = 0; i < 6; i++) {
		color = color + simbolos[Math.floor(Math.random()*16)]
	}
	contenedor.style.background = color;
}

setInterval( () => {
	getColor();
}, 10000);
