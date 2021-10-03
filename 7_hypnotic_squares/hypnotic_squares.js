const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const size = 480;
const dpr = window.devicePixelRatio;
canvas.width = size * dpr;
canvas.height = size * dpr;
context.scale(dpr, dpr);

context.fillStyle = 'lightgreen';
context.fillRect(0, 0, size, size);

context.lineWidth = 2;
context.strokeStyle = 'green';

const finalSize = 10;
const startSize = size;
const startSteps = 5;

function draw(x, y, width, height, xMovement, yMovement, steps) {
	context.beginPath();
	context.rect(x, y, width, height);
	context.stroke();

	if (steps >= 0) {
		const newSize = startSize * (steps / startSteps) + finalSize;
		let newX = x + (width - newSize) / 2;
		let newY = y + (height - newSize) / 2;

		newX -= ((x - newX) / (steps + 2)) * xMovement;
		newY -= ((y - newY) / (steps + 2)) * yMovement;

		draw(newX, newY, newSize, newSize, xMovement, yMovement, steps - 1);
	}
}

draw(0, 0, startSize, startSize, 1, 1, startSteps);