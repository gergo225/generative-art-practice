let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');

let size = 480;
let dpr = window.devicePixelRatio;
canvas.width = size * dpr;
canvas.height = size * dpr;
context.scale(dpr, dpr);

context.lineCap = 'square';
context.lineWidth = 2;

context.fillStyle = 'orange';
context.fillRect(0, 0, size, size);

const step = 10;
const waveHeight = 3;
const waveSideOffset = 60;
let lines = [];

// set up lines
for (let y = step; y <= size - step; y += step) {
	let line = [];

	for (let x = step; x <= size - step; x += step) {
		let distanceToCenter = Math.abs(x - size / 2);
		let variance = Math.max(size / 2 - waveSideOffset - distanceToCenter, 0);

		let offset = Math.random() * variance / (10 / waveHeight) * -1;
		let point = { x: x, y: y + offset };
		line.push(point);
	}

	lines.push(line);
}


// draw lines
for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
	context.beginPath();
	context.moveTo(lines[lineIndex][0].x, lines[lineIndex][0].y);

	for (let linePointIndex = 0; linePointIndex < lines[lineIndex].length; linePointIndex++) {
		context.lineTo(lines[lineIndex][linePointIndex].x, lines[lineIndex][linePointIndex].y);
	}

	context.stroke();
}