const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const size = 480;
const dpr = window.devicePixelRatio;
canvas.width = size * dpr;
canvas.height = size * dpr;
context.scale(dpr, dpr);

context.fillStyle = 'purple';
context.fillRect(0, 0, size, size);

context.lineWidth = 2;


const circles = [];
const minRadius = 2;
const maxRadius = 100;
const totalCircles = 500;
const createCircleAttempts = 500;

context.strokeStyle = 'magenta';

function createAndDrawCircle() {
	let newCircle;
	let circleSafeToDraw = false;
	for (let tries = 0; tries < createCircleAttempts; ++tries) {
		newCircle = {
			x: Math.floor(Math.random() * size),
			y: Math.floor(Math.random() * size),
			radius: minRadius
		}

		if (doesCircleHaveACollision(newCircle)) {
			continue;
		} else {
			circleSafeToDraw = true;
			break;
		}
	}

	if (!circleSafeToDraw) {
		return;
	}


	for (let radiusSize = minRadius; radiusSize <= maxRadius; radiusSize++) {
		newCircle.radius = radiusSize;
		if (doesCircleHaveACollision(newCircle)) {
			newCircle.radius--;
			break;
		}
	}

	circles.push(newCircle);
	context.beginPath();
	context.arc(newCircle.x, newCircle.y, newCircle.radius, 0, Math.PI * 2);
	context.stroke();
}

function doesCircleHaveACollision(circle) {
	for (let i = 0; i < circles.length; ++i) {
		const otherCircle = circles[i];
		const combinedRadii = circle.radius + otherCircle.radius;
		const x = circle.x - otherCircle.x;
		const y = circle.y - otherCircle.y;

		if (combinedRadii >= Math.sqrt(x * x + y * y)) {
			return true;
		}
	}

	if (circle.x - circle.radius <= 0 ||
		circle.y - circle.radius <= 0 ||
		circle.x + circle.radius >= size ||
		circle.y + circle.radius >= size) {
		return true;
	}

	return false;
}

for (let i = 0; i < totalCircles; ++i) {
	createAndDrawCircle();
}