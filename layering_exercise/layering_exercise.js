let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');

let size = 480;
let dpr = window.devicePixelRatio;
canvas.width = dpr * size;
canvas.height = dpr * size;
context.scale(dpr, dpr);


let layers = 10;
for (let layer = 0; layer < layers; layer++) {
	let redness = (224 - 17 * layer);
	let opacity = 0.07 + 0.15 * (1 - (layer / layers));
	context.fillStyle = 'rgba(' + redness + ', 56, 182, ' + opacity + ')';

	let margin = layer * 10 + 48;
	let rectSize = size - margin * 2;
	let offset = 80 * Math.random() - 40;
	context.fillRect(margin + offset, margin + offset, rectSize, rectSize);

	context.translate(size / 2, size / 2);
	context.rotate(Math.PI * Math.random());
	context.translate(-size / 2, -size / 2);
}