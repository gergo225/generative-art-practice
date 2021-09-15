let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');

let size = window.innerHeight;
let dpr = window.devicePixelRatio;

context.scale(dpr, dpr);

context.lineCap = 'square';
context.lineWidth = 2;

context.fillStyle = 'lightblue';
context.fillRect(0, 0, size, size);
context.fill();