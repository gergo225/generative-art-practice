let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');

let size = 480;
let dpr = window.devicePixelRatio;
canvas.width = size * dpr;
canvas.height = size * dpr;
context.scale(dpr, dpr);
context.lineJoin = 'bevel';

context.fillStyle = 'pink';
context.fillRect(0, 0, size, size);

context.fillStyle = 'purple';
let gap = size / 7;
let lines = [];
let odd = false;

for (let y = gap / 2; y <= size; y += gap) {
	let line = [];
	odd = !odd;

	for (let x = gap / 4; x <= size; x += gap) {
		dot = { x: x + (odd ? gap / 2 : 0), y: y };
		line.push(dot);
		context.beginPath();
		context.arc(dot.x, dot.y, 1, 0, 2 * Math.PI, true);
		context.fill();
	}
	lines.push(line);
}


function drawTriangle(pointA, pointB, pointC) {
	context.beginPath();
	context.moveTo(pointA.x, pointA.y);
	context.lineTo(pointB.x, pointB.y);
	context.lineTo(pointC.x, pointC.y);
	context.lineTo(pointA.x, pointA.y);
	context.closePath();
	context.stroke();
}

odd = true;
for (let lineIndex = 0; lineIndex < lines.length - 1; lineIndex++) {
	odd = !odd;
	let combinedLine = [];

	for (let i = 0; i < lines[lineIndex].length; i++) {
		combinedLine.push(odd ? lines[lineIndex][i] : lines[lineIndex + 1][i]);
		combinedLine.push(odd ? lines[lineIndex + 1][i] : lines[lineIndex][i]);
	}

	for (let i = 0; i < combinedLine.length - 2; i++) {
		drawTriangle(combinedLine[i], combinedLine[i + 1], combinedLine[i + 2]);
	}
}