let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');

let size = 480;
let dpr = window.devicePixelRatio;
canvas.width = size * dpr;
canvas.height = size * dpr;
context.scale(dpr, dpr);

context.lineCap = 'square';
context.lineWidth = 2;

context.fillStyle = 'lightblue';
context.fillRect(0, 0, size, size);

// draw from left to right or right to left randomly
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

let step = 40;

for (let x = 0; x < size; x += step) {
	for (let y = 0; y < size; y += step) {
		draw(x, y, step, step);
	}
}
