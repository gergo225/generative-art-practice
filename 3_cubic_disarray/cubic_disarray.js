let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');

let size = 480;
let dpr = window.devicePixelRatio;
canvas.width = size * dpr;
canvas.height = size * dpr;
context.scale(dpr, dpr);

context.lineWidth = 2;

let squareSize = 30;

context.fillStyle = 'lightgreen';
context.fillRect(0, 0, size, size);

function draw(width, height) {
	context.beginPath();
	context.rect(-width / 2, -height / 2, width, height);
	context.stroke();
}

for (let i = squareSize; i <= size - squareSize; i += squareSize) {
	for (let j = squareSize; j <= size - squareSize; j += squareSize) {
		context.save();
		context.translate(i, j);
		draw(squareSize, squareSize);
		context.restore();
	}
}