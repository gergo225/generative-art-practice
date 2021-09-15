let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');

let size = 420;
let dpr = window.devicePixelRatio;
canvas.width = size * dpr;
canvas.height = size * dpr;
context.scale(dpr, dpr);

context.lineCap = 'square';
context.lineWidth = 2;

context.fillStyle = 'lightblue';
context.fillRect(0, 0, size, size);
context.fill();

function draw(x, y, width, height) {
	let leftToRight = Math.random() >= 0.5;

	if (leftToRight) {
		context.moveTo(x, y);
		context.lineTo(x + width, y + height);
	} else {
		context.moveTo(x + width, y);
		context.lineTo(x, y + height);
	}

	context.stroke();
}

draw(0, 0, size, size);