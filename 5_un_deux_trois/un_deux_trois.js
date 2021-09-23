let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');

let size = 480;
let dpr = window.devicePixelRatio;
canvas.width = size * dpr;
canvas.height = size * dpr;
context.scale(dpr, dpr);

context.fillStyle = 'yellow';
context.fillRect(0, 0, size, size);

context.lineWidth = 4;
context.lineCap = 'round';

let step = 20;
let thirdOfHeight = size / 3;

// 'positions' - where the line should be inside a small cube [0, 1]
function draw(x, y, width, height, positions) {
	context.save();
	context.translate(x + width / 2, y + height / 2);	// to rotate from middle of object
	context.rotate(Math.random() * 5);
	context.translate(-width / 2, -height / 2);	// go back from middle of object

	for (let i = 0; i < positions.length; i++) {
		context.beginPath();
		context.moveTo(positions[i] * width, 0);
		context.lineTo(positions[i] * width, height);
		context.stroke();
	}

	context.restore();
}

// add complexity as we go down
for (let y = step; y < size - step; y += step) {
	for (let x = step; x < size - step; x += step) {
		if (y < thirdOfHeight) {
			draw(x, y, step, step, [0.5]);
		} else if (y < thirdOfHeight * 2) {
			draw(x, y, step, step, [0.2, 0.8]);
		} else {
			draw(x, y, step, step, [0.1, 0.5, 0.9]);
		}
	}
}
