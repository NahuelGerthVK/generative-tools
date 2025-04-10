/* - - Variables - - */
let img;
let canvas;

/* - - Setup - - */
function setup() {
  // create canvas inside div
  canvas = createCanvas(500, 500);
  canvas.parent("canvas");

  // styling
  background(255);

  // set up video export
  initRecorder(canvas);
}

/* - - Draw - - */
function draw() {
  background(255);
  // placeholder visual

  let ellipseSize = map(sin(frameCount * 0.04), -1, 1, 50, 400);
  fill(0);
  ellipse(width / 2, height / 2, ellipseSize);
}
