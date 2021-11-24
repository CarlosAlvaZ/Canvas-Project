let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
let pos = canvas.getBoundingClientRect();
let x = 0, y = 0, drawing = false, color = 'black', size = 1;

window.onmousemove = () => {
	console.log(clientX)
}

function defineColor(cParam) {
	color = cParam;
}

function defineRange (sParam){
	size = sParam;
}


canvas.addEventListener('mousedown', (a) => {
	x = a.clientX - pos.left;
	y = a.clientY - pos.top;
	drawing = true;
});

canvas.addEventListener('mousemove', (b) => {
	if (drawing === true) {
		draw(x, y, b.clientX - pos.left, b.clientY - pos.top);
		x = b.clientX - pos.left;
		y = b.clientY - pos.top;
	}
});

canvas.addEventListener('mouseup', (c) => {
	if (drawing === true) {
		draw(x, y, c.clientX - pos.left, c.clientY - pos.top);
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

