const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const size = 480;
const dpr = window.devicePixelRatio;
canvas.width = dpr * size;
canvas.height = dpr * size;
context.scale(dpr, dpr);



function drawLayeredSquares(x, y, areaSize) {
	context.save();

	let rectSize = areaSize;
	let rotation = Math.floor(180 * Math.random());
	const layers = 10;
	for (let layer = 0; layer < layers; layer++) {
		const redness = (224 - 17 * layer);
		const opacity = 0.07 + 0.15 * (1 - (layer / layers));
		context.fillStyle = 'rgba(' + redness + ', 56, 182, ' + opacity + ')';


		context.translate(x, y);
		context.rotate(Math.PI / 180 * rotation);

		// let offset = areaSize / 4 * Math.random() - areaSize / 8;
		// context.translate(offset, offset);
		context.fillRect(-rectSize / 2, -rectSize / 2, rectSize, rectSize);
		// context.translate(-offset, -offset);

		context.translate(-x, -y);

		rectSize -= rectSize / (layers - 1);
		rotation += 2;
	}
	context.restore();
}

const itemCount = 4 + Math.floor(Math.random() * 6);
for (let i = 0; i < itemCount; ++i) {
	drawLayeredSquares(Math.random() * size, Math.random() * size, 20 + Math.random() * 80);
}