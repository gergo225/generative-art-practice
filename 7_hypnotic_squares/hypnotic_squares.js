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

const finalSize = 3;
const offset = 2;
const tileCount = 7;
const tileStep = (size - 2 * offset) / tileCount;
const startSize = tileStep;
let startSteps;	// set later, randomly
const directions = [-1, 0, 1];	// where to tilt inner squares

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


for (let x = offset; x < size - offset; x += tileStep) {
	for (let y = offset; y < size - offset; y += tileStep) {
		startSteps = 2 + Math.ceil(Math.random() * 3);

		const xMovement = directions[Math.floor(Math.random() * directions.length)];
		const yMovement = directions[Math.floor(Math.random() * directions.length)];
		draw(x, y, startSize, startSize, xMovement, yMovement, startSteps - 1);
	}
}

