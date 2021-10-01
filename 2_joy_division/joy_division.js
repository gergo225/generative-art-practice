const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const size = 480;
const dpr = window.devicePixelRatio;
canvas.width = size * dpr;
canvas.height = size * dpr;
context.scale(dpr, dpr);

context.lineCap = 'square';
context.lineWidth = 2;

context.fillStyle = 'orange';
context.fillRect(0, 0, size, size);

const step = 14;
const waveHeight = 3;
const waveSideOffset = 60;
const lines = [];

// set up lines
for (let y = step; y <= size - step; y += step) {
	const line = [];

	for (let x = step; x <= size - step; x += step) {
		const distanceToCenter = Math.abs(x - size / 2);
		const variance = Math.max(size / 2 - waveSideOffset - distanceToCenter, 0);

		const offset = Math.random() * variance / (10 / waveHeight) * -1;
		const point = { x: x, y: y + offset };
		line.push(point);
	}

	lines.push(line);
}


// draw lines
for (let lineIndex = 3; lineIndex < lines.length; lineIndex++) {
	context.beginPath();
	context.moveTo(lines[lineIndex][0].x, lines[lineIndex][0].y);

	for (var linePointIndex = 0; linePointIndex < lines[lineIndex].length - 2; linePointIndex++) {
		const xc = (lines[lineIndex][linePointIndex].x + lines[lineIndex][linePointIndex + 1].x) / 2;
		const yc = (lines[lineIndex][linePointIndex].y + lines[lineIndex][linePointIndex + 1].y) / 2;
		context.quadraticCurveTo(lines[lineIndex][linePointIndex].x, lines[lineIndex][linePointIndex].y, xc, yc);
	}

	// 'lineIndex' can be accessed here, because it was declared as var (keeps its value after loop ended)
	context.quadraticCurveTo(lines[lineIndex][linePointIndex].x, lines[lineIndex][linePointIndex].y,
		lines[lineIndex][linePointIndex + 1].x, lines[lineIndex][linePointIndex + 1].y);

	context.save();
	context.globalCompositeOperation = 'destination-out';
	context.restore();
	context.fillStyle = 'orange';
	context.fill();
	context.stroke();
}