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


let randomDisplacement = 15;
let rotateMultiplier = 20;
let offset = 0;

for (let i = 2 * squareSize; i <= size - 2 * squareSize; i += squareSize) {
	for (let j = 2 * squareSize; j <= size - 2 * squareSize; j += squareSize) {
		let plusOrMinus = Math.random() < 0.5 ? -1 : 1;
		let rotateAmount = j / size * Math.PI / 180 * plusOrMinus * Math.random() * rotateMultiplier;

		plusOrMinus = Math.random() < 0.5 ? -1 : 1;
		let translateAmount = j / size * plusOrMinus * Math.random() * randomDisplacement;


		context.save();
		context.translate(i + translateAmount + offset, j + offset);
		context.rotate(rotateAmount);
		draw(squareSize, squareSize);
		context.restore();
	}
}

