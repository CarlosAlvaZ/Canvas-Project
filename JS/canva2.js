let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
let pos = canvas.getBoundingClientRect();
let x = 0, y = 0, drawing = false, color = 'black', size = 1;
const botonDescargar = document.getElementById('download');

function defineColor(cParam) {
	color = cParam;
}

function defineRange (sParam){
	size = sParam;
}


canvas.addEventListener('mousedown', (e) => {
	x = e.clientX - pos.left;
	y = e.clientY - pos.top;
	drawing = true;
});

canvas.addEventListener('mousemove', (e) => {
	if (drawing === true) {
		draw(x, y, e.clientX - pos.left, e.clientY - pos.top);
		x = e.clientX - pos.left;
		y = e.clientY - pos.top;
	}
});

canvas.addEventListener('mouseup', (e) => {
	if (drawing === true) {
		draw(x, y, e.clientX - pos.left, e.clientY - pos.top);
		x = 0;
		y = 0;
		drawing = false;
	}
});

function draw(x1, y1, x2, y2){
	context.beginPath();
	context.strokeStyle = color;
	context.lineWidth = size;
	context.moveTo(x1, y1);
	context.lineTo(x2, y2);
	context.stroke();
	context.closePath();
}

botonDescargar.addEventListener('click', () => {
	let link = document.createElement('a');

	link.download = "MyDesign";

	link.href = canvas.toDataURL();

	link.click();
})