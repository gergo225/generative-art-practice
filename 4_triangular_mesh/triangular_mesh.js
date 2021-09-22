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

for (let y = gap / 2; y <= size; y += gap) {
	let line = [];
	for (let x = gap / 2; x <= size; x += gap) {
		line.push({ x: x, y: y });
		context.beginPath();
		context.arc(x, y, 1, 0, 2 * Math.PI, true);
		context.fill();
	}
	lines.push(line);
}