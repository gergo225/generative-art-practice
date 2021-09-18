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

let step = 10;
let lines = [];

// set up lines
for (let y = step; y <= size - step; y += step) {
	let line = [];

	for (let x = step; x <= size - step; x += step) {
		let random = Math.random() * 10;
		let point = { x: x, y: y + random };
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